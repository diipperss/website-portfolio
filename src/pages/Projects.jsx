import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import Loader from '../components/Loader';
import Room from '../models/room';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [roomScale, setRoomScale] = useState([0.05, 0.05, 0.05]);
  const [roomPosition, setRoomPosition] = useState([0, -3.2, -2]);
  const [roomRotation, setRoomRotation] = useState([0, 0, 0]);
  const navigate = useNavigate();

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
      let rotation = [0, 0.4, 0];

      if (window.innerWidth < 768) {
        screenScale = [0.45, 0.45, 0.45];
        screenPosition = [0, -2, -8];
      } else {
        screenScale = [0.05, 0.05, 0.05];
        screenPosition = [-1.5, -3, -2];
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
      <section style={styles.content}>
        <div style={styles.roomContainer}>
          <Canvas
            className="w-full h-full bg-transparent"
            camera={{ near: 0.1, far: 1000, position: [0, 0, 10] }}
          >
            <Suspense fallback={<Loader />}>
              <directionalLight position={[1, 1, 1]} intensity={1} />
              <hemisphereLight skyColor="#b0acac" groundColor="#b0acac" intensity={1} />
              <animated.group scale={scale} position={position} rotation={rotation}>
                <Room />
              </animated.group>
            </Suspense>
          </Canvas>
        </div>
        <div style={styles.projContainer}>
        <button class="group group-hover:before:duration-500 group-hover:after:duration-500 
        after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] 
        duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 
        hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur 
        hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-cyan-900 
        relative bg-sky-300 h-40 w-80 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  
        overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 
        before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 
        after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
        onClick={() => navigate('/equify')}>
            Equify
        </button>
        <button class="group group-hover:before:duration-500 group-hover:after:duration-500 
        after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] 
        duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 
        hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur 
        hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-cyan-900 
        relative bg-sky-400 h-40 w-80 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  
        overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 
        before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 
        after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg mt-5"
        onClick={() => navigate('/dressSense')}>
            DressSense.AI
        </button>
        <button class="group group-hover:before:duration-500 group-hover:after:duration-500 
        after:duration-500 hover:border-cyan-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] 
        duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 
        hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur 
        hover:underline hover:underline-offset-4  origin-left hover:decoration-2 hover:text-cyan-900 
        relative bg-sky-600 h-40 w-80 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  
        overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 
        before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 
        after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg mt-5"
        onClick={() => navigate('/sallyrise')}>
            SallyRise
        </button>
        </div>
      </section>
    </div>
  );
};

const styles = {
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:'5%',
    flexDirection: 'column'
  },
};

export default Projects;
