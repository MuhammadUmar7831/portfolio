import { useState } from "react";
import { motion } from "framer-motion";

const Burger = (props) => {
  const { isOpen, handleClick } = props;

  return (
    <button
      className="border-nonecursor-pointer focus:outline-none"
      onClick={handleClick}
    >
      <motion.div
        className={`w-12 bg-black dark:bg-white mt-2`}
        style={{ height: "1px" }}
        animate={{
          rotate: isOpen ? 45 : 0,
          translateY: isOpen ? 5 : 0,
        }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className={`w-12 bg-black dark:bg-white mt-2`}
        style={{ height: "1px" }}
        animate={{
          rotate: isOpen ? -45 : 0,
          translateY: isOpen ? -5 : 0,
        }}
        transition={{ duration: 0.4 }}
      />
    </button>
  );
};

export default Burger;
