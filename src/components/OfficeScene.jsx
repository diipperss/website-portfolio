import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import { Decal, PerspectiveCamera, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import officePackScene from '../../office_-_assets.glb';

const WORKSTATION_SCALE = 1.38;
const WORKSTATION_POSITION = [-0.56, -0.08, -0.82];
const MONITOR_GROUP_POSITION = [0.1027, 0.9105, 0.5023];
const MONITOR_GROUP_ROTATION = [0, -0.2688, 0];
const MONITOR_LOCAL_POSITION = [0.151, 0.2706, 0];
const MONITOR_HOTSPOT_POSITION = [0.1565, 0.2706, 0];
const MONITOR_ROTATION = [0, Math.PI / 2, 0];
const MONITOR_DECAL_POSITION = [0.151, 0.2706, 0];
const MONITOR_DECAL_ROTATION = [0, Math.PI / 2, 0];
const MONITOR_DECAL_SCALE = [0.305, 0.22, 0.2];
const MONITOR_MESH_NAME = 'Object_16';
const REMOVED_MATERIAL_NAMES = new Set(['Poster_1024', 'PhotoFrame_20x30_likeA4_512']);
const screenLinks = ['intro', 'work', 'swe', 'ai', 'contact'];

const rotateY = (vector, angle) => {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  return new THREE.Vector3(
    vector.x * cos + vector.z * sin,
    vector.y,
    -vector.x * sin + vector.z * cos
  );
};

const getWorkstationPoint = (localPoint) => {
  const rotated = rotateY(new THREE.Vector3(...localPoint), MONITOR_GROUP_ROTATION[1]);

  return new THREE.Vector3(
    MONITOR_GROUP_POSITION[0] + rotated.x,
    MONITOR_GROUP_POSITION[1] + rotated.y,
    MONITOR_GROUP_POSITION[2] + rotated.z
  );
};

const monitorTargetInWorkstation = getWorkstationPoint(MONITOR_LOCAL_POSITION);
const MONITOR_TARGET = new THREE.Vector3(
  WORKSTATION_POSITION[0] + monitorTargetInWorkstation.x * WORKSTATION_SCALE,
  WORKSTATION_POSITION[1] + monitorTargetInWorkstation.y * WORKSTATION_SCALE,
  WORKSTATION_POSITION[2] + monitorTargetInWorkstation.z * WORKSTATION_SCALE
);

const useCursor = (active) => {
  useEffect(() => {
    document.body.style.cursor = active ? 'pointer' : 'auto';

    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [active]);
};

const getIsMobileLanding = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('(max-width: 819px), (pointer: coarse)').matches;
};

const useMobileLanding = () => {
  const [isMobileLanding, setIsMobileLanding] = useState(getIsMobileLanding);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 819px), (pointer: coarse)');
    const updateMatch = () => setIsMobileLanding(mediaQuery.matches);

    updateMatch();

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateMatch);
      return () => mediaQuery.removeEventListener('change', updateMatch);
    }

    mediaQuery.addListener(updateMatch);
    return () => mediaQuery.removeListener(updateMatch);
  }, []);

  return isMobileLanding;
};

const createMonitorTexture = (hovered) => {
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 860;

  const context = canvas.getContext('2d');
  if (!context) {
    return null;
  }

  context.fillStyle = '#dfe6ef';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#1c56bf';
  context.fillRect(0, 0, canvas.width, 86);

  context.font = 'bold 34px "IBM Plex Mono", monospace';
  context.fillStyle = '#f8fbff';
  context.fillText('resume.exe', 32, 56);
  context.font = '24px "IBM Plex Mono", monospace';
  context.fillText('portfolio', 1010, 56);

  context.strokeStyle = '#8d98a8';
  context.lineWidth = 8;
  context.strokeRect(24, 24, canvas.width - 48, canvas.height - 48);

  context.fillStyle = '#ffffff';
  context.fillRect(92, 128, 1016, 326);
  context.strokeStyle = '#a4afbc';
  context.lineWidth = 6;
  context.strokeRect(92, 128, 1016, 326);

  context.fillStyle = '#0f172a';
  context.font = 'bold 84px "VT323", monospace';
  context.fillText('DIVYA GUPTA', 130, 240);

  context.fillStyle = '#475569';
  context.font = '30px "IBM Plex Mono", monospace';
  context.fillText('software engineer + ai systems', 130, 294);
  context.fillText('click monitor to open retro desktop', 130, 340);

  context.fillStyle = '#eff4fb';
  context.fillRect(92, 500, 1016, 210);
  context.strokeStyle = '#a4afbc';
  context.lineWidth = 6;
  context.strokeRect(92, 500, 1016, 210);

  context.font = 'bold 28px "IBM Plex Mono", monospace';
  screenLinks.forEach((item, index) => {
    const width = 278;
    const height = 58;
    const column = index % 2;
    const row = Math.floor(index / 2);
    const x = 128 + column * 330;
    const y = 538 + row * 72;

    context.fillStyle = '#eef2f8';
    context.fillRect(x, y, width, height);
    context.strokeStyle = '#93a0b0';
    context.lineWidth = 4;
    context.strokeRect(x, y, width, height);
    context.fillStyle = '#162032';
    context.fillText(item.toUpperCase(), x + 20, y + 38);
  });

  context.fillStyle = hovered ? '#c7dcff' : '#dce9fb';
  context.fillRect(790, 556, 250, 88);
  context.strokeStyle = '#87a1c7';
  context.lineWidth = 5;
  context.strokeRect(790, 556, 250, 88);
  context.fillStyle = '#0f172a';
  context.font = 'bold 30px "IBM Plex Mono", monospace';
  context.fillText(hovered ? 'OPEN NOW' : 'OPEN', 850, 610);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  texture.needsUpdate = true;

  return texture;
};

const SceneCamera = ({ zooming }) => {
  const { camera } = useThree();

  useFrame((_, delta) => {
    const targetPosition = zooming ? [1.46, 1.78, 0.34] : [2.78, 2.14, 2.42];
    const targetLookAt = zooming ? MONITOR_TARGET : new THREE.Vector3(0.08, 1.22, 0.48);

    camera.position.lerp(
      new THREE.Vector3(targetPosition[0], targetPosition[1], targetPosition[2]),
      1 - Math.exp(-delta * 2.8)
    );
    camera.lookAt(targetLookAt);
  });

  return null;
};

const MonitorPreview = ({ hovered }) => {
  const texture = useMemo(() => createMonitorTexture(hovered), [hovered]);

  useEffect(() => {
    return () => {
      texture?.dispose();
    };
  }, [texture]);

  if (!texture) {
    return null;
  }

  return (
    <Decal
      depthTest={false}
      map={texture}
      polygonOffsetFactor={-2}
      position={MONITOR_DECAL_POSITION}
      rotation={MONITOR_DECAL_ROTATION}
      scale={MONITOR_DECAL_SCALE}
    >
      <meshBasicMaterial map={texture} polygonOffset polygonOffsetFactor={-2} toneMapped={false} transparent />
    </Decal>
  );
};

const OfficeWorkstation = ({ hovered, onEnter, setHovered }) => {
  const { scene } = useGLTF(officePackScene);
  const monitorMeshRef = useRef(null);

  const officeScene = useMemo(() => {
    const clonedScene = scene.clone(true);

    clonedScene.traverse((object) => {
      if (!object.isMesh) {
        return;
      }

      const materialNames = Array.isArray(object.material)
        ? object.material.map((material) => material?.name)
        : [object.material?.name];

      if (materialNames.some((name) => REMOVED_MATERIAL_NAMES.has(name))) {
        object.visible = false;
        return;
      }

      if (object.name === MONITOR_MESH_NAME) {
        monitorMeshRef.current = object;
      }

      object.castShadow = true;
      object.receiveShadow = true;
    });

    return clonedScene;
  }, [scene]);

  const monitorPreview = monitorMeshRef.current
    ? createPortal(<MonitorPreview hovered={hovered} />, monitorMeshRef.current)
    : null;

  return (
    <group>
      <primitive object={officeScene} />
      {monitorPreview}
      <group position={MONITOR_GROUP_POSITION} rotation={MONITOR_GROUP_ROTATION}>
        <mesh
          onClick={onEnter}
          onPointerOut={() => setHovered(false)}
          onPointerOver={() => setHovered(true)}
          position={MONITOR_HOTSPOT_POSITION}
          rotation={MONITOR_ROTATION}
        >
          <boxGeometry args={[0.045, 0.235, 0.325]} />
          <meshBasicMaterial transparent opacity={0.01} />
        </mesh>
      </group>
    </group>
  );
};

const FloatingRig = ({ children }) => {
  const rigRef = useRef(null);

  useFrame((state, delta) => {
    if (!rigRef.current) {
      return;
    }

    rigRef.current.rotation.y = THREE.MathUtils.lerp(
      rigRef.current.rotation.y,
      ((state.pointer.x || 0) * Math.PI) / 50,
      1 - Math.exp(-delta * 3)
    );
    rigRef.current.rotation.x = THREE.MathUtils.lerp(
      rigRef.current.rotation.x,
      ((state.pointer.y || 0) * Math.PI) / 80,
      1 - Math.exp(-delta * 3)
    );
  });

  return <group ref={rigRef}>{children}</group>;
};

const OfficeScene = ({ onEnter, zooming }) => {
  const [hovered, setHovered] = useState(false);
  const isMobileLanding = useMobileLanding();

  useCursor(hovered);

  if (isMobileLanding) {
    return (
      <div className={`office-shell office-shell--mobile ${zooming ? 'office-shell--zooming' : ''}`}>
        <div className="office-mobile-entry">
          <p className="office-mobile-entry__eyebrow">Divya&apos;s desk</p>
          <h1>Open portfolio</h1>
          <p>
            The 3D landing scene is desktop-first, so phone users enter directly into the portfolio showcase.
          </p>
          <button className="retro-button retro-button--primary office-mobile-entry__button" onClick={onEnter} type="button">
            Enter desktop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`office-shell ${zooming ? 'office-shell--zooming' : ''}`}>
      <div className="office-overlay">
        <div className="office-overlay__badge">Divya&apos;s desk</div>
      </div>
      <Canvas dpr={[1, 1.8]} shadows>
        <color args={['#08111c']} attach="background" />
        <fog args={['#08111c', 8, 18]} attach="fog" />
        <ambientLight intensity={1.25} />
        <directionalLight
          castShadow
          intensity={1.9}
          position={[5.5, 8.5, 4.5]}
          shadow-mapSize-height={1024}
          shadow-mapSize-width={1024}
        />
        <pointLight color="#ffdca3" distance={8} intensity={2.6} position={[3.5, 2.8, 1.2]} />
        <pointLight color="#8ab9ff" distance={10} intensity={0.9} position={[-5, 3.2, 2.4]} />
        <PerspectiveCamera makeDefault fov={31} position={[2.78, 2.14, 2.42]} />
        <SceneCamera zooming={zooming} />
        <Suspense fallback={null}>
          <FloatingRig>
            <group position={WORKSTATION_POSITION} scale={WORKSTATION_SCALE}>
              <OfficeWorkstation hovered={hovered} onEnter={onEnter} setHovered={setHovered} />
            </group>
          </FloatingRig>
        </Suspense>
      </Canvas>
    </div>
  );
};

useGLTF.preload(officePackScene);

export default OfficeScene;
