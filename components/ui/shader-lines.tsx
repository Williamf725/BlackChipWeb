"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function ShaderAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    
    // Setup Scene
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
    
    // Optimization: Disable antialias for background effect
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false })
    
    // Aggressive Performance Optimization
    // Force pixelRatio to a max of 1.5 for performance
    const pixelRatio = Math.min(window.devicePixelRatio, 1.5);
    
    renderer.setPixelRatio(pixelRatio)
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    // Uniforms
    const uniforms = {
      time: { value: 1.0 },
      resolution: { value: new THREE.Vector2(container.clientWidth * pixelRatio, container.clientHeight * pixelRatio) },
    }

    // Vertex Shader
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    // Fragment Shader (The Logic)
    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision mediump float;
      uniform vec2 resolution;
      uniform float time;
        
      float random (in float x) {
          return fract(sin(x)*1e4);
      }
      float random (vec2 st) {
          return fract(sin(dot(st.xy,
                               vec2(12.9898,78.233)))*
              43758.5453123);
      }
      
      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        
        vec2 fMosaicScal = vec2(4.0, 2.0);
        vec2 vScreenSize = vec2(256,256);
        uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x) / (vScreenSize.x / fMosaicScal.x);
        uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y) / (vScreenSize.y / fMosaicScal.y);       
          
        float t = time*0.06+random(uv.x)*0.4;
        float lineWidth = 0.0008;

        vec3 color = vec3(0.0);
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 5; i++){
            // Render RGB split lines
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.01)*1.0 - length(uv));        
          }
        }
        
        // Output with some alpha blending logic if needed, here solid
        gl_FragColor = vec4(color[2],color[1],color[0],1.0);
      }
    `

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      transparent: true
    })

    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      
      const newPixelRatio = Math.min(window.devicePixelRatio, 1.5);
      
      renderer.setPixelRatio(newPixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);
      uniforms.resolution.value.x = container.clientWidth * newPixelRatio;
      uniforms.resolution.value.y = container.clientHeight * newPixelRatio;
    }

    window.addEventListener("resize", handleResize)

    // Animation Loop
    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)
      uniforms.time.value += 0.05
      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      if (container && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen" 
    />
  )
}