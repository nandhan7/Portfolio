import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  Redis,
  Kafka,
  Java,
  Prometheus,
  python,
  Azure,
  Grafana,
  postgre,
  Kubernetes,
  CPlusPlus,
  realestate,
  travel,
  hotel,
  pizza,
  carrent,
  // jobit,
  tripguide,
  threejs,
  atkins,
  Nextjs,
  zapier,
  website,
  image, 
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "C++",
    icon: CPlusPlus,
  },
  {
    name: "Java",
    icon: Java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Redis",
    icon: Redis,
  },
  {
    name: "Prometheus",
    icon: Prometheus,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Next Js",
    icon: Nextjs,
  },

];

const experiences = [
  {
    title: "Data Engineer",
    company_name: "AtkinsRealis",
    icon: atkins,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
       "Designed and developed scalable ETL pipelines in Python using Pandas and PyODBC to extract, transform, and load large volumes of structured and unstructured data from Excel into Azure SQL Database.",
      "Implemented serverless, event-driven processing using Azure Functions triggered by file uploads in Azure Data Lake, ensuring low-latency ingestion without manual intervention.",
      "Built end-to-end data workflows using Azure Data Factory for pipeline orchestration, dependency handling, and integration with Azure Key Vault for secure credential management.",
      "Engineered normalized SQL schemas and optimized stored procedures to support hierarchical data ingestion, resulting in a 75% boost in query performance and reduced data duplication.",
      "Enabled real-time analytics by transforming raw data into actionable formats and exposing it through React.js dashboards connected to Azure SQL, improving business decision-making.",
      "Automated data quality checks, validation layers, and logging mechanisms to ensure data accuracy, traceability, and compliance throughout the pipeline lifecycle.",
      "Leveraged Databricks and PySpark for distributed processing of high-volume datasets and facilitated cloud-based data lake migrations and optimizations.",
      "Performed statistical data profiling and trend analysis using NumPy, Matplotlib, and Seaborn to uncover anomalies and derive insights for water infrastructure and construction cost projects.",
      "Implemented full-stack internal tools for data monitoring and visualization using FastAPI/Node.js APIs and React.js frontends, containerized with Docker and deployed via Azure DevOps CI/CD pipelines."
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "AtkinsRealis",
    icon: atkins,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "Developed Python scripts to automate data extraction, transformation, and loading (ETL) processes, significantly reducing manual effort and minimizing errors in data handling",
      "Leveraged Microsoft Azure services, such as Azure Data Factory , Databricks , PySpark and Azure Logic Apps, to deploy Python solutions in the cloud, enhancing scalability and reliability while ensuring efficient resource management.",
      "Developed SQL stored procedures to encapsulate complex business logic and streamline database interactions, improving maintainability and performance while ensuring data integrity and consistency through effective transaction management",
      "Integrated monitoring and logging features within Azure to provide real-time insights into the performance of automated processes, enabling quick identification and resolution of issues.",
    ],
  },

];

const projects = [
  {
    name: "Zapier - Automation Platform",
    description:
      "Developed an automation platform that enables users to create custom workflows, triggered by webhooks, for automating tasks such as sending emails or payments. The platform leverages the transactional outbox pattern to ensure atomic, reliable task execution. Events are stored in an outbox table alongside database updates, and background workers process tasks while integrating Apache Kafka for real-time event handling. This design ensures fault-tolerant, scalable workflows, preventing data inconsistencies and guaranteeing no tasks are lost, even during system failures",
    tags: [
      {
        name: "Next js",
        color: "black-text-gradient",
      },
      {
        name: "Node js",
        color: "blue-text-gradient",
      },
      {
        name: "Express js",
        color: "green-text-gradient",
      },
      {
        name: "Apache Kafka",
        color: "yellow-text-gradient",
      },
      {
        name: "Web Containers",
        color: "pink-text-gradient",
      },
      {
        name: "Postgres",
        color: "red-text-gradient",
      },
    ],
    image: zapier,
    source_code_link: "https://github.com/nandhan7/Zapier",
    DemoLink: "https://drive.google.com/file/d/1tl8wVJ7VhNQKD0mrFF9vIPKnASNGjHZz/view?usp=sharing",
  },
  {
    name: "AI Website Builder",
    description:
      "Developed an AI-powered website builder that allows users to create customizable websites from simple prompts. The platform provides real-time previews, enabling users to see changes as they make adjustments. After the initial website generation, users can give additional prompts to refine or modify the design, ensuring the final result aligns with their needs. This process ensures an intuitive and seamless experience from design to deployment, with intelligent features that adapt to user input for continuous improvements.",
    tags: [
      {
        name: "Artificial Intelligence",
        color: "black-text-gradient",
      },
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Express js",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "yellow-text-gradient",
      },
      {
        name: "Web Containers",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "red-text-gradient",
      },
      {
        name: "Claude API",
        color: "grey-text-gradient",
      },
    ],
    image: website,
    source_code_link: "https://github.com/nandhan7/Website-Builder",
    DemoLink: "https://drive.google.com/file/d/12yzB6vp0xLtUEzN9q9LFwdaxQBnU-sgT/view",
  },
  {
    name: "AI Image Generator",
    description:
      "Developed an AI-powered platform that generates images based on user prompts, providing real-time previews and downloads with smooth performance. The platform allows users to see instant results, facilitating a seamless experience from concept to final output. Additionally, it offers easy integration, enabling users to generate high-quality images efficiently. The platform ensures a user-friendly and interactive interface, enhancing creativity and customization options for users.",
    tags: [
      {
        name: "Artificial Intelligence",
        color: "black-text-gradient",
      },
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Express js",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "yellow-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "TypeScript",
        color: "red-text-gradient",
      },
      {
        name: "ClipDrop API",
        color: "grey-text-gradient",
      },
    ],
    image: image,
    source_code_link: "https://github.com/nandhan7/Imagify",
    DemoLink: "https://drive.google.com/file/d/19D3t-t6xzSqgMHG-1iv9WeZ7zSNI1HDL/view",
  },
  {
    name: "Real Estate App",
    description:
      "Designed and implemented a Real Estate application that features secure user authentication to ensure data protection and privacy. The application enables users to browse and view property listings, upload their own properties, save favorite locations, and update their profiles seamlessly. Additionally, a messaging system was integrated to allow users to communicate directly with property owners, enhancing user engagement and fostering interaction within the platform. This comprehensive approach ensures a user-friendly experience while facilitating effective communication in the real estate market.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Node JS",
        color: "yellow-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
      {
        name: "Socket.io",
        color: "red-text-gradient",
      },
      {
        name: "Zustand",
        color: "grey-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://github.com/nandhan7/RealEstateApp",
    DemoLink: "https://drive.google.com/file/d/1Xtb75nPyYr-IFZ0h1i8LXpZoTGQ0Iqze/view",
  },
  {
    name: "The Wild Oasis",
    description:
      "Developed a comprehensive hotel management system that empowers staff to efficiently manage and oversee bookings, including check-ins and check-outs. The system features functionalities for updating existing bookings, adding new cabins, and managing user accounts, streamlining operations. Additionally, I integrated a module that generates and reviews detailed statistics on hotel performance, which aids in data-driven decision-making and enhances operational efficiency.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Context API",
        color: "green-text-gradient",
      },
      {
        name: "Styled components",
        color: "pink-text-gradient",
      },
      {
        name: "Postgresql",
        color: "red-text-gradient",
      },
    ],
    image: hotel,
    source_code_link: "https://github.com/nandhan7/The-wild-Oasis",
    LiveLink: "https://the-wild-oasis-hotelbooking-app.vercel.app/",
    DemoLink: "https://drive.google.com/file/d/1nxXJKjccKJTD6ks9XoW3ZiSa0PBHFQyP/view"
  },
  {
    name: "Pizza Ordering App",
    description:
      "A user-friendly functionality was implemented to allow customers to browse and order pizzas from a diverse menu. Users can easily add items to their cart for review and modification before finalizing their orders, ensuring a smooth ordering experience. The system facilitates order placement by collecting and securely uploading user information for delivery and billing purposes. To enhance order accuracy and delivery efficiency, a location-gathering service was integrated to ensure precise delivery to customers' chosen addresses.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: pizza,
    source_code_link: "https://github.com/nandhan7/Pizza-Ordering-App",
    DemoLink: "https://drive.google.com/file/d/1fbuLVBbvW4OEaQcNw_25Hr3awJ5xtGuj/view",
    LiveLink: "https://pizza-ordering-app-plum.vercel.app/"
  },
  {
    name: "WorldWise App",
    description:
      "A secure login and logout system was implemented to allow users to access their accounts safely. Users can view and interact with public pages and content seamlessly. Functionality was integrated to enable users to save places from a map for future reference, enhancing their experience. Additionally, users can mark and save their favorite destinations for easy access, making it convenient to revisit their preferred locations.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Context API",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/nandhan7/WorldWise",
    DemoLink: "https://drive.google.com/file/d/1EJU1eiGQaLiRKBzyuL4_Is3i7ddruEKn/view"
  },
];

export { services, technologies, experiences, projects };
