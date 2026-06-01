import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import BgImage from "../../assets/bg-slate.png";
import CoffeeMain from "../../assets/black.png";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";
import { useState } from "react";
const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  console.log("sidebar-->>", sidebar);
  return (
    <main style={bgImage}>
      <section className="relative min-h-[750px] w-full">
        <div className="container">
          {/* NavBar Section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* Hero Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            {/* text section content */}
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  delay: 1,
                  stiffness: 100,
                  damping: 10,
                }}
                className="text-7xl leading-tight  font-bold ml-14"
              >
                Black Tumber
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  delay: 1.2,
                  stiffness: 100,
                  damping: 10,
                }}
                className="relative"
              >
                <div className="relative z-10 space-y-6">
                  <h1 className="text-2xl ">Black Lifestyle, lover</h1>
                  <h1 className="text-sm opacity-55 leading-loose ">
                    Lorem ih1sum dolor sit amet consectetur adipisicing elit.
                    Soluta labore iusto vel, in dolore atque assumenda aperiam
                    sapiente ratione modi alias ipsum aspernatur hic natus nemo
                    deserunt officia magnam
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[220px] bg-gray-700/25"></div>
              </motion.div>
            </div>
            {/* Hero Image content */}
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.4,
                  stiffness: 100,
                  damping: 10,
                }}
                src={CoffeeMain}
                alt="Coffee"
                className="relative z-40 h-[500px] img-shadow"
              />
              {/* orange ring circel  */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.8,
                  stiffness: 100,
                  damping: 10,
                }}
                className="absolute top-10 -right-20 border-primary rounded-full h-[200px] w-[200px] border-[20px] z-10"
              ></motion.div>
              {/* big text section
                        - */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  delay: 0.8,
                  stiffness: 100,
                  damping: 10,
                }}
                className="absolute -top-20 left-[200px] z-[1] "
              >
                <h1 className="text-[140px] scale-150 font-bold text-darkGray/40 leading-none">
                  Black Tumber
                </h1>
              </motion.div>
            </div>
            {/* Third div content */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                delay: 1.2,
                stiffness: 100,
                damping: 10,
              }}
              className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28"
            >
              <h1 className=" opacity-0 text-7xl leading-tight  font-bold ml-14">
                Black Tumber
              </h1>
              <div className="relative">
                <div className=" relative z-10 space-y-6">
                  <h1 className="text-2xl ">Black Tumber</h1>
                  <h1 className="text-sm opacity-55 leading-loose ">
                    Lorem ih1sum dolor sit amet consectetur adipisicing elit.
                    Soluta labore iusto vel, Soluta labore iusto
                  </h1>
                </div>
                <div className="absolute -top-6 -right-10 w-[250px] h-[220px] bg-darkGray/50"></div>
              </div>
            </motion.div>
          </div>
        </div>
        {sidebar && (
          <div className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-10">
            <div className="w-full h-full flex justify-center  items-center">
              <div className="flex flex-col  justify-center  items-center gap-6 text-white">
                {/* Line */}
                <div className="w-[1px] h-[70px] bg-white"></div>
                {/* social media icons */}
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaFacebookF className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaTwitter className="text-2xl" />
                </div>
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="w-[1px] h-[70px] bg-white"></div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Hero;
