import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Timeline from '@/components/ui/Timeline';
import Button from '@/components/ui/Button';
import MobileMenu from '@/components/ui/MobileMenu';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ProgressScrollBar from '@/components/ui/ProgressScrollBar';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Stats from '@/components/ui/Stats';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const skills = {
  languages: ['Python', 'JavaScript/TypeScript', 'Go', 'Rust', 'SQL'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Redis'],
  backend: ['Django', 'Node.js', 'NestJS', 'Express', 'FastAPI'],
  frontend: ['React', 'Next.js', 'TailwindCSS', 'HTML5/CSS3', 'Vue.js'],
  mobile: ['React Native', 'Flutter', 'Expo'],
  tools: ['Git', 'Docker', 'Azure', 'AWS', 'Google Cloud'],
};

const projects = [
  {
    title: 'TTS ERP System',
    company: 'VTI',
    period: 'Mar 2025 - Present',
    description: 'Enterprise resource planning system for manufacturing industry',
    tech: ['Django', 'React', 'PostgreSQL', 'Docker'],
    highlights: ['Improved workflow efficiency by 40%', 'Reduced manual processing time'],
  },
  {
    title: 'UTrade Platform',
    company: 'VDT Solutions',
    period: '2023 - 2024',
    description: 'Real-time trading platform for cryptocurrency and stocks',
    tech: ['NestJS', 'React', 'WebSocket', 'Redis', 'PostgreSQL'],
    highlights: [
      'Real-time data streaming',
      'High-frequency trading support',
      'Secure transaction processing',
    ],
  },
  {
    title: 'VDaily Mobile App',
    company: 'VDT Solutions',
    period: '2023 - Present',
    description: 'Social media and content sharing platform for Vietnamese users',
    tech: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    highlights: [
      '100K+ active users',
      'Cross-platform support (iOS & Android)',
      'Real-time notifications',
    ],
    link: 'https://vdaily.vn',
  },
  {
    title: 'PNStack E-commerce',
    company: 'Personal Project',
    period: '2024',
    description: 'Full-featured e-commerce platform with admin dashboard',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Stripe'],
    highlights: ['Payment gateway integration', 'Inventory management', 'Analytics dashboard'],
    link: 'https://github.com/npv2k1/pnstack',
  },
];

const handsOnProjects = [
  {
    title: 'PNStack Framework',
    description: 'Modern full-stack framework combining Next.js and NestJS with best practices',
    tech: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL'],
    stars: 45,
    forks: 12,
    link: 'https://github.com/npv2k1/pnstack',
    icon: '🚀',
  },
  {
    title: 'VCheck Tool',
    description: 'Automated validation and checking tool for Vietnamese government documents',
    tech: ['Python', 'FastAPI', 'OCR', 'Machine Learning'],
    stars: 23,
    forks: 8,
    link: 'https://github.com/npv2k1/vcheck',
    icon: '✓',
  },
  {
    title: 'Face Skin Analyzer',
    description: 'AI-powered skin analysis tool using computer vision',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'React'],
    stars: 67,
    forks: 19,
    link: 'https://github.com/npv2k1/face-skin-analyzer',
    icon: '👤',
  },
  {
    title: 'NStore',
    description: 'State management library for React with TypeScript support',
    tech: ['TypeScript', 'React', 'Jest'],
    stars: 34,
    forks: 6,
    link: 'https://github.com/npv2k1/nstore',
    icon: '📦',
  },
];

const socialLinks = [
  {
    name: 'GitHub',
    handle: '@npv2k1',
    url: 'https://github.com/npv2k1',
    followers: '500+',
    icon: 'fab fa-github',
    color: 'from-gray-700 to-gray-900',
  },
  {
    name: 'LinkedIn',
    handle: '@npv2k',
    url: 'http://www.linkedin.com/in/npv2k',
    followers: '1.2K+',
    icon: 'fab fa-linkedin',
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Email',
    handle: 'npv2k1@gmail.com',
    url: 'mailto:npv2k1@gmail.com',
    followers: 'Contact me',
    icon: 'fas fa-envelope',
    color: 'from-red-500 to-red-700',
  },
  {
    name: 'Phone',
    handle: '0985035331',
    url: 'tel:0985035331',
    followers: 'Call now',
    icon: 'fas fa-phone',
    color: 'from-green-500 to-green-700',
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Experience', 'Projects', 'Hands-on', 'Skills', 'Social', 'Contact'];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const exportToPDF = async () => {
    if (!contentRef.current) return;

    setIsExporting(true);

    try {
      // Hide elements that shouldn't be in PDF
      const elementsToHide = document.querySelectorAll('.no-print');
      elementsToHide.forEach((el) => el.classList.add('hidden'));

      const canvas = await html2canvas(contentRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      pdf.save('Nguyen_Pham_CV.pdf');

      // Show hidden elements again
      elementsToHide.forEach((el) => el.classList.remove('hidden'));
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Nguyên Phạm - Full Stack Developer</title>
        <meta
          name="description"
          content="Professional Full Stack Developer specializing in React, Node.js, and Cloud Technologies"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <ProgressScrollBar />

        {/* Navigation */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 no-print ${
            scrollY > 50
              ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg'
              : 'bg-transparent'
          }`}
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                NP
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item)}
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    {item}
                  </motion.button>
                ))}
                <ThemeToggle />
                <Button onClick={exportToPDF} disabled={isExporting} variant="primary" size="sm">
                  {isExporting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Exporting...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-download mr-2"></i>
                      Download CV
                    </>
                  )}
                </Button>
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center space-x-4">
                <ThemeToggle />
                <MobileMenu items={navItems} onItemClick={scrollToSection} />
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div ref={contentRef}>
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-600/20 dark:to-purple-600/20 rounded-full blur-3xl animate-blob"></div>
              <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-400/20 to-blue-400/20 dark:from-pink-600/20 dark:to-blue-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="inline-block mb-4"
                  >
                    <Badge variant="primary">Full Stack Developer</Badge>
                  </motion.div>

                  <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Nguyên Phạm
                    </span>
                  </h1>

                  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                    Building scalable web & mobile applications with modern technologies
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Button onClick={() => scrollToSection('contact')} variant="primary" size="lg">
                      <i className="fas fa-envelope mr-2"></i>
                      Get in Touch
                    </Button>
                    <Button onClick={() => scrollToSection('projects')} variant="outline" size="lg">
                      <i className="fas fa-briefcase mr-2"></i>
                      View Projects
                    </Button>
                    <Button
                      onClick={exportToPDF}
                      disabled={isExporting}
                      variant="secondary"
                      size="lg"
                    >
                      <i
                        className={`fas ${isExporting ? 'fa-spinner fa-spin' : 'fa-download'} mr-2`}
                      ></i>
                      {isExporting ? 'Exporting...' : 'Download CV'}
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative w-full aspect-square max-w-md mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                      <Image
                        src="/meface.jpg"
                        alt="Nguyên Phạm"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 no-print"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-gray-600 dark:text-gray-400 text-center"
              >
                <i className="fas fa-chevron-down text-2xl"></i>
                <p className="text-sm mt-2">Scroll to explore</p>
              </motion.div>
            </motion.div>
          </section>

          {/* Stats Section */}
          <section className="py-20 relative">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <Stats
                  icon="fas fa-code"
                  value={50}
                  suffix="+"
                  label="Projects Completed"
                  color="blue"
                />
                <Stats
                  icon="fas fa-users"
                  value={100}
                  suffix="K+"
                  label="Users Served"
                  color="purple"
                />
                <Stats
                  icon="fas fa-award"
                  value={5}
                  suffix="+"
                  label="Certifications"
                  color="green"
                />
                <Stats
                  icon="fas fa-clock"
                  value={3}
                  suffix="+"
                  label="Years Experience"
                  color="pink"
                />
              </div>
            </div>
          </section>

          {/* About Section */}
          <Section id="about" title="About Me" subtitle="Get to know me better">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Who I Am</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  I am a professional web and mobile developer with experience in various
                  technologies and frameworks. I have high responsibility and commitment to work on
                  any project I undertake.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently working as a DevOps Engineer and Full Stack Developer at VDT Solutions,
                  where I focus on building scalable applications and improving development
                  workflows.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">What I Do</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-laptop-code text-blue-600 dark:text-blue-400 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Full Stack Development
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Building end-to-end web applications with modern frameworks
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-mobile-alt text-purple-600 dark:text-purple-400 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        Mobile Development
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Creating cross-platform mobile apps with React Native
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-cloud text-green-600 dark:text-green-400 text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                        DevOps & Cloud
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Deploying and managing applications on cloud platforms
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Section>

          {/* Experience Section */}
          <Section id="experience" title="Experience" subtitle="My professional journey">
            <Timeline
              items={[
                {
                  period: 'Mar 2025 - Present',
                  title: 'Back End Developer',
                  company: 'VTI',
                  description:
                    'Developing enterprise-level backend systems and APIs for manufacturing industry',
                  technologies: ['Django', 'PostgreSQL', 'Docker', 'Redis'],
                },
                {
                  period: 'Jun 2024 - Present',
                  title: 'DevOps Engineer',
                  company: 'VDT Solutions',
                  description:
                    'Managing cloud infrastructure, CI/CD pipelines, and deployment automation',
                  technologies: ['Azure', 'Docker', 'Kubernetes', 'GitHub Actions'],
                },
                {
                  period: 'Jun 2023 - Present',
                  title: 'React Native Developer',
                  company: 'VDT Solutions',
                  description:
                    'Building cross-platform mobile applications for social media and e-commerce',
                  technologies: ['React Native', 'Expo', 'TypeScript', 'Redux'],
                },
                {
                  period: 'Mar 2022 - Present',
                  title: 'Full Stack Developer',
                  company: 'VDT Solutions',
                  description:
                    'Developing full-stack web applications with modern frameworks and best practices',
                  technologies: ['React', 'Next.js', 'Node.js', 'NestJS'],
                },
              ]}
            />
          </Section>

          {/* Projects Section */}
          <Section id="projects" title="Featured Projects" subtitle="Some of my best work">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="p-8 hover:shadow-2xl transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {project.company} • {project.period}
                      </p>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        <i className="fas fa-external-link-alt text-xl"></i>
                      </a>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge key={i} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                        >
                          <i className="fas fa-check text-green-500 mr-2 mt-1"></i>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          {/* Hands-on Projects Section */}
          <Section
            id="hands-on"
            title="Open Source & Personal Projects"
            subtitle="Libraries and tools I've built"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {handsOnProjects.map((project, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{project.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="flex items-center">
                            <i className="fas fa-star text-yellow-500 mr-1"></i>
                            {project.stars}
                          </span>
                          <span className="flex items-center">
                            <i className="fas fa-code-branch mr-1"></i>
                            {project.forks}
                          </span>
                        </div>
                      </div>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <i className="fab fa-github text-2xl"></i>
                    </a>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="info">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                    >
                      View on GitHub
                      <i className="fas fa-arrow-right ml-2"></i>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          {/* Skills Section */}
          <Section id="skills" title="Skills & Technologies" subtitle="My technical expertise">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, items], index) => (
                <Card key={category} className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <i
                        className={`fas ${
                          category === 'languages'
                            ? 'fa-code'
                            : category === 'databases'
                            ? 'fa-database'
                            : category === 'backend'
                            ? 'fa-server'
                            : category === 'frontend'
                            ? 'fa-desktop'
                            : category === 'mobile'
                            ? 'fa-mobile-alt'
                            : 'fa-tools'
                        } text-white text-xl`}
                      ></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white capitalize">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <Badge key={i} variant="primary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </Section>

          {/* Social Connect Section */}
          <Section id="social" title="Let's Connect" subtitle="Find me on social media">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="block"
                >
                  <Card
                    className={`p-8 bg-gradient-to-br ${social.color} text-white hover:shadow-2xl transition-all`}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className={`${social.icon} text-3xl`}></i>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{social.name}</h3>
                      <p className="text-white/80 mb-2">{social.handle}</p>
                      <div className="flex items-center justify-center space-x-2">
                        <i className="fas fa-users text-sm"></i>
                        <span className="text-sm font-medium">{social.followers}</span>
                      </div>
                    </div>
                  </Card>
                </motion.a>
              ))}
            </div>
          </Section>

          {/* Contact Section */}
          <Section id="contact" title="Get In Touch" subtitle="Let's work together">
            <div className="max-w-4xl mx-auto">
              <Card className="p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-envelope text-white text-3xl"></i>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Ready to start a project?
                </h3>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  I'm always open to discussing new opportunities and interesting projects.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                  <a
                    href="mailto:npv2k1@gmail.com"
                    className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <i className="fas fa-envelope text-xl"></i>
                    <span className="text-lg">npv2k1@gmail.com</span>
                  </a>

                  <a
                    href="tel:0985035331"
                    className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <i className="fas fa-phone text-xl"></i>
                    <span className="text-lg">0985035331</span>
                  </a>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={() => window.open('mailto:npv2k1@gmail.com')}
                    variant="primary"
                    size="lg"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Send Email
                  </Button>
                  <Button
                    onClick={() => window.open('http://www.linkedin.com/in/npv2k')}
                    variant="outline"
                    size="lg"
                  >
                    <i className="fab fa-linkedin mr-2"></i>
                    LinkedIn
                  </Button>
                  <Button
                    onClick={exportToPDF}
                    disabled={isExporting}
                    variant="secondary"
                    size="lg"
                  >
                    <i
                      className={`fas ${isExporting ? 'fa-spinner fa-spin' : 'fa-download'} mr-2`}
                    ></i>
                    {isExporting ? 'Exporting...' : 'Download CV'}
                  </Button>
                </div>
              </Card>
            </div>
          </Section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <p className="text-gray-400">© 2025 Nguyên Phạm. All rights reserved.</p>
                </div>

                <div className="flex space-x-6">
                  <a
                    href="https://github.com/npv2k1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                  <a
                    href="http://www.linkedin.com/in/npv2k"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a
                    href="mailto:npv2k1@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <i className="fas fa-envelope text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>

        <ScrollToTop />
      </div>
    </>
  );
}
