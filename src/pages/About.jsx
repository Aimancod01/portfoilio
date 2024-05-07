import Service from "./Service";

const service = [
  {
    title: "Full Stack Expertise",
    icon: "/images/icon-design.svg",
    description: "Excel in both backend and frontend development",
  },
  {
    title: "API Integeration",
    icon: "/images/icon-dev.svg",
    description:
      "Bridging systems with precision, forging seamless data pathways for optimal functionality.",
  },
  {
    title: "Database Handling",
    icon: "/images/icon-database.svg",
    description:
      "Architecting robust databases, ensuring data integrity and performance.",
  },
  {
    title: "Deployment",
    icon: "/images/icon-api.svg",
    description: "Automating deployment for scalable, resilient applications.",
  },
];

function About() {
  return (
    <div className="text-center lg:text-left">
      <header className="ml-5 mt-6">
        <h2 className="h2 lg:mb-10 ">About Me</h2>
      </header>
      <section className="about-text  ">
        <p>
          Fueled by curiosity, I transformed my passion for coding into
          expertise in the MERN stack MongoDB, Express.js, React.js, and
          Node.js. Now, I craft user-centric web experiences, building dynamic
          and scalable applications. Skilled in both the backend and frontend, I
          excel at designing RESTful APIs, implementing interactive UIs with
          React.js, and creating robust solutions that seamlessly meet user and
          business needs.
        </p>
        <p>
          I'm excited about the possibilities ahead and look forward to
          connecting with like-minded individuals who share my passion for
          technology and innovation.
        </p>
      </section>
      <section className="service">
        <h2 className="h3 service-title">What I'm Doing</h2>
        <ul className="service-list">
          {service.map((item) => (
            <Service key={item.title} item={item} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default About;
