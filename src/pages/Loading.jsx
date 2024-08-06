import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const [isActive, setIsActive] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate();

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
    setIsFading(true);
    setTimeout(() => {
      navigate('/home');
    }, 500)
  };

  return (
    <div style={isFading ? { ...styles.box, ...styles.boxFadeOut } : styles.box}>
      <div style={styles.title}>
        Welcome!
      </div>
      <div style={styles.titleSpan}>Divya Gupta's Portfolio</div>
      <div style={styles.titleSpan}>This experience is best viewed on a desktop or laptop computer.</div>
      <button
        style={isActive ? { ...styles.buttonConfirm, ...styles.buttonConfirmActive } : styles.buttonConfirm}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        Let's Go!
      </button>
    </div>
  );
};

const styles = {
  box: {
    marginTop: '10%',
    marginLeft: '35%',
    background: '#bae6fd',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '30%',
    paddingBottom: '2%',
    borderRadius: '5px',
    border: '2px solid',
    boxShadow: '4px 4px',
    fontFamily: 'Montserrat, sans-serif',
    transition: 'opacity 0.5s ease', 
  },
  boxFadeOut: {
    opacity: 0, 
  },
  title: {
    color: '#111827',
    fontWeight: 500,
    fontSize: '20px',
    display: 'block',
    marginTop: '20px',
    marginLeft: '20px',
  },
  titleSpan: {
    color: '#334155',
    fontWeight: 500,
    fontSize: '17px',
    display: 'block',
    marginTop: '20px',
    marginLeft: '20px',
  },
  buttonConfirm: {
    margin: '30px auto 0 auto',
    width: '120px',
    height: '40px',
    borderRadius: '5px',
    border: '2px solid',
    backgroundColor: '#fecdd3',
    boxShadow: '4px 4px',
    fontSize: '17px',
    fontWeight: 600,
    color: '#323232',
    cursor: 'pointer',
    transition: 'transform 0.1s, box-shadow 0.1s',
  },
  buttonConfirmActive: {
    boxShadow: '0px 0px',
    transform: 'translate(3px, 3px)',
  },
};

export default Loading;
