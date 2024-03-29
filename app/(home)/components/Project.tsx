import React from 'react'
import { SiNextdotjs, SiReact, SiSupabase, SiTailwindcss } from 'react-icons/si'
import Title from './Title'
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import Link  from 'next/link'

const Project = () => {
    const projects=[
        {
            title:"Personal Portfolio",
            link:"http://localhost:3000",
            tech:[SiNextdotjs,SiReact,SiSupabase,SiTailwindcss],
            cover:"/project-image-1.png",
            background:"bg-indigo-500"

        },
        {
            title:"Personal Portfolio",
            link:"http://localhost:3000",
            tech:[SiNextdotjs,SiReact,SiSupabase,SiTailwindcss],
            cover:"/project-image-1.png",
            background:"bg-green-500"

        }
    ]
  return (
    <div className='py-10 p-5 sm:p-0'>
        <Title className="flex flex-col items-center justify-center rotate-6" text="Projects 🎨"/>
        <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
            {
                projects.map((project,index)=>{
                    return (
                        <Link href={project.link} key={index}>
                            <div className={
                                cn("p-5 rounded-md",project.background)
                            }>
                                <DirectionAwareHover imageUrl={project.cover} className="w-full space-y-5 cursor-pointer">
                                    <div className="space-y-5">
                                    <h1 className="text-2xl font-bold">{project.title}</h1>
                                    <div className="flex items-center gap-5">
                                        {
                                            project.tech.map((Icon,index)=>{
                                                return <Icon key={index} className="w-5 h-5"/>
                                            })
                                        }
                                    </div>
                                    </div>
                                </DirectionAwareHover>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Project
