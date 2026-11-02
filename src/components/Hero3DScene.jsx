import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, RotateCw, Eye, Sun, Moon, CheckCircle2 } from 'lucide-react';

export default function Hero3DScene() {
  const containerRef = useRef(null);
  const [activeMode, setActiveMode] = useState('room'); // 'room' | 'orb' | 'bath'
  const [isNightMode, setIsNightMode] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // References for live animation updates
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const groupsRef = useRef({ room: null, orb: null, bath: null, sparkles: [] });
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0.35, y: -0.55 });
  const currentRotationRef = useRef({ x: 0.35, y: -0.55 });

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 4.5, 9);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    containerRef.current.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    ambientLight.name = 'ambient';
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xfffbeb, 1.8);
    mainLight.position.set(5, 10, 7);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    mainLight.shadow.camera.near = 0.5;
    mainLight.shadow.camera.far = 25;
    mainLight.name = 'mainLight';
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xdcfce7, 1.0);
    fillLight.position.set(-6, -4, -3);
    fillLight.name = 'fillLight';
    scene.add(fillLight);

    const accentPoint = new THREE.PointLight(0xf59e0b, 1.5, 12);
    accentPoint.position.set(0, 2.5, 0);
    accentPoint.name = 'accentPoint';
    scene.add(accentPoint);

    // ==========================================
    // 4. MODEL 1: Pristine Architectural Clean Room
    // ==========================================
    const roomGroup = new THREE.Group();
    roomGroup.name = 'room';

    // Gleaming Floor (Hardwood / Polished Wood look)
    const floorGeo = new THREE.BoxGeometry(4.8, 0.2, 4.8);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0xc49a6c, // warm amber wood
      roughness: 0.15,
      metalness: 0.1
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.position.y = -0.1;
    floor.receiveShadow = true;
    roomGroup.add(floor);

    // Gloss Baseboards
    const baseboardGeo = new THREE.BoxGeometry(4.84, 0.14, 0.08);
    const baseboardMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.2
    });
    const bbBack = new THREE.Mesh(baseboardGeo, baseboardMat);
    bbBack.position.set(0, 0.07, -2.36);
    roomGroup.add(bbBack);

    const bbLeft = new THREE.Mesh(baseboardGeo, baseboardMat);
    bbLeft.rotation.y = Math.PI / 2;
    bbLeft.position.set(-2.36, 0.07, 0);
    roomGroup.add(bbLeft);

    // Translucent Back Walls (Glass / Modern Living)
    const wallGeo = new THREE.BoxGeometry(4.8, 3.2, 0.08);
    const wallMat = new THREE.MeshPhysicalMaterial({
      color: 0xddf3e8,
      transmission: 0.65,
      opacity: 0.85,
      transparent: true,
      roughness: 0.1,
      metalness: 0.05
    });

    const backWall = new THREE.Mesh(wallGeo, wallMat);
    backWall.position.set(0, 1.6, -2.4);
    roomGroup.add(backWall);

    const leftWall = new THREE.Mesh(wallGeo, wallMat);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.position.set(-2.4, 1.6, 0);
    roomGroup.add(leftWall);

    // Centerpiece: Gleaming Marble Coffee Table / Pedestal
    const tableGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.12, 32);
    const tableMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.1,
      metalness: 0.2
    });
    const table = new THREE.Mesh(tableGeo, tableMat);
    table.position.set(0, 0.6, 0);
    table.castShadow = true;
    table.receiveShadow = true;
    roomGroup.add(table);

    const legGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.6, 16);
    const legMat = new THREE.MeshStandardMaterial({
      color: 0xd97706, // Brass / Gold accent
      metalness: 0.8,
      roughness: 0.2
    });
    const leg1 = new THREE.Mesh(legGeo, legMat);
    leg1.position.set(0.6, 0.3, 0.6);
    leg1.castShadow = true;
    roomGroup.add(leg1);

    const leg2 = new THREE.Mesh(legGeo, legMat);
    leg2.position.set(-0.6, 0.3, 0.6);
    leg2.castShadow = true;
    roomGroup.add(leg2);

    const leg3 = new THREE.Mesh(legGeo, legMat);
    leg3.position.set(0, 0.3, -0.7);
    leg3.castShadow = true;
    roomGroup.add(leg3);

    // Modern Plant on table
    const potGeo = new THREE.CylinderGeometry(0.25, 0.2, 0.35, 16);
    const potMat = new THREE.MeshStandardMaterial({ color: 0x124c3a, roughness: 0.3 });
    const pot = new THREE.Mesh(potGeo, potMat);
    pot.position.set(0, 0.82, 0);
    pot.castShadow = true;
    roomGroup.add(pot);

    const plantGeo = new THREE.SphereGeometry(0.3, 16, 16);
    const plantMat = new THREE.MeshStandardMaterial({ color: 0x15803d, roughness: 0.4 });
    const plant = new THREE.Mesh(plantGeo, plantMat);
    plant.position.set(0, 1.05, 0);
    plant.scale.set(1.1, 1.4, 1.1);
    plant.castShadow = true;
    roomGroup.add(plant);

    // Floating Clean Energy Halo above the table
    const ringGeo = new THREE.TorusGeometry(1.5, 0.04, 16, 64);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.8,
      roughness: 0.2
    });
    const cleanRing = new THREE.Mesh(ringGeo, ringMat);
    cleanRing.rotation.x = Math.PI / 2;
    cleanRing.position.set(0, 1.8, 0);
    cleanRing.name = 'cleanRing';
    roomGroup.add(cleanRing);

    scene.add(roomGroup);
    groupsRef.current.room = roomGroup;

    // ==========================================
    // 5. MODEL 2: Giant Iridescent Sparkle Bubble
    // ==========================================
    const orbGroup = new THREE.Group();
    orbGroup.name = 'orb';
    orbGroup.visible = false;

    const orbGeo = new THREE.SphereGeometry(1.8, 64, 64);
    const orbMat = new THREE.MeshPhysicalMaterial({
      color: 0x2a8f68,
      emissive: 0x124c3a,
      emissiveIntensity: 0.3,
      roughness: 0.05,
      metalness: 0.1,
      transmission: 0.9,
      thickness: 1.2,
      transparent: true,
      opacity: 0.7,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05
    });
    const centerOrb = new THREE.Mesh(orbGeo, orbMat);
    centerOrb.position.y = 1.0;
    centerOrb.name = 'centerOrb';
    orbGroup.add(centerOrb);

    // Orbiting Golden Rings & Droplets
    const orbRingGeo = new THREE.TorusGeometry(2.6, 0.05, 16, 80);
    const orbRingMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.9,
      roughness: 0.1
    });
    const orbRing1 = new THREE.Mesh(orbRingGeo, orbRingMat);
    orbRing1.position.y = 1.0;
    orbRing1.rotation.x = 1.1;
    orbGroup.add(orbRing1);

    const orbRing2 = new THREE.Mesh(orbRingGeo, orbRingMat);
    orbRing2.position.y = 1.0;
    orbRing2.rotation.y = 1.2;
    orbRing2.rotation.x = 0.4;
    orbGroup.add(orbRing2);

    // Mini orbiting bubbles
    const miniBubbleGeo = new THREE.SphereGeometry(0.35, 24, 24);
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const mb = new THREE.Mesh(miniBubbleGeo, orbMat);
      mb.position.set(Math.cos(angle) * 3.0, 1.0 + Math.sin(angle * 2) * 0.8, Math.sin(angle) * 3.0);
      mb.userData = { angle, radius: 3.0, speed: 0.02 + i * 0.005 };
      orbGroup.add(mb);
    }

    scene.add(orbGroup);
    groupsRef.current.orb = orbGroup;

    // ==========================================
    // 6. MODEL 3: Deep Bathtub & Tile Descaling Sanctuary
    // ==========================================
    const bathGroup = new THREE.Group();
    bathGroup.name = 'bath';
    bathGroup.visible = false;

    // Tile Pedestal
    const bathBaseGeo = new THREE.CylinderGeometry(2.6, 2.8, 0.3, 32);
    const bathBaseMat = new THREE.MeshStandardMaterial({
      color: 0x99f6e4, // light mint tile
      roughness: 0.15,
      metalness: 0.05
    });
    const bathBase = new THREE.Mesh(bathBaseGeo, bathBaseMat);
    bathBase.position.y = -0.15;
    bathBase.receiveShadow = true;
    bathGroup.add(bathBase);

    // Bathtub Body
    const tubOuterGeo = new THREE.CylinderGeometry(1.5, 1.2, 1.3, 32, 1, false);
    const tubMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.08,
      metalness: 0.15
    });
    const tub = new THREE.Mesh(tubOuterGeo, tubMat);
    tub.position.y = 0.65;
    tub.castShadow = true;
    bathGroup.add(tub);

    // Sparkling Water Layer
    const waterGeo = new THREE.CylinderGeometry(1.4, 1.4, 0.05, 32);
    const waterMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transmission: 0.8,
      opacity: 0.85,
      transparent: true,
      roughness: 0.05
    });
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.position.y = 1.15;
    bathGroup.add(water);

    // Chrome / Gold Faucet Arch
    const faucetGeo = new THREE.TorusGeometry(0.4, 0.05, 16, 32, Math.PI);
    const faucetMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      metalness: 0.9,
      roughness: 0.1
    });
    const faucet = new THREE.Mesh(faucetGeo, faucetMat);
    faucet.position.set(0, 1.45, -1.35);
    faucet.rotation.z = -Math.PI / 2;
    faucet.rotation.y = Math.PI / 2;
    bathGroup.add(faucet);

    scene.add(bathGroup);
    groupsRef.current.bath = bathGroup;

    // ==========================================
    // 7. Interactive Sparkle Particles & Click Burst
    // ==========================================
    const sparkleGroup = new THREE.Group();
    scene.add(sparkleGroup);

    const triggerBurst = (originX = 0, originY = 1.5, originZ = 0) => {
      const burstCount = 36;
      for (let i = 0; i < burstCount; i++) {
        const starGeom = new THREE.OctahedronGeometry(0.12, 0);
        const starMat = new THREE.MeshStandardMaterial({
          color: i % 2 === 0 ? 0xf59e0b : 0x34d399,
          emissive: i % 2 === 0 ? 0xf59e0b : 0x10b981,
          emissiveIntensity: 1.0,
          roughness: 0.1
        });
        const star = new THREE.Mesh(starGeom, starMat);
        star.position.set(originX, originY, originZ);

        const velocity = new THREE.Vector3(
          THREE.MathUtils.randFloatSpread(4.5),
          THREE.MathUtils.randFloat(1.5, 5.0),
          THREE.MathUtils.randFloatSpread(4.5)
        );

        star.userData = {
          velocity,
          life: 1.0,
          decay: THREE.MathUtils.randFloat(0.015, 0.035),
          rotSpeed: THREE.MathUtils.randFloat(0.05, 0.2)
        };

        sparkleGroup.add(star);
        groupsRef.current.sparkles.push(star);
      }
    };

    // Orbit Drag Controls (Manual Implementation)
    const domElement = renderer.domElement;

    const onMouseDown = (e) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      targetRotationRef.current.y += deltaX * 0.008;
      targetRotationRef.current.x = Math.max(-0.2, Math.min(1.1, targetRotationRef.current.x + deltaY * 0.008));

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onClick = (e) => {
      // Trigger sparkle burst
      triggerBurst(0, 1.6, 0);
    };

    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('click', onClick);

    // Touch support for mobile devices
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePositionRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      }
    };

    const onTouchMove = (e) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
      const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;

      targetRotationRef.current.y += deltaX * 0.01;
      targetRotationRef.current.x = Math.max(-0.2, Math.min(1.1, targetRotationRef.current.x + deltaY * 0.01));

      previousMousePositionRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize Handler
    const onResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    // Animation Loop
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth Rotation Damping
      if (!isDraggingRef.current) {
        targetRotationRef.current.y += 0.004; // Gentle auto-rotate
      }

      currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * 0.08;
      currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * 0.08;

      if (groupsRef.current.room) {
        groupsRef.current.room.rotation.x = currentRotationRef.current.x;
        groupsRef.current.room.rotation.y = currentRotationRef.current.y;
      }
      if (groupsRef.current.orb) {
        groupsRef.current.orb.rotation.x = currentRotationRef.current.x;
        groupsRef.current.orb.rotation.y = currentRotationRef.current.y;
      }
      if (groupsRef.current.bath) {
        groupsRef.current.bath.rotation.x = currentRotationRef.current.x;
        groupsRef.current.bath.rotation.y = currentRotationRef.current.y;
      }

      // Floating halo animation
      if (cleanRing) {
        cleanRing.rotation.z = elapsed * 0.8;
        cleanRing.position.y = 1.8 + Math.sin(elapsed * 2) * 0.08;
      }

      // Orb rings animation
      if (orbRing1 && orbRing2) {
        orbRing1.rotation.z = elapsed * 0.6;
        orbRing2.rotation.z = -elapsed * 0.5;
      }

      // Animate Sparkle Bursts
      const sparkles = groupsRef.current.sparkles;
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const s = sparkles[i];
        s.position.add(s.userData.velocity.clone().multiplyScalar(0.016));
        s.userData.velocity.y -= 0.08; // Gravity
        s.rotation.x += s.userData.rotSpeed;
        s.rotation.y += s.userData.rotSpeed;
        s.userData.life -= s.userData.decay;
        s.scale.setScalar(Math.max(0.001, s.userData.life));

        if (s.userData.life <= 0) {
          sparkleGroup.remove(s);
          s.geometry.dispose();
          s.material.dispose();
          sparkles.splice(i, 1);
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('click', onClick);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);

      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Handle activeMode switch
  useEffect(() => {
    if (groupsRef.current.room) groupsRef.current.room.visible = activeMode === 'room';
    if (groupsRef.current.orb) groupsRef.current.orb.visible = activeMode === 'orb';
    if (groupsRef.current.bath) groupsRef.current.bath.visible = activeMode === 'bath';
  }, [activeMode]);

  // Handle lighting toggle
  const toggleLighting = () => {
    if (!sceneRef.current) return;
    const amb = sceneRef.current.getObjectByName('ambient');
    const main = sceneRef.current.getObjectByName('mainLight');
    const accent = sceneRef.current.getObjectByName('accentPoint');

    if (isNightMode) {
      if (amb) amb.intensity = 0.9;
      if (main) main.intensity = 1.8;
      if (accent) accent.intensity = 1.5;
      setIsNightMode(false);
    } else {
      if (amb) amb.intensity = 0.3;
      if (main) main.intensity = 0.8;
      if (accent) accent.intensity = 3.5;
      setIsNightMode(true);
    }
  };

  const resetView = () => {
    targetRotationRef.current = { x: 0.35, y: -0.55 };
  };

  return (
    <div
      className="relative w-full h-[460px] sm:h-[530px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-forest-950 via-forest-900 to-[#0d2a20]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
        title="Click and drag to rotate in 3D. Click to trigger sparkle burst."
      />

      {/* Top Floating Bar: 3D Mode Selectors */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
        <div className="flex items-center space-x-1.5 bg-white/90 backdrop-blur-md p-1 rounded-2xl border border-mint-200 shadow-elevated pointer-events-auto">
          <button
            onClick={() => setActiveMode('room')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeMode === 'room'
                ? 'bg-forest-800 text-white shadow-sm'
                : 'text-charcoal hover:bg-forest-50'
            }`}
          >
            Pristine Room
          </button>
          <button
            onClick={() => setActiveMode('orb')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeMode === 'orb'
                ? 'bg-forest-800 text-white shadow-sm'
                : 'text-charcoal hover:bg-forest-50'
            }`}
          >
            Sparkle Bubble
          </button>
          <button
            onClick={() => setActiveMode('bath')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              activeMode === 'bath'
                ? 'bg-forest-800 text-white shadow-sm'
                : 'text-charcoal hover:bg-forest-50'
            }`}
          >
            Bathtub Detail
          </button>
        </div>

        {/* 3D Tools (Lighting & Reset) */}
        <div className="flex items-center space-x-2 pointer-events-auto">
          <button
            onClick={toggleLighting}
            className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md text-forest-950 border border-mint-200 flex items-center justify-center hover:bg-white shadow-sm transition-transform active:scale-95"
            title={isNightMode ? 'Switch to Daylight Fresh' : 'Switch to UV Sparkle Glow'}
            aria-label="Toggle 3D lighting mode"
          >
            {isNightMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-forest-700" />}
          </button>
          <button
            onClick={resetView}
            className="w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md text-forest-950 border border-mint-200 flex items-center justify-center hover:bg-white shadow-sm transition-transform active:scale-95"
            title="Reset 3D camera angle"
            aria-label="Reset camera"
          >
            <RotateCw className="w-4 h-4 text-forest-700" />
          </button>
        </div>
      </div>

      {/* Interactive Drag Hint Pill */}
      <div className="absolute bottom-4 left-4 right-4 pointer-events-none z-10 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="bg-forest-900/90 backdrop-blur-md text-white border border-forest-700 px-3.5 py-1.5 rounded-xl text-[11px] font-semibold flex items-center shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 mr-1.5 animate-pulse" />
          <span>Interactive 3D Showroom • Drag to Orbit • Click for Sparkle Burst</span>
        </div>

        <div className="bg-amber-400/95 text-forest-950 font-extrabold px-3 py-1.5 rounded-xl text-xs flex items-center shadow-md">
          <CheckCircle2 className="w-3.5 h-3.5 mr-1 text-forest-900" />
          <span>Real-time 3D View</span>
        </div>
      </div>
    </div>
  );
}
