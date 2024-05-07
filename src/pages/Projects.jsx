import { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";

const Projects = () => {
  // State to store project data and filtered projects
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Load project data from projects.json
  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      })
      .catch((error) => console.error("Error loading project data:", error));
  }, []);

  // Function to handle category filter selection
  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="Projects text-center lg:text-left" data-page="Projects">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      {/* Filter buttons */}

      {/* Projects items */}
      <section className="projects">
        <ul className="grid lg:grid-cols-2 gap-12 grid-cols-1">
          {filteredProjects.map((project) => (
            <li
              className="project-item active"
              data-filter-item
              data-category={project.category}
              key={project.id}
            >
              <a href={project.link}>
                <figure className="project-img h-52 right-10 md:right-0 w-[320px] md:w-full md:96">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default Projects;
