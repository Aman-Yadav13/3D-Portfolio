import { Text, useCursor, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Color } from "three";
import { useMediaQuery } from "usehooks-ts";
import { useRoute } from "wouter";

export default function Portal({
  id,
  name,
  author,
  bg,
  imgUrl,
  lights,
  width = 1,
  height = 1.61803398875,
  children,
  ...props
}: {
  id: string;
  name: string;
  author: string;
  lights: boolean;
  bg: string;
  width?: number;
  imgUrl: string;
  height?: number;
  children?: React.ReactNode;
  props: any;
}) {
  const router = useRouter();
  const portal = useRef(null);
  const [, params] = useRoute("/:id");
  const [hovered, hover] = useState(false);
  const [isTapped, setIsTapped] = useState(false);
  const matches = useMediaQuery("(max-width: 376px)");

  useCursor(hovered);

  useFrame((state, dt) => {
    if (portal.current) {
      easing.damp(
        portal.current,
        "blend",
        params?.id === id || isTapped ? 1 : 0,
        0.2,
        dt
      );
    }
  });

  const texture = useTexture(imgUrl);

  const handleTap = () => {
    setIsTapped(true);
    setTimeout(() => {
      router.push("/" + id);
      router.refresh();
    }, 200);
  };

  const adjustedColor = new Color(1, 1, 1).multiplyScalar(0.2);

  return (
    <group {...props}>
      <mesh>
        <Text
          fontSize={0.25}
          anchorY="top"
          anchorX="left"
          lineHeight={0.8}
          position={[-0.6, 1, 0.01]}
          material-toneMapped={false}
        >
          {name}
        </Text>
        <Text
          fontSize={0.1}
          anchorX="right"
          position={[0.7, -1, 0.01]}
          material-toneMapped={false}
        >
          /{id}
        </Text>
        <Text
          fontSize={0.04}
          anchorX="right"
          position={[0.0, -0.677, 0.01]}
          material-toneMapped={false}
        >
          {author}
        </Text>
      </mesh>
      <mesh
        name={id}
        onDoubleClick={(e) => (
          e.stopPropagation(),
          router.push("/" + e.object.name),
          router.refresh()
        )}
        onClick={matches ? handleTap : () => {}}
        onPointerOver={(e) => hover(true)}
        onPointerOut={() => hover(false)}
      >
        {/* @ts-ignore */}
        <roundedPlaneGeometry args={[width, height, 0.1]} />
        {/* <MeshPortalMaterial ref={portal} events={params?.id === id}> */}
        <meshBasicMaterial
          ref={portal}
          attach="material"
          map={texture}
          color={adjustedColor}
          opacity={1}
          transparent={false}
        />
        {children}
        {/* </MeshPortalMaterial> */}
      </mesh>
    </group>
  );
}
