import { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';
import './Loader.css';

const Loader = () => {
  const { active } = useProgress();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!active) {
      setVisible(false);
      return undefined;
    }

    const revealTimer = window.setTimeout(() => setVisible(true), 450);

    return () => {
      window.clearTimeout(revealTimer);
    };
  }, [active]);

  if (!active || !visible) {
    return null;
  }

  return (
    <div className="loader-fullscreen" aria-hidden="true">
      <div className="boxes">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
