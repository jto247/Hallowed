import {Canvas, useFrame, useLoader} from '@react-three/fiber/native';
import {useState, useRef, Suspense, useLayoutEffect} from 'react';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader';
import {TextureLoader} from 'expo-three';
import {useAnimatedSensor, SensorType} from 'react-native-reanimated';

function Shoe(props) {
  const obj = useLoader(OBJLoader, require('../../../assets/images/shoe.obj'));

  return (
    <mesh rotation={[1, 0, 0]}>
      <primitive object={obj} scale={10} />
    </mesh>
  );
}

export default function shoeDisplay() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Suspense fallback={null}>
        <Shoe />
      </Suspense>
    </Canvas>
  );
}
