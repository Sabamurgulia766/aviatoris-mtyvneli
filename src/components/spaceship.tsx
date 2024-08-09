import React from 'react';

interface SpaceshipProps {
  rotation: number; // Rotation value between -1 and 1
}

const Spaceship: React.FC<SpaceshipProps> = ({ rotation }) => {
  const rotationDegrees = rotation * 45; // Convert the range from [-1, 1] to [-180, 180]
  const style = {
    transform: `rotate(${rotationDegrees}deg)`
  };

  return (
    <img src="spaceship.png" alt="Spaceship" className="spaceship" style={style} />
  );
};

export default Spaceship;
