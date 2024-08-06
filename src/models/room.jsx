

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame, useThree} from '@react-three/fiber'
import {a} from '@react-spring/three'
import roomScene from '../assets/3d/room.glb';

const room = ({isRotating, setIsRotating, ...props}) => {
const roomRef=useRef(); 
const {gl,viewport} = useThree();

const { nodes, materials } = useGLTF(roomScene)

const lastX = useRef(0);
const lastY = useRef(0);
const rotationSpeedX = useRef(0);
const rotationSpeedY = useRef(0);
const rotationSpeed = useRef(0);
const dampingFactor=0.95;

const handlePointerDown=(e) =>{
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

     const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    lastX.current = clientX;
    lastY.current = clientY;
}
const handlePointerUp=(e) =>{
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  
}
const handlePointerMove=(e) =>{
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const deltaX = (clientX - lastX.current) / viewport.width;
      const deltaY = (clientY - lastY.current) / viewport.height;

      roomRef.current.rotation.y += deltaX * 0.01 * Math.PI;
      roomRef.current.rotation.x += deltaY * 0.01 * Math.PI;

      lastX.current = clientX;
      lastY.current = clientY;

      rotationSpeedX.current = deltaX * 0.01 * Math.PI;
      rotationSpeedY.current = deltaY * 0.01 * Math.PI;
    }
}

useFrame(()=>{
  if (!isRotating){
    rotationSpeedX.current *= dampingFactor;
    rotationSpeedY.current *= dampingFactor;
    if (Math.abs(rotationSpeedX.current) < 0.001) {
      rotationSpeedX.current = 0;
    }
    if (Math.abs(rotationSpeedY.current) < 0.001) {
      rotationSpeedY.current = 0;
    }

    roomRef.current.rotation.y += rotationSpeedX.current;
    roomRef.current.rotation.x += rotationSpeedY.current;
    }else{
    const rotation = roomRef.current.rotation.y;
    const normalizedRotation =
    ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

  // Set the current stage based on the island's orientation
  switch (true) {
    case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
      setCurrentStage(4);
      break;
    case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
      setCurrentStage(3);
      break;
    case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
      setCurrentStage(2);
      break;
    case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
      setCurrentStage(1);
      break;
    default:
      setCurrentStage(null);
  }
}
});


useEffect(() => {
  const canvas=gl.domElement;
  canvas.addEventListener('pointerdown',handlePointerDown);
  canvas.addEventListener('pointerup',handlePointerUp);
  canvas.addEventListener('pointermove',handlePointerMove);

  return() =>{
    canvas.removeEventListener('pointerdown',handlePointerDown);
    canvas.removeEventListener('pointerup',handlePointerUp);
    canvas.removeEventListener('pointermove',handlePointerMove);
  }
},[gl,handlePointerDown,handlePointerUp,handlePointerMove])

  return (
    <a.group ref={roomRef} {...props}>
       <group position={[0, -6.028, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-78.74, 96.592, 46.691]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[105.739, 105.739, 15.729]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_Material001_0.geometry}
              material={materials['Material.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_Material_0.geometry}
              material={materials.Material}
            />
          </group>
          <group
            position={[-75, 0, -50]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 100, 14.875]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube002_Material002_0.geometry}
              material={materials['Material.002']}
            />
          </group>
          <group position={[-77.198, 27.295, 62.546]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube014_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube014_Material001_0.geometry}
              material={materials['Material.001']}
            />
          </group>
          <group position={[-76.355, 46.756, 80.494]} rotation={[-Math.PI / 2, 0, 0]} scale={4.892}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle_Material003_0.geometry}
              material={materials['Material.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle_Material011_0.geometry}
              material={materials['Material.011']}
            />
          </group>
          <group
            position={[-60.307, 11.551, 12.846]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[71.25, 59.562, 10.381]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube044_Material005_0.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube044_Material017_0.geometry}
              material={materials['Material.017']}
            />
          </group>
          <group
            position={[-73.612, 87.04, 59.922]}
            rotation={[-1.303, 0, Math.PI / 2]}
            scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube042_Material018_0.geometry}
              material={materials['Material.018']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube042_Material019_0.geometry}
              material={materials['Material.019']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube042_Material_0.geometry}
              material={materials.Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube042_Material001_0.geometry}
              material={materials['Material.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube042_Material012_0.geometry}
              material={materials['Material.012']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube042_Material009_0.geometry}
              material={materials['Material.009']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube042_Material013_0.geometry}
              material={materials['Material.013']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube042_Material014_0.geometry}
              material={materials['Material.014']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube042_Material006_0.geometry}
              material={materials['Material.006']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube042_Material016_0.geometry}
              material={materials['Material.016']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube042_Material015_0.geometry}
              material={materials['Material.015']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube042_Material011_0.geometry}
              material={materials['Material.011']}
            />
          </group>
          <group
            position={[-63.985, 47.31, -79.943]}
            rotation={[-Math.PI / 2, 0, 0.316]}
            scale={[5.199, 5.199, 6.98]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle004_Material022_0.geometry}
              material={materials['Material.022']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle004_Material004_0.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            position={[-26.129, 44.04, -20.304]}
            rotation={[-Math.PI / 2, 0, 1.837]}
            scale={[15.465, 15.406, 16.071]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube052_Material005_0.geometry}
              material={materials['Material.005']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube052_Material021_0.geometry}
              material={materials['Material.021']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle003_Material005_0.geometry}
              material={materials['Material.005']}
              position={[0, 0.725, -2.187]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[6.811, 6.554, 6.836]}
            />
          </group>
          <group
            position={[-25.094, 46.809, -70.853]}
            rotation={[-2.041, 0.02, -0.352]}
            scale={[0.749, 0.749, 1.146]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle006_Material025_0.geometry}
              material={materials['Material.025']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle006_Material026_0.geometry}
              material={materials['Material.026']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle006_Material027_0.geometry}
              material={materials['Material.027']}
            />
          </group>
          <group
            position={[-25.607, 47.267, -70.726]}
            rotation={[-1.966, 0.31, 0.22]}
            scale={[0.844, 0.844, 1.073]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle007_Material017_0.geometry}
              material={materials['Material.017']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle007_Material026_0.geometry}
              material={materials['Material.026']}
            />
          </group>
          <group
            position={[-23.673, 46.92, -71.878]}
            rotation={[-1.476, -0.326, 2.932]}
            scale={[0.749, 0.749, 0.986]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle008_Material025_0.geometry}
              material={materials['Material.025']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle008_Material026_0.geometry}
              material={materials['Material.026']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle008_Material027_0.geometry}
              material={materials['Material.027']}
            />
          </group>
          <group
            position={[-25.248, 47.34, -60.064]}
            rotation={[Math.PI, 0.829, -Math.PI]}
            scale={[0.749, 0.749, 1.043]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle009_Material025_0.geometry}
              material={materials['Material.025']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle009_Material026_0.geometry}
              material={materials['Material.026']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle009_Material027_0.geometry}
              material={materials['Material.027']}
            />
          </group>
          <group
            position={[-60.096, 40.037, 79.681]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={33.938}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube054_Material024_0.geometry}
              material={materials['Material.024']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube055_Material024_0.geometry}
              material={materials['Material.024']}
            />
          </group>
          <group
            position={[-60.096, 27.15, 79.681]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={33.938}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube056_Material024_0.geometry}
              material={materials['Material.024']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube057_Material024_0.geometry}
              material={materials['Material.024']}
            />
          </group>
          <group
            position={[-60.096, 14.681, 79.681]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={33.938}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube058_Material024_0.geometry}
              material={materials['Material.024']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube059_Material024_0.geometry}
              material={materials['Material.024']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_Material_0.geometry}
            material={materials.Material}
            position={[5, -0.703, 5]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[95, 95, 3.73]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003_Material003_0.geometry}
            material={materials['Material.003']}
            position={[82.779, 9.304, -88.123]}
            rotation={[-1.375, 0, 0]}
            scale={[104.96, 111.702, 104.96]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010_Material001_0.geometry}
            material={materials['Material.001']}
            position={[68.179, 18.604, 37.726]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube019_Material003_0.geometry}
            material={materials['Material.003']}
            position={[53.156, 73.11, -95]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[104.96, 111.702, 104.96]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube013_Material005_0.geometry}
            material={materials['Material.005']}
            position={[-79.154, 47.131, -22.837]}
            rotation={[-Math.PI / 2, 0, -0.226]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube020_Material006_0.geometry}
            material={materials['Material.006']}
            position={[68.179, 34.7, 37.726]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[94.674, 97.393, 100.523]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube021_Material003_0.geometry}
            material={materials['Material.003']}
            position={[54.12, 132.01, -95]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[29.378, 1.216, 0.318]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube022_Material007_0.geometry}
            material={materials['Material.007']}
            position={[82.779, 9.304, -88.123]}
            rotation={[-1.375, 0, 0]}
            scale={[104.96, 111.702, 104.96]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube023_Material008_0.geometry}
            material={materials['Material.008']}
            position={[-78.785, 66.743, -22.837]}
            rotation={[-Math.PI / 2, 0, -0.226]}
            scale={[1.065, 14.113, 3.183]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube024_Material_0.geometry}
            material={materials.Material}
            position={[-36.958, 32.254, -30.532]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 100, 14.875]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube026_Material004_0.geometry}
            material={materials['Material.004']}
            position={[-3.577, 98.873, -81.111]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[17.491, 20.491, 20.491]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube028_Material_0.geometry}
            material={materials.Material}
            position={[-39.092, 97.456, -78.779]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube011_Material004_0.geometry}
            material={materials['Material.004']}
            position={[-74.17, 98.873, -81.111]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[17.491, 20.491, 20.491]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube018_Material004_0.geometry}
            material={materials['Material.004']}
            position={[-3.577, 74.02, -81.111]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[17.491, 20.491, 20.491]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube025_Material_0.geometry}
            material={materials.Material}
            position={[-39.092, 72.602, -78.779]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube027_Material004_0.geometry}
            material={materials['Material.004']}
            position={[-74.17, 74.02, -81.111]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[17.491, 20.491, 20.491]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle001_Material010_0.geometry}
            material={materials['Material.010']}
            position={[-76.355, 46.756, 80.494]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={4.892}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone__0.geometry}
            material={materials.Cone__0}
            position={[-75.43, 62.372, 77.449]}
            rotation={[-2.792, 0.243, 0.171]}
            scale={23.498}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone001__0.geometry}
            material={materials.Cone__0}
            position={[-73.048, 61.847, 80.746]}
            rotation={[-1.214, 1.336, -1.223]}
            scale={24.851}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone002__0.geometry}
            material={materials.Cone__0}
            position={[-75.176, 64.148, 81.48]}
            rotation={[-1.013, 0.487, -1.397]}
            scale={29.226}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone003__0.geometry}
            material={materials.Cone__0}
            position={[-77.649, 64.452, 80.656]}
            rotation={[-1.488, -0.393, -1.372]}
            scale={29.226}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone004__0.geometry}
            material={materials.Cone__0}
            position={[-76.392, 64.428, 79.118]}
            rotation={[-1.965, -0.077, -1.487]}
            scale={29.226}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone005__0.geometry}
            material={materials.Cone__0}
            position={[-79.012, 62.162, 78.509]}
            rotation={[-2.619, -0.834, -1.805]}
            scale={25.427}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone007__0.geometry}
            material={materials.Cone__0}
            position={[-77.456, 60.121, 77.125]}
            rotation={[-3.112, -0.257, -2.076]}
            scale={20.986}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone008__0.geometry}
            material={materials.Cone__0}
            position={[-79.815, 58.98, 80.64]}
            rotation={[1.017, -1.412, 2.159]}
            scale={17.986}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone010__0.geometry}
            material={materials.Cone__0}
            position={[-78.297, 61.408, 83.411]}
            rotation={[-0.246, -0.435, 0.769]}
            scale={22.915}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone011__0.geometry}
            material={materials.Cone__0}
            position={[-79.364, 62.207, 81.783]}
            rotation={[-0.944, -1.147, 0.23]}
            scale={27.127}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone006__0.geometry}
            material={materials.Cone__0}
            position={[-76.038, 63.07, 83.33]}
            rotation={[-0.476, 0.079, 0.727]}
            scale={29.226}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone009__0.geometry}
            material={materials.Cone__0}
            position={[-76.604, 59.21, 83.969]}
            rotation={[0.056, -0.084, 0.728]}
            scale={19.82}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone012__0.geometry}
            material={materials.Cone__0}
            position={[-74.17, 61.103, 83.278]}
            rotation={[-0.152, 0.659, 0.791]}
            scale={22.321}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone013__0.geometry}
            material={materials.Cone__0}
            position={[-73.237, 58.606, 81.999]}
            rotation={[0.308, 1.104, 0.425]}
            scale={19.508}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone014__0.geometry}
            material={materials.Cone__0}
            position={[-73.352, 60.333, 78.507]}
            rotation={[-3.077, 1.123, -2.446]}
            scale={23.653}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone015__0.geometry}
            material={materials.Cone__0}
            position={[-74.17, 63.516, 79.055]}
            rotation={[-2.133, 0.816, 3.032]}
            scale={29.226}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone016__0.geometry}
            material={materials.Cone__0}
            position={[-78.817, 57.687, 82.739]}
            rotation={[0.326, -0.879, 1.356]}
            scale={17.986}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone017__0.geometry}
            material={materials.Cone__0}
            position={[-74.675, 57.186, 83.207]}
            rotation={[0.286, 0.432, 1.344]}
            scale={17.986}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone018__0.geometry}
            material={materials.Cone__0}
            position={[-73.236, 58.099, 79.204]}
            rotation={[2.462, 1.245, -0.649]}
            scale={17.986}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone019__0.geometry}
            material={materials.Cone__0}
            position={[-75.997, 57.545, 77.3]}
            rotation={[2.94, 0.082, -2.096]}
            scale={20.986}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cone020__0.geometry}
            material={materials.Cone__0}
            position={[-79.341, 58.419, 78.773]}
            rotation={[2.834, -1.104, -0.717]}
            scale={17.832}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube043_Material_0.geometry}
            material={materials.Material}
            position={[-68.749, 11.639, 13.071]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[100, 100, 14.875]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube048_Material018_0.geometry}
            material={materials['Material.018']}
            position={[-61.906, 47.303, 5.604]}
            rotation={[-Math.PI / 2, 0, -0.134]}
            scale={[8.257, 8.257, 1.097]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube049_Material005_0.geometry}
            material={materials['Material.005']}
            position={[-62.506, 45.256, 4.543]}
            rotation={[-Math.PI / 2, 0, -1.895]}
            scale={[4.399, 4.399, 0.584]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube050_Material_0.geometry}
            material={materials.Material}
            position={[-63.539, 48.958, 4.481]}
            rotation={[0, -0.324, -Math.PI / 2]}
            scale={[0.054, 0.054, 0.002]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_Material020_0.geometry}
            material={materials['Material.020']}
            position={[-60.3, 50.087, 9.735]}
            rotation={[-2.902, 0, 0]}
            scale={24.08}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube051_Material020_0.geometry}
            material={materials['Material.020']}
            position={[28.395, 68.582, -76.014]}
            rotation={[-1.366, 0, 0]}
            scale={7.168}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle005_Material005_0.geometry}
            material={materials['Material.005']}
            position={[-24.636, 47.106, -72.817]}
            rotation={[-Math.PI / 2, 0, -0.106]}
            scale={[5.247, 5.247, 6.938]}
          />
        </group>
      </group>
    </a.group>
  )
}

useGLTF.preload('/isometric_bedroom.glb')

export default room;