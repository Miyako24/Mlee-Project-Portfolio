import React from "react";

const projects = [
  {
    title: "Group Cost Calculator Project",
    image: "Group Cost Calculator.png", // Ensure this image is in the public/images folder or imported
    deployedLink: "https://halluc1nations.github.io/Project-1-Group-5/",
    githubLink: "https://halluc1nations.github.io/Project-1-Group-5/",
  },
  {
    title: "README Generator Project",
    image: "README.png",
    deployedLink: "https://github.com/Miyako24/README-File-Project1/tree/main",
    githubLink: "https://github.com/Miyako24/README-File-Project1/tree/main",
  },
  {
    title: "Vechicle Builder Project",
    image: "Vehicle Builder project.png",
    deployedLink: "https://github.com/Miyako24/Vehicle-builder-project",
    githubLink: "https://github.com/Miyako24/Vehicle-builder-project",
  },
  {
    title: "Weather Service Application",
    image: "WeatherApp.png",
    deployedLink: "https://github.com/Miyako24/Weather-Service-App-",
    githubLink: "https://github.com/Miyako24/Weather-Service-App-",
  },
  {
    title: "Company Employee Database Project",
    image: "Company employee database.png",
    deployedLink: "https://github.com/Miyako24/Company-Emp-Database",
    githubLink: "https://github.com/Miyako24/Company-Emp-Database",
  },
  {
    title: "Movie recommendation App",
    image: "Movie-recommendation-app.png",
    deployedLink: "https://github.com/Halluc1nations/Movie-Critics-Community-",
    githubLink: "https://github.com/Halluc1nations/Movie-Critics-Community-",
  },
];

const Portfolio = () => {
  return (
    <section>
      <h1>Miyako's Developer Portfolio</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="image-container">
              <a
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="overlay">
                  <h3>{project.title}</h3>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

  
export default Portfolio;