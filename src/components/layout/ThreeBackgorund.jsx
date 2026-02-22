import { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeBackground({ dark }) {
  const canvasRef = useRef(null);
  const matRef    = useRef(null);

  useEffect(() => {
    const canvas   = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const isMobile  = window.innerWidth < 600;
    const dotCount  = isMobile ? 900 : 1800;
    const positions = new Float32Array(dotCount * 3);
    const colorArr  = new Float32Array(dotCount * 3);
    const c1 = new THREE.Color("#4f8ef7");
    const c2 = new THREE.Color("#a78bfa");
    const c3 = new THREE.Color("#34d399");

    for (let i = 0; i < dotCount; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 130;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 90;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 70;
      const p  = Math.random();
      const cc = p < 0.5 ? c1 : p < 0.8 ? c2 : c3;
      colorArr[i * 3] = cc.r; colorArr[i * 3 + 1] = cc.g; colorArr[i * 3 + 2] = cc.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color",    new THREE.BufferAttribute(colorArr, 3));

    const material = new THREE.PointsMaterial({ size: 0.15, vertexColors: true, transparent: true, opacity: 0.35, sizeAttenuation: true });
    matRef.current = material;
    scene.add(new THREE.Points(geometry, material));

    const addMesh = (geo, color, opacity, x, y, z) => {
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color, wireframe: true, transparent: true, opacity }));
      m.position.set(x, y, z); scene.add(m); return m;
    };
    const torus = addMesh(new THREE.TorusKnotGeometry(7, 2.2, 120, 18), 0x4f8ef7, 0.05,  22, -6, -12);
    const ico   = addMesh(new THREE.IcosahedronGeometry(5.5, 1),          0xa78bfa, 0.05, -26,  8, -14);
    const oct   = addMesh(new THREE.OctahedronGeometry(4, 1),             0x34d399, 0.04,   0, 18, -20);

    let mouseX = 0, mouseY = 0, scrollY = 0, tick = 0, animId;

    const onMouse  = (e) => { mouseX = (e.clientX / window.innerWidth - 0.5) * 2; mouseY = (e.clientY / window.innerHeight - 0.5) * 2; };
    const onTouch  = (e) => { if (!e.touches[0]) return; mouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 2; mouseY = (e.touches[0].clientY / window.innerHeight - 0.5) * 2; };
    const onScroll = () => { scrollY = window.scrollY; };

    document.addEventListener("mousemove", onMouse);
    document.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    const pts = scene.children.find((c) => c instanceof THREE.Points);
    const animate = () => {
      animId = requestAnimationFrame(animate); tick += 0.003;
      pts.rotation.y = tick * 0.1 + mouseX * 0.06;
      pts.rotation.x = tick * 0.04 + mouseY * 0.03;
      torus.rotation.x = tick * 0.35; torus.rotation.y = tick * 0.22;
      ico.rotation.x   = -tick * 0.28; ico.rotation.z  = tick * 0.18;
      oct.rotation.y   = tick * 0.2;  oct.rotation.x  = tick * 0.15;
      camera.position.y = -scrollY * 0.007;
      camera.position.x = mouseX   * 1.2;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMouse);
      document.removeEventListener("touchmove", onTouch);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  useEffect(() => {
    if (matRef.current) matRef.current.opacity = dark ? 0.45 : 0.28;
  }, [dark]);

  return (
    <canvas
      ref={canvasRef}
      className="bg-canvas"
    />
  );
}