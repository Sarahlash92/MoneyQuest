import React, { useEffect, useRef } from 'react';
import { useSphere } from '@react-three/cannon';
import { useThree, useFrame } from '@react-three/fiber';
import { FPVControls } from '../FPVControls';
import useInput from '../../hooks/useInput';
import { Vector3 } from 'three';
import { OrbitControls } from '@react-three/drei';

const SPEED = 6;

export const Player = (props) => {
  const { camera } = useThree();
  const { forward, backward, left, right, jump } =
    useInput();
    console.log(forward, backward, left, right, jump)
  const [ref, api] = useSphere(() => ({
    mass: 1,
    type: 'Dynamic',
    ...props,
  }));

  const velocity = useRef([0, 0, 0]);
  useEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
  }, [api.velocity]);

  const pos = useRef([0, 0, 0]);
  useEffect(() => api.position.subscribe((v) => (pos.current = v)), [api.position]);

  useFrame(() => {
    camera.position.copy(
      new Vector3(pos.current[0], pos.current[1], pos.current[2])
    );
    const direction = new Vector3();

    const frontVector = new Vector3(
      0,
      0,
      (backward ? 1 : 0) - (forward ? 1 : 0)
    );
    const sideVector = new Vector3(
      (left ? 1 : 0) - (right ? 1 : 0),
      0,
      0
    );

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    api.velocity.set(direction.x, velocity.current[1], direction.z);

    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
      api.velocity.set(velocity.current[0], 8, velocity.current[2]);
    }
  });
  return (
    <>
      <FPVControls />
      {/* <OrbitControls/> */}
      <mesh ref={ref} />
    </>
  );
};