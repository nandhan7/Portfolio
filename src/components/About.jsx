import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../HOC";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a  Data Engineer with 2 years of hands-on experience and 6 months of internship in designing and implementing scalable data pipelines, building ETL workflows, and managing cloud-based data infrastructure. I specialize in working with Python, SQL, and Azure services such as Data Factory, Data Lake, and Functions to automate complex data processes and drive data reliability, performance, and analytics.
Alongside my data engineering work, I also have experience as a Full-Stack Developer using the MERN stack,Python, where I’ve developed RESTful APIs, dynamic React.js frontends, and optimized backend systems for performance and usability. My ability to work across the data and application layers allows me to bridge the gap between raw data and actionable insights.I'm passionate about solving real-world problems through clean, efficient code — whether it's building data-driven platforms, automating pipelines, or creating intuitive user experiences.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={service.index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about"); 
