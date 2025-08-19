import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    // Front-End Beginner Projects
    {
      id: 1,
      title: "Recipe Website",
      description:
        "A static recipe website showcasing traditional Turkish dishes with clean HTML and CSS styling. Features multiple recipe pages with responsive design.",
      image: "./screenshots/TarifSitesi.jpg",
      technologies: ["HTML", "CSS"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/1-front-end-beginner/html-css/Tarifsitesi/Merintarif.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/1-front-end-beginner/html-css/Tarifsitesi",
    },
    {
      id: 2,
      title: "Google 1998 Clone",
      description:
        "A pixel-perfect recreation of Google's 1998 homepage design, demonstrating mastery of classic HTML and CSS layout techniques.",
      image: "./screenshots/Google-1998.jpg",
      technologies: ["HTML", "CSS"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/1-front-end-beginner/html-css/CSS.homework2-3/google-1998.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/1-front-end-beginner/html-css/CSS.homework2-3",
    },
    {
      id: 3,
      title: "Instagram Clone",
      description:
        "A responsive Instagram homepage clone built with Bootstrap, featuring mobile-first design and modern UI components.",
      image: "./screenshots/InstagramClone.jpg",
      technologies: ["HTML", "Bootstrap"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/1-front-end-beginner/html-css/Bootstrap/instagramclone/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/1-front-end-beginner/html-css/Bootstrap/instagramclone",
    },
    {
      id: 4,
      title: "LinkedIn Clone",
      description:
        "A professional LinkedIn homepage clone utilizing Bootstrap framework for responsive design and professional styling.",
      image: "./screenshots/LinkedInClone.jpg",
      technologies: ["HTML", "Bootstrap"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/1-front-end-beginner/html-css/Bootstrap/linkedinclone/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/1-front-end-beginner/html-css/Bootstrap/linkedinclone",
    },
    {
      id: 5,
      title: "Asian Kitchen",
      description:
        "A dynamic restaurant menu application with filtering capabilities, search functionality, and interactive JavaScript features.",
      image: "./screenshots/AsianKitchen.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/1-front-end-beginner/JavaScript/asiankitchen/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/1-front-end-beginner/JavaScript/asiankitchen",
    },
    {
      id: 6,
      title: "Todo App (Vanilla JS)",
      description:
        "A fully functional todo application built with vanilla JavaScript, featuring add, delete, and mark complete functionality.",
      image: "./screenshots/ToDo.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/1-front-end-beginner/JavaScript/ToDoHw/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/1-front-end-beginner/JavaScript/ToDoHw",
    },
    {
      id: 7,
      title: "Digital Clock",
      description:
        "A real-time digital clock application displaying current time with clean design and JavaScript date manipulation.",
      image: "./screenshots/ClockHw.jpg",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/1-front-end-beginner/JavaScript/clockhw/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/1-front-end-beginner/JavaScript/clockhw",
    },

    // Front-End Intermediate Projects - React
    {
      id: 8,
      title: "Todo App (React)",
      description:
        "A modern React-based todo application with state management using useState hooks and localStorage persistence.",
      image: "./screenshots/ReactToDo.jpg",
      technologies: ["React", "useState", "localStorage"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/2-front-end-intermediate/React/homework-2/to-do/build/index.html",
      githubUrl:
        "https://lilacmoon0.github.io/patika/tree/main/2-front-end-intermediate/React/homework-2/to-do",
    },
    {
      id: 9,
      title: "Weather App",
      description:
        "A comprehensive weather application using React with real-time weather data integration and responsive design.",
      image: "./screenshots/Weather-App.jpg",
      technologies: ["React", "API", "CSS"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/2-front-end-intermediate/React/homework-3/weather-app/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/2-front-end-intermediate/React/homework-3/weather-app",
    },

    // Redux Projects
    {
      id: 10,
      title: "Note Taking App",
      description:
        "A powerful note-taking application built with React and Redux, featuring create, edit, delete, and search functionality.",
      image: "./screenshots/AddNote.jpg",
      technologies: ["React", "Redux"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/2-front-end-intermediate/Redux/homework-1/note-app/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/2-front-end-intermediate/Redux/homework-1/note-app",
    },
    {
      id: 11,
      title: "Money App (Bill Gates Simulator)",
      description:
        "An entertaining shopping simulator inspired by Bill Gates' wealth, built with React and Redux for state management.",
      image: "./screenshots/BillGatesApp.jpg",
      technologies: ["React", "Redux"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/2-front-end-intermediate/Redux/homework-2/money-app/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/2-front-end-intermediate/Redux/homework-2/money-app",
    },
    {
      id: 12,
      title: "Card Memory Game",
      description:
        "An engaging memory card game with flip animations, score tracking, and game logic implemented using React and Redux.",
      image: "./screenshots/CardGame.jpg",
      technologies: ["React", "Redux", "Game Logic"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/2-front-end-intermediate/Redux/homework-3/card-game/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/2-front-end-intermediate/Redux/homework-3/card-game",
    },
    {
      id: 13,
      title: "COVID-19 Tracker",
      description:
        "A comprehensive COVID-19 data tracking application with charts, statistics, and real-time data visualization.",
      image: "./screenshots/CovidApp.jpg",
      technologies: ["React", "Redux", "API", "Charts"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/2-front-end-intermediate/Redux/projects/covid-tracker/covid-app/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/2-front-end-intermediate/Redux/projects/covid-tracker/covid-app",
    },
    {
      id: 14,
      title: "Text Generator",
      description:
        "A dynamic text generation application utilizing external APIs with React and Redux for content management.",
      image: "./screenshots/TextApp.jpg",
      technologies: ["React", "Redux", "API"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/2-front-end-intermediate/Redux/projects/text-generator/text-app/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/2-front-end-intermediate/Redux/projects/text-generator/text-app",
    },
    {
      id: 15,
      title: "Typing Speed Test",
      description:
        "An interactive typing speed test application with timer functionality, WPM calculation, and accuracy tracking.",
      image: "./screenshots/TypeSpeed.jpg",
      technologies: ["React", "Redux", "Timer Logic"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/2-front-end-intermediate/Redux/projects/type-speed/type-speed/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/2-front-end-intermediate/Redux/projects/type-speed/type-speed",
    },
    {
      id: 16,
      title: "Markdown Previewer",
      description:
        "A live markdown editor and previewer application with real-time rendering and syntax highlighting capabilities.",
      image: "./screenshots/MarkdownPreviewerApp.jpg",
      technologies: ["React", "Redux", "Markdown Parser"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/2-front-end-intermediate/Redux/projects/markdown-previewer/markdown-prev/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/2-front-end-intermediate/Redux/projects/markdown-previewer/markdown-prev",
    },
    {
      id: 17,
      title: "Checkers Game",
      description:
        "A fully functional checkers game with AI opponent, game logic validation, and animated piece movements.",
      image: "./screenshots/Checkers.jpg",
      technologies: ["React", "Redux", "Game Logic", "AI"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/2-front-end-intermediate/Redux/projects/checkers-game/checkers-game/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/2-front-end-intermediate/Redux/projects/checkers-game/checkers-game",
    },

    // Front-End Advanced Projects - GraphQL
    {
      id: 18,
      title: "Rick and Morty App",
      description:
        "A character browser application for Rick and Morty series using GraphQL queries and Apollo Client for data management.",
      image: "./screenshots/Rick-and-Morty.jpg",
      technologies: ["React", "GraphQL", "Apollo Client"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/3-front-end-advanced/GraphQl/project-2/rick-and-morty-app/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/3-front-end-advanced/GraphQl/project-2/rick-and-morty-app",
    },
    {
      id: 19,
      title: "Votes App",
      description:
        "A real-time voting application with GraphQL subscriptions, allowing users to create polls and vote in real-time.",
      image: "./screenshots/Poll.jpg",
      technologies: ["React", "GraphQL", "Apollo", "Apollo Client"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/3-front-end-advanced/GraphQl/project-3/client/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/3-front-end-advanced/GraphQl/project-3",
    },
    {
      id: 20,
      title: "Chat App",
      description:
        "An anonymous real-time chat application built with GraphQL subscriptions and Apollo for instant messaging capabilities.",
      image: "./screenshots/Anonymous.jpg",
      technologies: ["React", "GraphQL", "Apollo", "Apollo Client"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/3-front-end-advanced/GraphQl/project-4/client/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/3-front-end-advanced/GraphQl/project-4",
    },

    // First Level Projects
    {
      id: 21,
      title: "BMI Calculator",
      description:
        "A health-focused BMI calculator application with React Router navigation and styled components for modern UI design.",
      image: "./screenshots/BMI.jpg",
      technologies: ["React", "Router", "Styled Components"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/3-front-end-advanced/Projects/first-level/project-1/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/3-front-end-advanced/Projects/first-level/project-1",
    },
    {
      id: 22,
      title: "E-Commerce App",
      description:
        "A full-featured e-commerce application with shopping cart, product catalog, and checkout functionality using Context API.",
      image: "./screenshots/Commerce.jpg",
      technologies: ["React", "Context API", "Styled Components", "Router"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/3-front-end-advanced/Projects/first-level/project-2/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/3-front-end-advanced/Projects/first-level/project-2",
    },
    {
      id: 23,
      title: "Notes App",
      description:
        "A sophisticated note-taking application with advanced styling, responsive design, and modern UI components.",
      image: "./screenshots/NotesApp.jpg",
      technologies: ["React", "Styled Components", "Responsive Design"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/3-front-end-advanced/Projects/first-level/project-3/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/3-front-end-advanced/Projects/first-level/project-3",
    },
    {
      id: 24,
      title: "Portfolio Site",
      description:
        "A professional portfolio website showcasing projects and skills with API integration and modern styling.",
      image: "./screenshots/portfolio.jpg",
      technologies: ["React", "API Integration", "Styled Components"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/3-front-end-advanced/Projects/first-level/project-4/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/3-front-end-advanced/Projects/first-level/project-4",
    },

    // Second Level Projects
    {
      id: 25,
      title: "Anonymous Chat App",
      description:
        "A real-time anonymous chat application built with full-stack technologies including Socket.IO for instant messaging.",
      image: "./screenshots/Anonymous-chat.jpg",
      technologies: ["React", "Node.js", "Socket.IO", "Full-Stack"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/3-front-end-advanced/Projects/second-level/project-1/client/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/3-front-end-advanced/Projects/second-level/project-1",
    },
    {
      id: 26,
      title: "Crypto App",
      description:
        "A cryptocurrency tracking application with real-time price updates, charts, and portfolio management features.",
      image: "./screenshots/CryptoVault.jpg",
      technologies: ["React", "Node.js", "API", "Full-Stack"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/3-front-end-advanced/Projects/second-level/project-2/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/3-front-end-advanced/Projects/second-level/project-2",
    },
    {
      id: 27,
      title: "Card Game",
      description:
        "An interactive card game application with advanced game mechanics and React Context for state management.",
      image: "./screenshots/MiniCard.jpg",
      technologies: ["React", "Context"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/3-front-end-advanced/Projects/second-level/project-3/card-game/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/3-front-end-advanced/Projects/second-level/project-3",
    },
    {
      id: 28,
      title: "Book Search App",
      description:
        "A comprehensive book search application with real-time data fetching, search filters, and detailed book information.",
      image: "./screenshots/book-search.jpg",
      technologies: ["React", "API", "Real-time Data"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/3-front-end-advanced/Projects/second-level/project-4/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/3-front-end-advanced/Projects/second-level/project-4",
    },

    // Third Level Projects
    {
      id: 29,
      title: "Rock Paper Scissors Game",
      description:
        "An engaging Rock Paper Scissors game with smooth animations, score tracking, and advanced game logic implementation.",
      image: "./screenshots/RockPaperScissors.jpg",
      technologies: ["React", "Animations", "Game Logic"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/3-front-end-advanced/Projects/third-level/project-1/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/3-front-end-advanced/Projects/third-level/project-1",
    },
    {
      id: 30,
      title: "Form Builder",
      description:
        "A sophisticated drag-and-drop form builder application with advanced architecture and full-stack implementation.",
      image: "./screenshots/FormBuilder.jpg",
      technologies: ["React", "Node.js", "Advanced Architecture"],
      liveUrl:
        "https://lilacmoon0.github.io/patika/3-front-end-advanced/Projects/third-level/project-2/build/index.html",
      githubUrl:
        "https://github.com/lilacmoon0/patika/tree/main/3-front-end-advanced/Projects/third-level/project-2",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.reverse().map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
