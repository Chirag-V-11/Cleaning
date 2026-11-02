import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Clock, CheckCircle2, RotateCcw, Layers } from 'lucide-react';
import { BUSINESS_INFO } from '../data/businessInfo';

export default function Interactive3DShowcase({ onSelectServiceForQuote }) {
  const [selectedZone, setSelectedZone] = useState('emergency');
  const containerRef = useRef(null);

  // 3D Scene Refs
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const zonesGroupRef = useRef({});
  const isDraggingRef = useRef(false);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const rotTargetRef = useRef({ x: 0.25, y: 0.4 });
  const rotCurrentRef = useRef({ x: 0.25, y: 0.4 });

  const zones = [
    {
      id: 'emergency',
      name: 'Emergency Deep Clean',
      tagline: '2-Hour Callout Response',
      duration: 'Immediate (2 hrs)',
      desc: 'Rapid emergency turnaround for move-in filthy surprises, tenant handover emergencies, or unexpected guests.',
      features: ['2-hour dispatch guarantee', 'Hospital-grade sanitization', 'Complete kitchen & bath descaling', 'Rapid two-member crew'],
      serviceKey: 'Emergency Deep Cleaning'
    },
    {
      id: 'living',
      name: 'Living & Hardwood Polish',
      tagline: 'Gleaming Dust-Free Floors',
      duration: '2.5 - 3.5 Hours',
      desc: 'High-gloss wood floor restoration, hand-dusted baseboards, window sills, and allergen-free vacuuming.',
      features: ['Micro-buffing wood polish', 'Baseboards washed by hand', 'Slat-by-slat blind detailing', 'HEPA air purification'],
      serviceKey: 'Standard House Cleaning'
    },
    {
      id: 'bath',
      name: 'Deep Bathtub & Tile',
      tagline: 'Limescale & Soap Scum Removal',
      duration: '1.5 - 2 Hours',
      desc: 'Specialized tub cleaning for deep tubs, jets, ceramic tiles, grout brightening, and chrome polishing.',
      features: ['Deep tub & jet descaling', 'Tile & grout brightening', 'Glass shower door water spot removal', 'Sanitized chrome fixtures'],
      serviceKey: 'Deep Clean & Tub Detailing'
    },
    {
      id: 'movein',
      name: 'Rental Move-In Rescue',
      tagline: 'Deposit-Safe Handover',
      duration: '4 - 6 Hours',
      desc: 'Every shelf, drawer, oven interior, baseboard, and corner completely detailed before moving your furniture in.',
      features: ['Inside cabinets & drawers', 'Inside oven & refrigerator', 'Deep disinfection throughout', 'Landlord inspection ready'],
      serviceKey: 'Move-In / Move-Out Rental Rescue'
    },
    {
      id: 'office',
      name: 'Commercial & Office',
      tagline: 'Spotless Business Spaces',
      duration: 'Custom Schedule',
      desc: 'After-hours or weekend commercial detailing for Dallas office suites, retail spaces, and clinics.',
      features: ['Desk & screen sanitization', 'Restroom sterilization', 'Breakroom deep degrease', 'Trash & recycling disposal'],
      serviceKey: 'Commercial & Office Cleaning'
    }
  ];

  const currentZoneData = zones.find(z => z.id === selectedZone) || zones[0];

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 4.2, 8.5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

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

    // Lighting
    const amb = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(amb);

    const dirLight = new THREE.DirectionalLight(0xfffbeb, 1.8);
    dirLight.position.set(6, 12, 6);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xdcfce7, 1.1);
    fillLight.position.set(-6, -2, -4);
    scene.add(fillLight);

    // Global Rotating Platform Base
    const platformGroup = new THREE.Group();
    scene.add(platformGroup);

    const basePlateGeo = new THREE.CylinderGeometry(3.6, 3.8, 0.35, 48);
    const basePlateMat = new THREE.MeshStandardMaterial({
      color: 0x124c3a,
      roughness: 0.2,
      metalness: 0.3
    });
    const basePlate = new THREE.Mesh(basePlateGeo, basePlateMat);
    basePlate.position.y = -0.18;
    basePlate.receiveShadow = true;
    platformGroup.add(basePlate);

    const innerRimGeo = new THREE.TorusGeometry(3.6, 0.06, 16, 64);
    const innerRimMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      emissive: 0xf59e0b,
      emissiveIntensity: 0.8
    });
    const innerRim = new THREE.Mesh(innerRimGeo, innerRimMat);
    innerRim.rotation.x = Math.PI / 2;
    platformGroup.add(innerRim);

    // --- ZONE 1: EMERGENCY 3D (Rescue Spotlight & Alert Beacon) ---
    const zEmergency = new THREE.Group();
    const beaconGeo = new THREE.CylinderGeometry(0.5, 0.6, 1.2, 24);
    const beaconMat = new THREE.MeshPhysicalMaterial({
      color: 0xf59e0b,
      emissive: 0xd97706,
      emissiveIntensity: 0.8,
      transmission: 0.6,
      roughness: 0.1
    });
    const beacon = new THREE.Mesh(beaconGeo, beaconMat);
    beacon.position.y = 0.6;
    zEmergency.add(beacon);

    const haloGeo = new THREE.TorusGeometry(1.6, 0.08, 16, 48);
    const haloMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      emissive: 0xf59e0b,
      emissiveIntensity: 1.2
    });
    const halo = new THREE.Mesh(haloGeo, haloMat);
    halo.rotation.x = Math.PI / 2;
    halo.position.y = 1.3;
    zEmergency.add(halo);

    platformGroup.add(zEmergency);
    zonesGroupRef.current.emergency = zEmergency;

    // --- ZONE 2: LIVING ROOM (Wood Floor & Glass Table) ---
    const zLiving = new THREE.Group();
    zLiving.visible = false;
    const woodPlateGeo = new THREE.CylinderGeometry(3.3, 3.3, 0.1, 48);
    const woodPlateMat = new THREE.MeshStandardMaterial({
      color: 0xc49a6c,
      roughness: 0.12,
      metalness: 0.1
    });
    const woodPlate = new THREE.Mesh(woodPlateGeo, woodPlateMat);
    woodPlate.position.y = 0.05;
    zLiving.add(woodPlate);

    const sofaGeo = new THREE.BoxGeometry(2.4, 0.6, 1.0);
    const sofaMat = new THREE.MeshStandardMaterial({ color: 0x2a8f68, roughness: 0.4 });
    const sofa = new THREE.Mesh(sofaGeo, sofaMat);
    sofa.position.set(0, 0.4, -0.6);
    zLiving.add(sofa);

    platformGroup.add(zLiving);
    zonesGroupRef.current.living = zLiving;

    // --- ZONE 3: DEEP BATHTUB ---
    const zBath = new THREE.Group();
    zBath.visible = false;
    const tubGeo = new THREE.CylinderGeometry(1.6, 1.3, 1.2, 32);
    const tubMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.05, metalness: 0.1 });
    const tubMesh = new THREE.Mesh(tubGeo, tubMat);
    tubMesh.position.y = 0.6;
    zBath.add(tubMesh);

    const waterGeo = new THREE.CylinderGeometry(1.5, 1.5, 0.05, 32);
    const waterMat = new THREE.MeshPhysicalMaterial({ color: 0x38bdf8, transmission: 0.85, opacity: 0.9, transparent: true });
    const waterMesh = new THREE.Mesh(waterGeo, waterMat);
    waterMesh.position.y = 1.1;
    zBath.add(waterMesh);

    platformGroup.add(zBath);
    zonesGroupRef.current.bath = zBath;

    // --- ZONE 4: MOVE-IN HANDOVER (Stack of Clean Moving Boxes & Keys) ---
    const zMoveIn = new THREE.Group();
    zMoveIn.visible = false;
    const boxMat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.6 });
    const box1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.0, 1.2), boxMat);
    box1.position.set(-0.5, 0.5, 0);
    zMoveIn.add(box1);

    const box2 = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.8, 1.0), boxMat);
    box2.position.set(0.6, 0.4, -0.2);
    zMoveIn.add(box2);

    const box3 = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.7, 0.8), boxMat);
    box3.position.set(-0.3, 1.35, 0);
    zMoveIn.add(box3);

    platformGroup.add(zMoveIn);
    zonesGroupRef.current.movein = zMoveIn;

    // --- ZONE 5: OFFICE & COMMERCIAL ---
    const zOffice = new THREE.Group();
    zOffice.visible = false;
    const deskGeo = new THREE.BoxGeometry(2.6, 0.12, 1.3);
    const deskMat = new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.3, roughness: 0.1 });
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.position.set(0, 0.7, 0);
    zOffice.add(desk);

    const screenGeo = new THREE.BoxGeometry(1.0, 0.6, 0.05);
    const screenMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.2 });
    const screen = new THREE.Mesh(screenGeo, screenMat);
    screen.position.set(0, 1.1, -0.2);
    zOffice.add(screen);

    platformGroup.add(zOffice);
    zonesGroupRef.current.office = zOffice;

    // Drag Orbit Events
    const dom = renderer.domElement;
    const onMouseDown = (e) => {
      isDraggingRef.current = true;
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - mousePosRef.current.x;
      const dy = e.clientY - mousePosRef.current.y;

      rotTargetRef.current.y += dx * 0.008;
      rotTargetRef.current.x = Math.max(-0.1, Math.min(0.8, rotTargetRef.current.x + dy * 0.008));
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch events for mobile
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        mousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchMove = (e) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - mousePosRef.current.x;
      const dy = e.touches[0].clientY - mousePosRef.current.y;
      rotTargetRef.current.y += dx * 0.01;
      rotTargetRef.current.x = Math.max(-0.1, Math.min(0.8, rotTargetRef.current.x + dy * 0.01));
      mousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize
    const onResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animate
    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!isDraggingRef.current) {
        rotTargetRef.current.y += 0.003;
      }

      rotCurrentRef.current.x += (rotTargetRef.current.x - rotCurrentRef.current.x) * 0.08;
      rotCurrentRef.current.y += (rotTargetRef.current.y - rotCurrentRef.current.y) * 0.08;

      platformGroup.rotation.x = rotCurrentRef.current.x;
      platformGroup.rotation.y = rotCurrentRef.current.y;

      if (halo) {
        halo.position.y = 1.3 + Math.sin(elapsed * 3) * 0.08;
        halo.rotation.z = elapsed * 1.2;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Sync visible zone
  useEffect(() => {
    Object.keys(zonesGroupRef.current).forEach(key => {
      if (zonesGroupRef.current[key]) {
        zonesGroupRef.current[key].visible = key === selectedZone;
      }
    });
  }, [selectedZone]);

  const handleSelectQuote = () => {
    if (onSelectServiceForQuote) {
      onSelectServiceForQuote(currentZoneData.serviceKey);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-mint-100 text-forest-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-mint-200">
            <Sparkles className="w-3.5 h-3.5 text-forest-700" />
            <span>Interactive 3D Clean Space Explorer</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-forest-950 tracking-tight leading-tight mb-4">
            Explore Our 3D Cleaning Specialties
          </h2>
          <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Select any cleaning zone below to inspect our specialized process in real-time 3D. Click and drag the stage to orbit 360°.
          </p>
        </div>

        {/* Zone Selector Buttons Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {zones.map((zone) => (
            <button
              key={zone.id}
              onClick={() => setSelectedZone(zone.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 cursor-pointer ${
                selectedZone === zone.id
                  ? 'bg-forest-800 text-white shadow-elevated scale-105'
                  : 'bg-surface-light text-forest-950 hover:bg-mint-100 border border-mint-200'
              }`}
            >
              <span>{zone.name}</span>
            </button>
          ))}
        </div>

        {/* 3D Showcase Main Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-surface-light rounded-3xl p-6 sm:p-10 border border-mint-200 shadow-elevated">
          
          {/* Left: Interactive 3D Canvas Box */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden bg-gradient-to-br from-forest-950 via-forest-900 to-[#0e3025] shadow-2xl border-4 border-white">
            <div
              ref={containerRef}
              className="w-full h-full cursor-grab active:cursor-grabbing select-none"
              title="Click and drag to orbit in 3D"
            />
            
            {/* Top Indicator */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-mint-200 shadow-sm flex items-center space-x-2 text-xs font-bold text-forest-950">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Active 3D Podium: {currentZoneData.name}</span>
            </div>

            {/* Bottom Hint */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-mint-100/90 pointer-events-none">
              <span className="bg-forest-900/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-forest-700">
                Drag to Orbit 360°
              </span>
              <span className="bg-amber-400 text-forest-950 font-bold px-3 py-1 rounded-lg">
                ★ 4.8 Dallas Verified
              </span>
            </div>
          </div>

          {/* Right: Zone Explainer & Estimate Callout */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider mb-3">
                <Clock className="w-3.5 h-3.5 text-amber-700" />
                <span>Typical Duration: {currentZoneData.duration}</span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-forest-950 mb-2">
                {currentZoneData.name}
              </h3>
              <p className="text-sm font-semibold text-forest-700 mb-3">
                {currentZoneData.tagline}
              </p>
              <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
                {currentZoneData.desc}
              </p>

              {/* 4 Feature Bullets */}
              <div className="space-y-2.5 mb-8">
                {currentZoneData.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs sm:text-sm font-semibold text-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-mint-200">
              <Link
                to="/quote"
                onClick={handleSelectQuote}
                className="w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl bg-forest-800 text-white font-bold text-sm text-center hover:bg-forest-900 transition-colors shadow-md flex items-center justify-center space-x-2"
              >
                <span>Instant Estimate for This Zone</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </Link>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-mint-100 text-forest-950 font-bold text-sm text-center hover:bg-mint-200 transition-colors border border-mint-300"
              >
                Call Rebecca
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
