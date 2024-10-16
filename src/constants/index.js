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
    title: "Graduate Software Developer",
    company_name: "Atkins Realis",
    icon: atkins,
    iconBg: "#E6DEDD",
    date: "August 2023 - Present",
    points: [
      "Developed frontend pages using React.js and Redux and backend APIs with Node.js and Express.js for seamless user experience and efficient data processing",
      "Automated data workflows using Python, NumPy, and Pandas, enhancing efficiency and accuracy with data visualization through Matplotlib and Seaborn, resulting in significant cost savings",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Configured Azure Pipelines for CI/CD and optimized data handling with Advanced SQL stored procedures.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Atkins Realis",
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
