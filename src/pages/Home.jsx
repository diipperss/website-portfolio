import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { Text } from '@react-three/drei';
import Loader from '../components/Loader';
import Room from '../models/room';
import './styles.css'

const Home = () => {
  const [roomScale, setRoomScale] = useState([0.5, 0.5, 0.5]);
  const [roomPosition, setRoomPosition] = useState([0, -2, -10]);
  const [roomRotation, setRoomRotation] = useState([0, 0, 0]);
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [hovered, setHovered] = useState(false);
  
  const { scale, position, rotation } = useSpring({
    scale: roomScale,
    position: roomPosition,
    rotation: roomRotation,
    config: { mass: 1, tension: 170, friction: 26 },
  });


  useEffect(() => {
    const adjustRoomForScreenSize = () => {
      let screenScale = [0.5, 0.5, 0.5];
      let screenPosition = [0, -2, -10];
      let rotation = [0, 0, 0];

      if (window.innerWidth < 768) {
        screenScale = [0.45, 0.45, 0.45];
        screenPosition = [0, -2, -8];
      } else {
        screenScale = [0.05, 0.05, 0.05];
        screenPosition = [-4, -3.2, -2];
      }

      setRoomScale(screenScale);
      setRoomPosition(screenPosition);
      setRoomRotation(rotation);
    };

    adjustRoomForScreenSize();
    window.addEventListener('resize', adjustRoomForScreenSize);

    return () => {
      window.removeEventListener('resize', adjustRoomForScreenSize);
    };
  }, []);

  return (
    <div style={styles.overallcontainer}>
      <div style={styles.roomContainer}>
        <section style={styles.gradientBg} className="w-full h-screen relative">
          <Canvas
            className="w-full h-screen bg-transparent"
            camera={{ near: 0.1, far: 1000, position: [0, 0, 10] }}
            shadows
          >
            <Suspense fallback={<Loader />}>
              <ambientLight intensity={0.2} />
              <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
              <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={4} castShadow />
              <hemisphereLight skyColor="#ffffff" groundColor="#000000" intensity={0.5} />
              <pointLight position={[-7, 0, -4]} intensity={16} color="orange" decay={2} distance={10} />
              <pointLight position={[-1, 2, -6]} intensity={100} color="white" decay={2} distance={10} />

              <animated.group scale={scale} position={position} rotation={rotation}>
                <Room  
                  isRotating={isRotating}
                  setIsRotating={setIsRotating}
                  setCurrentStage={setCurrentStage}
                />
              </animated.group>
            </Suspense>
          </Canvas>
        </section>
      </div>
      <div style={styles.projContainer}>
        <button className="button">Hello,</button>
        <button className="button2">World!</button>
        <button className="button3">Feel free to explore the room and interact with it!</button>

      </div>
    </div>
  );
};

const styles = {
  gradientBg: {
    background: 'radial-gradient(circle, #f6f6f6, #ffffff)',
  },
  overallcontainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
  content: {
    display: 'flex',
    flex: 1,
  },
  roomContainer: {
    flex: 1,
    position: 'relative',
  },
  projContainer: {
    width: '50%',
    height:'100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '-45%',
    flexDirection: 'column',
  },
};

export default Home;
