import React from "react";
import { delay, motion } from "framer-motion";
import Coffee1 from "../../assets/coffee/coffee1.png";
import Coffee2 from "../../assets/coffee/coffee3.png";
import Coffee3 from "../../assets/coffee/coffee1.png";
const serviceData = [
  {
    id: 1,
    image: Coffee1,
    title: "Espresso",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elitt",
  },
  {
    id: 2,
    image: Coffee2,
    title: "Cappuccino",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elitt",
  },
  {
    id: 3,
    image: Coffee3,
    title: "Latte",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elitt",
  },
];
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      ease: "easeInOut",
    },
  },
};
const containerVariants = {
  hidden: { opacity: 1},

  visible: {
    opacity: 1,
    transition: {
     delay : 0.6,
     staggerChildren:0.4 
    },
  },
};
const Service = () => {
  return (
    <div className="container my-16 space-y-4">
      {/* header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            delay: 0.2,
            stiffness: 150,
            damping: 10,
          }}
          className="text-3xl font-bold text-lightGray"
        >
          Fresh and{" "}
          <span className="text-primary font-bold text-4xl">Tasty coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            delay: 0.6,
            stiffness: 150,
            damping: 10,
          }}
          className="text-sm opacity-50"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          eveniet cum velit ipsam temporibus fuga sit deleniti aliquid
          repudiandae distinctio.
        </motion.p>
      </div>
      {/*  Card section */}
      <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.8 }}
      
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8">
        {serviceData.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants} 
          >
            <img
              src={service.image}
              alt=""
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-105 transition-transform duration-300 "
            />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-primary">
                {service.title}
              </h1>
              <h1 className="text-darkGray">{service.description}</h1>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
