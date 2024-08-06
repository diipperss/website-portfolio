import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import Loader from '../components/Loader';
import Room from '../models/room';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
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
    <div className="flex flex-row h-screen">
      <section className="flex flex-1">
        <div className="flex-1 relative">
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
        <div className="w-1/2 flex items-center justify-center mr-5 flex-col overflow-auto">
          <div className="group gap-9 group-hover:before:duration-500 group-hover:after:duration-500 
          after:duration-500 hover:border-cyan-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] 
          duration-500 before:duration-500 hover:duration-500 hover:text-cyan-900 hover:text-lg 
          origin-left relative bg-sky-200 h-90 w-full border text-left p-3 text-cyan-600 text-base font-bold rounded-lg  
          overflow-auto  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:bottom-1 
          before:z-10 before:bg-rose-300 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 
          after:h-20 after:content['']  after:bg-rose-0 after:right-8 after:bottom-3 after:rounded-full after:blur-lg">
            About me
            <div className="flex flex-col font-normal">
              <div>My name is Divya Gupta, a computer science undergraduate at NTU (Singapore)</div>
              <br />I am a passionate software developer with a strong foundation in computer science, honed through hands-on projects and internships.
              <br /><br />My technical expertise includes proficiency in programming languages: Python, Java, JavaScript (React, React Native), as well as experience with frameworks like Flask and TensorFlow. As for database expertise, I have experience in working in MySQL, Firebase and PhP.
              <br /><br />Beyond my technical expertise, I excel in problem-solving, teamwork, and communication. I have successfully led projects, collaborated with diverse teams, and consistently delivered high-quality results. As the Vice-President of the 1st CCDS Club, I manage a student population of nearly 3,000, demonstrating my leadership and organizational skills. My comprehensive education in computer science, including modules in computer security and architecture, complements my practical experience, making me a well-rounded and adaptable professional.
              <br /><br />I am eager to leverage my skills and experiences to contribute to innovative projects and drive impactful results. With a strong foundation in computer science, a proven track record of leadership, and a passion for continuous learning, I am excited about the opportunities ahead and look forward to making a meaningful impact in the field of software development and AI.
            </div>
          </div>
          <div className="group mb-3 gap-9 group-hover:before:duration-500 group-hover:after:duration-500 
          after:duration-500 hover:border-cyan-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] 
          duration-500 before:duration-500 hover:duration-500 hover:text-cyan-900 hover:text-lg 
          origin-left relative bg-sky-300 h-90 w-full border text-left p-3 text-cyan-700 text-base font-bold rounded-lg  
          overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:bottom-1 
          before:z-10 before:bg-rose-300 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 
          after:h-20 after:content['']  after:bg-rose-0 after:right-8 after:bottom-3 after:rounded-full after:blur-lg mt-5">
            Contact Me
            <div className="flex flex-col font-normal mb-3">
              <div>Email: dibya6665@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
