import {Canvas, useFrame, useLoader} from '@react-three/fiber/native';
import {useState, useRef, Suspense, useLayoutEffect} from 'react';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader';
import {TextureLoader} from 'expo-three';
import {useAnimatedSensor, SensorType} from 'react-native-reanimated';
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

function Shoe(props) {
  const [base, normal, rough] = useLoader(TextureLoader, [
    require('../../../assets/images/BaseColor.jpg'),
    require('../../../assets/images/Normal.jpg'),
    require('../../../assets/images/Roughness.png'),
  ]);

  const material = useLoader(
    MTLLoader,
    require('../../../assets/images/shoe.mtl'),
  );

  const obj = useLoader(
    OBJLoader,
    require('../../../assets/images/shoe.obj'),
    loader => {
      material.preload();
      loader.setMaterials(material);
    },
  );

  const mesh = useRef();

  useLayoutEffect(() => {
    obj.traverse(child => {
      if (child instanceof THREE.Mesh) {
        child.material.map = base;
      }
    });
  }, [obj]);

  useFrame((state, delta) => {
    let {x, y, z} = props.animatedSensor.sensor.value;
    x = ~~(x * 100) / 5000;
    y = ~~(y * 100) / 5000;
    mesh.current.rotation.x += x;
    mesh.current.rotation.y += y;
  });

  return (
    <mesh ref={mesh} rotation={[1, 1, 0]}>
      <primitive object={obj} scale={20} />
    </mesh>
  );
}

export default function DisplayShoe() {
  const animatedSensor = useAnimatedSensor(SensorType.GYROSCOPE, {
    interval: 100,
  });
  return (
    <View style={styles.root}>
      <Canvas>
        <ambientLight />
        <pointLight position={[0, 0, 0]} />
        <Suspense fallback={null}>
          <Shoe animatedSensor={animatedSensor} />
        </Suspense>
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 20,
    backgroundColor: '#7460aa',
    flex: 1,
    height: 350,
    width,
    position: 'absolute',
    zIndex: 3,
    top: 200,
  },
  topSection: {
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textNormal: {
    color: '#d6b15f',
    fontFamily: 'Roboto',
    alignSelf: 'flex-start',
    fontStyle: 'italic',
    padding: 20,
  },
  textName: {
    fontWeight: 'bold',
  },
  textTitle: {
    color: '#d6b15f',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 40,
  },
  textSlogan: {
    color: '#d6b15f',
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontSize: 10,
  },
});
