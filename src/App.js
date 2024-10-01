import React, { useState, useEffect, useRef  } from 'react';
import { ChevronDown, Linkedin, Mail, ExternalLink, Award, Briefcase, GraduationCap, Code, Moon, Sun, ChevronRight, Database, Server, Cpu } from 'lucide-react';
import profilePicture from './profile-picture.jpeg';
import emailjs from '@emailjs/browser';

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        <h1 className={`text-2xl font-bold ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>Priyadarshan N.</h1>
        <nav>
          <ul className="flex space-x-4">
            {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className={`hover:text-blue-400 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>{item}</a>
              </li>
            ))}
            <li>
              <button onClick={toggleDarkMode} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
    <div className="text-center text-white">
      <h1 className="text-5xl font-bold mb-4">Priyadarshan Narayanasamy</h1>
      <p className="text-xl mb-8">Computer Science & Neuroscience Student | Innovator | Problem Solver</p>
      <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300">Get In Touch</a>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img 
            src={profilePicture} 
            alt="Priyadarshan Narayanasamy" 
            className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <p className="text-lg mb-4 dark:text-gray-300">
            I am a passionate and innovative individual pursuing a Bachelor of Science in Computer Science and Neuroscience at the University of Maryland, College Park. With a strong technical foundation, I thrive on creating impactful projects that blend technology with real-world problem-solving.
          </p>
          <p className="text-lg mb-6 dark:text-gray-300">
            My interdisciplinary background allows me to approach challenges from unique perspectives, combining the logical rigor of computer science with insights from neuroscience to develop cutting-edge solutions.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="mailto:nspd@umd.edu" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"><Mail size={24} /></a>
            <a href="https://linkedin.com/in/nspd" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"><Linkedin size={24} /></a>
            <a href="https://github.com/NSP909" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"><Code size={24} /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SkillCategory = ({ title, skills, icon: Icon }) => (
  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      <Icon size={24} className="mr-2 text-blue-500" />
      <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center dark:text-gray-300">
          <ChevronRight size={16} className="mr-2 text-green-500" />
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCategory 
          title="Programming Languages" 
          icon={Code}
          skills={["Python", "Java", "JavaScript", "C++", "SQL"]}
        />
        <SkillCategory 
          title="Web Technologies" 
          icon={Server}
          skills={["React", "Node.js", "Express", "HTML/CSS", "RESTful APIs"]}
        />
        <SkillCategory 
          title="Data Science & ML" 
          icon={Database}
          skills={["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"]}
        />
        <SkillCategory 
          title="Tools & Platforms" 
          icon={Cpu}
          skills={["Git", "Docker", "AWS", "Linux", "Jupyter"]}
        />
      </div>
    </div>
  </section>
);

const ProjectCard = ({ title, description, link, tags }) => (
  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105">
    <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap mb-4">
      {tags.map((tag, index) => (
        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          {tag}
        </span>
      ))}
    </div>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
      View Project <ExternalLink size={16} className="ml-1" />
    </a>
  </div>
);

const Projects = () => {
  const [expanded, setExpanded] = useState(false);
  const projects = [
    {
      title: "MediCompile",
      description: "AI-driven platform for managing and analyzing medical documents across languages and formats.",
      link: "https://devfolio.co/projects/medicompile",
      tags: ["AI", "NLP", "Healthcare"]
    },
    {
      title: "CtrlF-my-audio",
      description: "AI-powered web application for detecting and analyzing specific sounds in videos.",
      link: "https://devpost.com/software/ctrlf-my-audio",
      tags: ["Audio Processing", "Machine Learning", "Web App"]
    },
    {
      title: "Feasco",
      description: "AI-driven platform to assist users in identifying overcharges on medical bills.",
      link: "https://devpost.com/software/feasco",
      tags: ["FinTech", "AI", "Healthcare"]
    },
    {
      title: "JarWiz",
      description: "Innovative gesture and action recognition software for intuitive computer control.",
      link: "https://devpost.com/software/jarwiz",
      tags: ["Computer Vision", "HCI", "Machine Learning"]
    },
    {
      title: "ResQVision",
      description: "AI-powered disaster response tool for enhancing search and rescue operations.",
      link: "https://devpost.com/software/resqvision",
      tags: ["AI", "Disaster Response", "Computer Vision"]
    },
    {
      title: "Accessible Mapper",
      description: "Platform for finding and sharing detailed information about location accessibility features.",
      link: "https://devpost.com/software/accessible-mapper",
      tags: ["Accessibility", "Web App", "Geolocation"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, expanded ? projects.length : 3).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {!expanded && projects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setExpanded(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300 flex items-center mx-auto"
            >
              Show More Projects <ChevronDown size={20} className="ml-2" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ExperienceItem = ({ title, company, period, description }) => (
  <div className="mb-8 flex">
    <div className="flex flex-col items-center mr-4">
      <div className="w-1 bg-blue-500 h-full"></div>
      <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900"></div>
    </div>
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex-grow">
      <h3 className="text-xl font-semibold mb-1 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{company} | {period}</p>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  </div>
);

const Experience = () => (
  <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Experience</h2>
      <div className="max-w-3xl mx-auto">
        <ExperienceItem 
          title="Machine Learning Research Intern"
          company="Kaliber Labs"
          period="Since May 2024"
          description="Developed and implemented a robust Data Querying pipeline using RAG2SQL architecture. Deployed LLAVA for surgical monitoring and image querying. Engineered data processing pipelines and custom vector databases."
        />
        <ExperienceItem 
          title="Innovation Lead and Instructor"
          company="Atal Tinkering Lab"
          period="Apr 2022 - Mar 2023"
          description="Led team to victory in the National Creativity Olympiad. Mentored over 70 students in Electronics and Robotics, fostering practical skill development and innovation."
        />
      </div>
    </div>
  </section>
);

const Achievements = () => (
  <section id="achievements" className="py-20 bg-gray-100 dark:bg-gray-800">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "First Place Track Winner, HackMIT 2024",
          "Second Place Overall, Katy Hacks 2024",
          "Best use of AI/ML Innovation, Bitcamp @UMD 2024",
          "Best Finance Hack, HackPrinceton 2024",
          "Spark of Genius Award, HackCEWIT @Stony Brook 2024",
          "First Place Track Winner, Hacklytics @Georgia Tech 2024"
        ].map((achievement, index) => (
          <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 flex items-center transition-transform duration-300 hover:scale-105">
            <Award className="text-yellow-500 mr-4 flex-shrink-0" size={32} />
            <span className="dark:text-white">{achievement}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);


const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData(form.current);
    const templateParams = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      message: `Email: ${formData.get('user_email')}\n\nMessage: ${formData.get('message')}`
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setSubmitMessage('Message sent successfully!');
        form.current.reset();
      }, (error) => {
        setSubmitMessage('Failed to send message. Please try again.');
        console.error('EmailJS error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Get In Touch</h2>
        <div className="max-w-3xl mx-auto">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
              <input type="text" name="user_name" id="user_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="John Doe" required />
            </div>
            <div>
              <label htmlFor="user_email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
              <input type="email" name="user_email" id="user_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="name@example.com" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Message</label>
              <textarea name="message" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Leave a comment..." required></textarea>
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          {submitMessage && (
            <div className={`mt-4 text-center ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
              {submitMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};


const Footer = () => (
  <footer className="bg-gray-900 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; 2024 Priyadarshan Narayanasamy. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="mailto:nspd@umd.edu" className="hover:text-blue-400"><Mail size={20} /></a>
        <a href="https://linkedin.com/in/nspd" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><Linkedin size={20} /></a>
        <a href="https://github.com/NSP909" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><Code size={20} /></a>
      </div>
    </div>
  </footer>
);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;