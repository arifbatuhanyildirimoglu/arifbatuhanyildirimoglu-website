import {
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NodeIcon,
  NextJSIcon,
  PythonIcon,
  SqlIcon,
  GitIcon,
  DotNetIcon,
  AwsIcon,
  UnityIcon,
} from '@/components/icons/SkillIcons'

export interface Skill {
  name: string
  icon: React.ComponentType<{ size?: number }>
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'game' | 'cloud'
}

export const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: JavaScriptIcon,
    category: 'frontend'
  },
  {
    name: "TypeScript",
    icon: TypeScriptIcon,
    category: 'frontend'
  },
  {
    name: "React",
    icon: ReactIcon,
    category: 'frontend'
  },
  {
    name: "Node.js",
    icon: NodeIcon,
    category: 'backend'
  },
  {
    name: "Next.js",
    icon: NextJSIcon,
    category: 'frontend'
  },
  {
    name: "Python",
    icon: PythonIcon,
    category: 'backend'
  },
  {
    name: "SQL",
    icon: SqlIcon,
    category: 'database'
  },
  {
    name: "Git",
    icon: GitIcon,
    category: 'tools'
  },
  {
    name: ".NET",
    icon: DotNetIcon,
    category: 'backend'
  },
  {
    name: "AWS",
    icon: AwsIcon,
    category: 'cloud'
  },
  {
    name: "Unity",
    icon: UnityIcon,
    category: 'game'
  }
] 