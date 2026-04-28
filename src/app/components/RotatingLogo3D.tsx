// src/app/components/RotatingLogo3D.tsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture, Center, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Importuj si logo - cesta odpovídá tvé struktuře
import logoImg from '../../imports/arma.png';

// Pomocná komponenta pro samotný 3D objekt
function LogoMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  // Načtení textury z obrázku
  const texture = useTexture(logoImg);
  
  // Zajištění průhlednosti (pokud má tvé PNG průhledné pozadí)
  texture.anisotropy = 16;
  texture.needsUpdate = true;

  // useFrame běží 60x za sekundu - tady definujeme animaci
  useFrame((state, delta) => {
    // Pomalé otáčení kolem osy Y (svislá)
    meshRef.current.rotation.y += delta * 0.5; // Změň číslo pro rychlost
    
    // Jemné pohupování nahoru a dolů (efekt levitace)
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <mesh ref={meshRef} castShadow>
      {/* Tvar: Tenký válec (placka) - CircleGeometry je lepší pro textury */}
      <circleGeometry args={[2.5, 64]} /> 
      
      {/* Materiál: Reaguje na světlo */}
      <meshStandardMaterial 
        map={texture} 
        transparent={true} 
        side={THREE.DoubleSide} // Viditelné z obou stran
        roughness={0.3} // Trochu lesklé
        metalness={0.6} // Kovový nádech
      />
    </mesh>
  );
}

// Hlavní komponenta, která vytváří 3D scénu (Canvas)
export function RotatingLogo3D() {
  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center relative">
      {/* Canvas je kontejner pro 3D svět */}
      <Canvas 
        camera={{ position: [0, 0, 7], fov: 50 }} 
        shadows
        // Uděláme pozadí Canvasu průhledné, aby prosvítal gradient webu
        style={{ background: 'transparent' }} 
      >
        {/* Osvětlení scény */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="var(--armanak-brand-cyan)" />

        {/* Vycentrování objektu */}
        <Center>
          <LogoMesh />
        </Center>

        {/* Přednastavené prostředí pro hezké odrazy (např. 'city' nebo 'apartment') */}
        <Environment preset="city" />
      </Canvas>
      
      {/* Volitelné: Jemný glow efekt pod logem v CSS */}
      <div 
        className="absolute w-64 h-64 rounded-full blur-[100px] opacity-20 -z-10"
        style={{ background: 'radial-gradient(circle, var(--armanak-brand-cyan) 0%, transparent 70%)' }}
      ></div>
    </div>
  );
}