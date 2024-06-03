import { MeshPortalMaterial, Text, useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useMediaQuery } from "usehooks-ts";

export default function IntroText({
  children,
}: {
  children?: React.ReactNode;
}) {
  const introPortal = useRef<THREE.Mesh>();
  const matches = useMediaQuery("(max-width: 376px)");

  const texture = useTexture("/assets/images/background.jpg");

  const adjustedColor = new THREE.Color(1, 1, 1).multiplyScalar(0.2);

  return (
    <group>
      <directionalLight position={[0, 7.8, matches ? 9.6 : 7.9]} />
      <Text
        anchorX="center"
        fontSize={matches ? 0.2 : 0.3}
        position={matches ? [0, 7.5, 9.6] : [0, 7.8, 8]}
        material-toneMapped={false}
        fontWeight={600}
      >
        {"Hi, I'm Aman, a Web Developer from India."}
        <meshStandardMaterial attach="material" color="white" />
      </Text>
      <Text
        anchorX="center"
        fontSize={matches ? 0.12 : 0.2}
        position={matches ? [0, 6.8, 9.6] : [0, 7, 8]}
        material-toneMapped={false}
        fontWeight={500}
      >
        {!matches
          ? "I enjoy creating dynamic and responsive web applications with immersive UI and seamless user \nexperiences. My passion lies in bridging the gap between design and technology to build \nintuitive, efficient, and visually appealing websites."
          : "I enjoy creating dynamic and responsive web applications with immersive UI\nand seamless user experiences. My passion lies in bridging the gap between\ndesign and technology to build intuitive, efficient, and visually appealing \nwebsites."}
        <meshStandardMaterial attach="material" color="white" />
      </Text>

      <mesh position={[0, 7, matches ? 9.45 : 7.9]}>
        {/* @ts-ignore */}

        <roundedPlaneGeometry
          args={[matches ? 5 : 10, matches ? 1.8 : 2.5, 0.1]}
        />
        {/* <MeshPortalMaterial
          // @ts-ignore
          ref={introPortal}
          side={THREE.DoubleSide}
        > */}
        <meshBasicMaterial
          //@ts-ignore
          ref={introPortal}
          attach="material"
          map={texture}
          color={adjustedColor}
          opacity={1}
          transparent={false}
        >
          {/* <color attach="background" args={["#bebeb4"]} /> */}
          {children}
        </meshBasicMaterial>
        {/* </MeshPortalMaterial> */}
      </mesh>
    </group>
  );
}
