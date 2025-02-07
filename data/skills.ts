
import { IconType } from 'react-icons/lib'
import {SiGit, SiSupabase, SiAmazon, SiSharp, SiUnity, SiPostgresql, SiPython, SiMongodb, SiNodedotjs, SiTailwindcss, SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiDotnet } from 'react-icons/si'
import {FaDatabase} from 'react-icons/fa'
export interface Skill {
  name: string
  icon: IconType,
  color: string
}

export const skills: Skill[] = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "MSSQL", icon: FaDatabase, color: "text-blue-400" },
  { name: "Python", icon: SiPython, color: "text-yellow-300" },
  { name: "Git", icon: SiGit, color: "text-orange-600" },
  { name: "Unity", icon: SiUnity, color: "text-gray-300" },
  { name: "C#", icon: SiSharp, color: "text-purple-600" },
  { name: ".NET", icon: SiDotnet, color: "text-purple-600" },
  { name: "AWS", icon: SiAmazon, color: "text-orange-400" },
  { name: "Supabase", icon: SiSupabase, color: "text-green-500" },
] 