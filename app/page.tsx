import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

export default function Home() {

  const navigation = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/cconnerney/',
      Icon: Linkedin,
    },
    {
      name: 'Email',
      href: 'mailto:cristinconnerney@gmail.com',
      Icon: Mail,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/cconnerney',
      Icon: Github,
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-8">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center gap-2 text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <item.Icon className="w-5 h-5" />
                {/* <span>{item.name}</span> */}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Cristin.ai
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500">
          ...Website coming soon...
        </h2>
      </div>
    </div>
  );

}
