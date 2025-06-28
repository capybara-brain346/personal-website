"use client"
/* eslint-disable react/no-unknown-property */
import React, { forwardRef, useMemo, useRef, useLayoutEffect } from "react";
import { Canvas, useFrame, useThree, RootState } from "@react-three/fiber";
import { Color, Mesh, ShaderMaterial } from "three";
import { IUniform } from "three";

type NormalizedRGB = [number, number, number];

const hexToNormalizedRGB = (hex: string): NormalizedRGB => {
    const clean = hex.replace("#", "");
    const r = parseInt(clean.slice(0, 2), 16) / 255;
    const g = parseInt(clean.slice(2, 4), 16) / 255;
    const b = parseInt(clean.slice(4, 6), 16) / 255;
    return [r, g, b];
};

interface UniformValue<T = number | Color> {
    value: T;
}

interface SilkUniforms {
    uSpeed: UniformValue<number>;
    uScale: UniformValue<number>;
    uNoiseIntensity: UniformValue<number>;
    uColor: UniformValue<Color>;
    uRotation: UniformValue<number>;
    uTime: UniformValue<number>;
    [uniform: string]: IUniform;
}

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.02 * sin(6.0 * tex.x - tOffset);

  float pattern = 0.7 +
                  0.3 * sin(4.0 * (tex.x + tex.y +
                                   cos(2.0 * tex.x + 4.0 * tex.y) +
                                   0.01 * tOffset) +
                           sin(15.0 * (tex.x + tex.y - 0.05 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 20.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

interface SilkPlaneProps {
    uniforms: SilkUniforms;
}

const SilkPlane = forwardRef<Mesh, SilkPlaneProps>(function SilkPlane(
    { uniforms },
    ref
) {
    const { viewport, size } = useThree();

    useLayoutEffect(() => {
        const mesh = ref as React.MutableRefObject<Mesh | null>;
        if (mesh.current) {
            const scale = Math.max(2, Math.max(viewport.width, viewport.height));
            mesh.current.scale.set(scale, scale, 1);
        }
    }, [ref, viewport, size]);

    useFrame((_state: RootState, delta: number) => {
        const mesh = ref as React.MutableRefObject<Mesh | null>;
        if (mesh.current) {
            const material = mesh.current.material as ShaderMaterial & {
                uniforms: SilkUniforms;
            };
            material.uniforms.uTime.value += 0.1 * delta;
        }
    });

    return (
        <mesh ref={ref}>
            <planeGeometry args={[1, 1]} />
            <shaderMaterial
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                transparent={true}
            />
        </mesh>
    );
});
SilkPlane.displayName = "SilkPlane";

export interface SilkProps {
    speed?: number;
    scale?: number;
    color?: string;
    noiseIntensity?: number;
    rotation?: number;
}

const Silk: React.FC<SilkProps> = ({
    speed = 5,
    scale = 1,
    color = "#7B7481",
    noiseIntensity = 1.5,
    rotation = 0,
}) => {
    const meshRef = useRef<Mesh>(null);

    const uniforms = useMemo<SilkUniforms>(
        () => ({
            uSpeed: { value: speed },
            uScale: { value: scale },
            uNoiseIntensity: { value: noiseIntensity },
            uColor: { value: new Color(...hexToNormalizedRGB(color)) },
            uRotation: { value: rotation },
            uTime: { value: 0 },
        }),
        [speed, scale, noiseIntensity, color, rotation]
    );

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Canvas
                dpr={[1, 1.5]}
                frameloop="always"
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    touchAction: 'none',
                    pointerEvents: 'none',
                }}
                gl={{
                    antialias: false,
                    powerPreference: "high-performance",
                    alpha: true,
                    preserveDrawingBuffer: true,
                }}
                resize={{
                    scroll: false,
                    debounce: { scroll: 50, resize: 0 }
                }}
                camera={{
                    position: [0, 0, 1],
                    near: 0.1,
                    far: 1000,
                    fov: 75
                }}
            >
                <SilkPlane ref={meshRef} uniforms={uniforms} />
            </Canvas>
        </div>
    );
};

export default Silk;
