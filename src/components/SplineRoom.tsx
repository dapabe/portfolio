import Spline from '@splinetool/react-spline';
import { Application, SPEObject } from '@splinetool/runtime';
import { useRef } from 'react';

export const SplineRoom = () => {
  const table = useRef<SPEObject>();

  const onLoad = (spline: Application) => {
    const obj = spline.findObjectByName('Table');
    // or
    // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

    // save it in a ref for later use
    table.current = obj;
  }

  const moveObj = () => {
    if (!table.current) return

    table.current.position.x += 10;
  }
  return (
    <section className='h-80'>
      <Spline
        scene="https://prod.spline.design/CBBbjCLkIPKEseKu/scene.splinecode"
        onLoad={onLoad}
      />
      {/* <button type="button" onClick={moveObj}>
        Move Cube
      </button> */}
    </section>
  );
}
