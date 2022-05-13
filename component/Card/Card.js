import React, { useState } from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import { motion } from "framer-motion";
import cls from "classnames";

const Card = (props) => {
  const { imgUrl = "/static/defaultimage.jpg", size = "medium", id } = props;

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const handleOnError = () => {
    console.log("hi error");
    setImgSrc("/static/cliford.jpg");
  };

  const scale = id === 0 ? {scaleY: 1.1} : {scale:1.1} 
  console.log("SCALE",scale)
  console.log("SCALE....",scale)

  return (
    <div className={styles.container}>
      <motion.div
        className={cls(styles.imgMotionWrapper, classMap[size])}
        whileHover={{ ...scale }}
      >
        <Image
          src={imgSrc}
          alt="img"
          layout="fill"
          className={styles.cardImg}
          onError={handleOnError}
        />
      </motion.div>
    </div>
  );
};

export default Card;
