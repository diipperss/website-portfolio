import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OfficeScene from '../components/OfficeScene';
import './styles.css';

const Home = () => {
  const navigate = useNavigate();
  const [isZooming, setIsZooming] = useState(false);

  const handleEnter = () => {
    if (isZooming) {
      return;
    }

    setIsZooming(true);

    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
      navigate('/intro');
    }, 850);
  };

  return (
    <div className="landing-scene landing-scene--office">
      <OfficeScene onEnter={handleEnter} zooming={isZooming} />
    </div>
  );
};

export default Home;
