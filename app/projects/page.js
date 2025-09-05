import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with user authentication, payment processing, and admin dashboard. Built with modern technologies for optimal performance.',
      image: '/placeholder.svg',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Finance Manager App',
      description: 'Personal finance tracking application with expense categorization, budget planning, and financial insights. Features real-time data visualization.',
      image: '/placeholder.svg',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Chart.js', 'Prisma'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Time Management Tool',
      description: 'Productivity application with task scheduling, time tracking, and team collaboration features. Includes analytics and reporting capabilities.',
      image: '/placeholder.svg',
      tech: ['React', 'Express.js', 'MySQL', 'Socket.io', 'Material-UI'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with multi-platform integration, content scheduling, and performance tracking.',
      image: '/placeholder.svg',
      tech: ['Vue.js', 'Python', 'Django', 'Redis', 'D3.js'],
      github: '#',
      demo: '#'
    }
  ];

  return (


    <div className="min-h-screen pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My{" "}
            <span className="hero-gradient bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and learning experience in my development journey.
          </p>
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-glass glow hover:glow-strong transition-smooth group">
              <CardHeader>
                <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-primary/50 hover:border-primary hover:glow transition-smooth"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>

                <Button
                  size="sm"
                  className="flex-1 hero-gradient text-primary-foreground hover:glow-strong transition-smooth"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;