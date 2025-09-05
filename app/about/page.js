// export const metadata = { title: "About — Ratan" };

// export default function About() {
//   return (
//     <div className="prose dark:prose-invert max-w-none container-prose">
//       <h1>About Me</h1>
//       <p>
//         I am a full‑stack web developer specializing in React, Next.js, Node.js, MySQL and Redis. I build robust systems with clean UX, scalable APIs, and strong architecture.
//       </p>
//       <h2>Skills</h2>
//       <ul>
//         <li>Frontend: React, Next.js, Redux, Tailwind CSS</li>
//         <li>Backend: Node.js, Express, REST APIs</li>
//         <li>Database: MySQL, Redis</li>
//         <li>DevOps: Vercel, Netlify, Docker (basics)</li>
//         <li>Testing & QA: Jest, Playwright (basics)</li>
//       </ul>
//       <h2>Experience</h2>
//       <p>Built eCommerce, finance apps, and admin dashboards end‑to‑end.</p>
//     </div>
//   );
// }


import { Code, Database, Globe, Server } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="h-6 w-6" />,
      items: ['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux']
    },
    {
      category: 'Backend',
      icon: <Server className="h-6 w-6" />,
      items: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Database',
      icon: <Database className="h-6 w-6" />,
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Prisma']
    },
    {
      category: 'Tools',
      icon: <Code className="h-6 w-6" />,
      items: ['Git', 'Docker', 'AWS', 'Jest', 'Webpack']
    }
  ];

  const experience = [
    {
      role: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      description: 'Lead development of modern web applications using React and Node.js. Mentored junior developers and implemented best practices.'
    },
    {
      role: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Built responsive web applications and improved user experience. Collaborated with design team to implement pixel-perfect interfaces.'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="hero-gradient bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer with 4+ years of experience building scalable web applications.
            I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card key={skill.category} className="card-glass glow hover:glow-strong transition-smooth">
                <CardHeader className="text-center">
                  <div className="text-primary mb-2 flex justify-center">
                    {skill.icon}
                  </div>
                  <CardTitle className="text-lg">{skill.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.items.map((item) => (
                      <Badge key={item} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <Card key={index} className="card-glass glow hover:glow-strong transition-smooth">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{exp.role}</h3>
                      <p className="text-lg text-muted-foreground">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="card-glass glow hover:glow-strong transition-smooth">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-muted-foreground mb-2">University of Technology</p>
                <Badge variant="outline">2016 - 2020</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;