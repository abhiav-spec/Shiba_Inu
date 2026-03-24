import React, { useEffect, useRef } from 'react'
import * as THREE from "three"
import { useThree } from '@react-three/fiber'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei'

const DogAbout = () => {
    const model = useGLTF("/models/dog.drc.glb")

    useThree(({ camera, scene, gl }) => {
        camera.position.z = 0.55
        gl.toneMapping = THREE.ReinhardToneMapping
        gl.outputColorSpace = THREE.SRGBColorSpace
    })

    const { actions } = useAnimations(model.animations, model.scene)

    useEffect(() => {
        actions[ "Take 001" ].play()
    }, [ actions ])

    const [ normalMap ] = (useTexture([ "/dog_normals.jpg", ]))
        .map(texture => {
            texture.flipY = false
            texture.colorSpace = THREE.SRGBColorSpace
            return texture
        })

    const [ branchMap, branchNormalMap ] = (useTexture([ "/branches_diffuse.jpeg", "branches_normals.jpeg" ]))
        .map(texture => {
            texture.colorSpace = THREE.SRGBColorSpace
            return texture
        })

    const [
        mat1,
        mat2,
        mat3,
        mat4,
        mat5,
        mat6,
        mat7,
        mat8,
        mat9,
        mat10,
        mat11,
        mat12,
        mat13,
        mat14,
        mat15,
        mat16,
        mat17,
        mat18,
        mat19,
        mat20
    ] = (useTexture([
        "/matcap/mat-1.png",
        "/matcap/mat-2.png",
        "/matcap/mat-3.png",
        "/matcap/mat-4.png",
        "/matcap/mat-5.png",
        "/matcap/mat-6.png",
        "/matcap/mat-7.png",
        "/matcap/mat-8.png",
        "/matcap/mat-9.png",
        "/matcap/mat-10.png",
        "/matcap/mat-11.png",
        "/matcap/mat-12.png",
        "/matcap/mat-13.png",
        "/matcap/mat-14.png",
        "/matcap/mat-15.png",
        "/matcap/mat-16.png",
        "/matcap/mat-17.png",
        "/matcap/mat-18.png",
        "/matcap/mat-19.png",
        "/matcap/mat-20.png",
    ])).map(texture => {
        texture.colorSpace = THREE.SRGBColorSpace
        return texture
    })

    const dogMaterial = new THREE.MeshMatcapMaterial({
        normalMap: normalMap,
        matcap: mat2
    })

    const branchMaterial = new THREE.MeshMatcapMaterial({
        normalMap: branchNormalMap,
        map: branchMap
    })

    model.scene.traverse((child) => {
        if (child.name.includes("DOG")) {
            child.material = dogMaterial
        } else {
            child.material = branchMaterial
        }
    })

    return (
        <>
            <primitive object={model.scene} position={[ 0.25, -0.55, 0 ]} rotation={[ 0, Math.PI / 3.9, 0 ]} />
            <directionalLight position={[ 0, 5, 5 ]} color={0xFFFFFF} intensity={10} />
        </>
    )
}

export default DogAbout
