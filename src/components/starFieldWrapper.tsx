import { useEffect, useRef, useMemo } from 'react';
import StarField from './starfield'; // Adjust the import path as necessary

const StarFieldWrapper = ({ rotation }: { rotation: number }) => {
  const wrapperRef = useRef(null);

  // Memoize the StarField component instance
  const memoizedStarField = useMemo(() => <StarField />, []);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const wrapper = wrapperRef.current;
    // @ts-ignore
    const canvas = wrapper.querySelector('#outerspace');

    if (!canvas) return;

    const canvasWidth = 1000;
    const canvasHeight = 500;

    // // Set canvas dimensions
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Calculate the offset based on rotation
    const offsetX = (-(canvasWidth / 4) * (rotation+1)); // Adjusted to center the canvas

    // Apply the offset to the wrapper to move the canvas
    canvas.style.transform = `translate(${offsetX}px, 0)`;

    // Cleanup on unmount
    return () => {
      canvas.width = null;
      canvas.height = null;
      canvas.style.transform = ''; // Reset transform property
    };
  }, [rotation]);

  return (
    <div ref={wrapperRef} style={{ width: '500px', height: '500px', overflow: 'hidden', position: "absolute" }}>
      {memoizedStarField}
    </div>
  );
};

export default StarFieldWrapper;
