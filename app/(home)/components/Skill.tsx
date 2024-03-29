"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from './../../../components/ui/card-hover-effect';
import {SiMongodb, SiNextdotjs,SiTensorflow,SiHtml5, SiCss3,SiJavascript,SiP5Dotjs,SiMicrosoftazure,SiBootstrap,SiGit, SiCplusplus, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiTailwindcss } from "react-icons/si";
const Skill = () => {
    const skills =[
        {
            text:"React",
            Icon:SiReact
        },
        {
            text:"Node JS",
            Icon:SiNodedotjs
        },
        {
            text:"Mongodb",
            Icon:SiMongodb
        },
        {
            text:"Python",
            Icon:SiPython
        },

        {
            text:"Postgre SQL",
            Icon:SiPostgresql
        },
        {
            text:"Tailwind CSS",
            Icon:SiTailwindcss
        },
        {
            text:"Git",
            Icon:SiGit
        },
        {
            text:"HTML",
            Icon:SiHtml5
        },
        {
            text:"CSS",
            Icon:SiCss3
        },
        {
            text:"Javascript",
            Icon:SiJavascript
        },
        // {
        //     text:"P5 JS",
        //     Icon:SiP5Dotjs
        // },
        {
            text:"Azure",
            Icon:SiMicrosoftazure
        },
        {
            text:"C++",
            Icon:SiCplusplus
        },
        {
            text:"Next JS",
            Icon:SiNextdotjs
        },
        {
            text:"Bootstrap",
            Icon:SiBootstrap
        },
        {
            text:"Tensorflow",
            Icon:SiTensorflow
        },
        

    ]
  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title className="flex flex-col items-center justify-center -rotate-6" text="Skills 📖"/>
      <HoverEffect items={skills}/>
    </div>
  )
}

export default Skill
