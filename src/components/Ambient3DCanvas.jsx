import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Ambient3DCanvas
 * Renders an ambient, continuous 3D background with floating iridescent soap bubbles,
 * sparkling light dust, and smooth camera parallax following scroll & mouse.
 */
export default function Ambient3DCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    containerRef.current.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xdcfce7, 1.2);
    dirLight1.position.set(10, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xfef3c7, 1.0);
    dirLight2.position.set(-10, -10, 5);
    scene.add(dirLight2);

    // 1. Floating Iridescent Bubbles (Spheres)
    const bubblesGroup = new THREE.Group();
    const bubbleCount = 14;
    const bubbleSpheres = [];

    const sphereGeom = new THREE.SphereGeometry(1, 32, 32);

    for (let i = 0; i < bubbleCount; i++) {
      const radius = THREE.MathUtils.randFloat(0.5, 1.8);
      const isMint = i % 2 === 0;

      const bubbleMat = new THREE.MeshPhysicalMaterial({
        color: isMint ? 0x2a8f68 : 0xf59e0b,
        emissive: isMint ? 0x124c3a : 0x78350f,
        emissiveIntensity: 0.2,
        roughness: 0.1,
        metalness: 0.1,
        transmission: 0.85, // Glass / bubble translucency
        thickness: 0.8,
        transparent: true,
        opacity: 0.45,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1
      });

      const sphere = new THREE.Mesh(sphereGeom, bubbleMat);
      sphere.scale.setScalar(radius);

      sphere.position.set(
        THREE.MathUtils.randFloatSpread(35),
        THREE.MathUtils.randFloatSpread(25),
        THREE.MathUtils.randFloat(-10, 10)
      );

      sphere.userData = {
        speedY: THREE.MathUtils.randFloat(0.005, 0.015),
        speedX: THREE.MathUtils.randFloat(-0.003, 0.003),
        wobbleSpeed: THREE.MathUtils.randFloat(0.8, 2.0),
        wobbleAmp: THREE.MathUtils.randFloat(0.05, 0.15),
        initialScale: radius,
        startY: sphere.position.y
      };

      bubbleSpheres.push(sphere);
      bubblesGroup.add(sphere);
    }
    scene.add(bubblesGroup);

    // 2. Sparkling Clean Dust / Micro-particles (Points)
    const particleCount = 160;
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    const mintColor = new THREE.Color(0x2a8f68);
    const goldColor = new THREE.Color(0xf59e0b);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3] = THREE.MathUtils.randFloatSpread(50);
      posArray[i * 3 + 1] = THREE.MathUtils.randFloatSpread(40);
      posArray[i * 3 + 2] = THREE.MathUtils.randFloat(-15, 15);

      const choice = Math.random();
      const color = choice < 0.45 ? mintColor : choice < 0.8 ? goldColor : whiteColor;
      colorArray[i * 3] = color.r;
      colorArray[i * 3 + 1] = color.g;
      colorArray[i * 3 + 2] = color.b;
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particleGeom.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    // Custom circle texture for soft glowing particles
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 30);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.35, 'rgba(255,255,255,0.7)');
    grad.addColorStop(0.7, 'rgba(255,255,255,0.2)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.65,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // Mouse & Scroll Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetCameraX = mouseX * 2.5;
      targetCameraY = mouseY * 2.0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera parallax
      camera.position.x += (targetCameraX - camera.position.x) * 0.04;
      camera.position.y += (targetCameraY - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      // Animate Bubbles
      bubbleSpheres.forEach((sphere, idx) => {
        sphere.position.y += sphere.userData.speedY;
        sphere.position.x += Math.sin(elapsedTime * sphere.userData.wobbleSpeed + idx) * 0.01;

        // Wrap around vertically
        if (sphere.position.y > 18) {
          sphere.position.y = -18;
          sphere.position.x = THREE.MathUtils.randFloatSpread(35);
        }

        // Gentle organic scale wobble
        const wobble = Math.sin(elapsedTime * 2 + idx) * sphere.userData.wobbleAmp;
        const currentScale = sphere.userData.initialScale + wobble;
        sphere.scale.setScalar(currentScale);
        sphere.rotation.y += 0.005;
      });

      // Animate Particles
      const positions = particleGeom.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += 0.012;
        if (positions[i * 3 + 1] > 22) {
          positions[i * 3 + 1] = -22;
        }
      }
      particleGeom.attributes.position.needsUpdate = true;
      particles.rotation.y = elapsedTime * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      sphereGeom.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      particleTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-85"
      aria-hidden="true"
    />
  );
}
