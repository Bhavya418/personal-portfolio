import Link from 'next/link';
import React from 'react'
import { SiGithub, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";
import { cn } from "@/lib/utils";
import Image from "next/image";

function Navbar({className}:{className?:string}) {
    const social =[
        {
            label:"Github",
            link:"",
            Icon: SiGithub
        },
        {
            label:"Linkedin",
            link:"",
            Icon:SiLinkedin
        },
        {
            label:"Twitter",
            link:"",
            Icon:SiTwitter
        },
        {
            label:"Instagram",
            link:"",
            Icon:SiInstagram
        },
    ]

  return (
    <nav className={cn('py-10 flex justify-between items-center animate-move-down',className)}>
      
      <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>
        Bhavya 👨‍💻 
      </h1>
      
      <div className='flex items-center gap-x-5'>
            {social.map((item,index)=>{
                const Icon = item.Icon;
                return <Link href={item.link} key={index} aria-label={item.label}>
                    <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
                </Link>
            })}
      </div>
    </nav>
  )
}

export default Navbar
