import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import map from "lodash/map";
import { categories } from "@/constants/categories";
import Link from "next/link";
const Categories = () => {
  return (
    <div className={styles.Container}>
      {map(categories, (cat) => (
        <div className={styles.Category}>
          <Image
            objectFit="cover"
            quality={100}
            layout="fill"
            src={cat.img}
            alt="category"
          />
          <div className={styles.categoryDescContainer}>
            <h4>{cat.description}</h4>
            <Link href={`/categories/${cat.id}`}>
              View Products{" "}
              <i>
                <FiArrowRight />
              </i>
            </Link>
          </div>
        </div>
      ))}
      {/* <div className={styles.Category}>
                <Image src="" alt='category'/>
                <h4></h4>
                <a>View Products <FiArrowRight/></a>
            </div>
            <div className={styles.Category}>
                <Image src="" alt='category'/>
                <h4></h4>
                <a>View Products <FiArrowRight/></a>
            </div>
            <div className={styles.Category}>
                <Image src="" alt='category'/>
                <h4></h4>
                <a>View Products <FiArrowRight/></a>
            </div> */}
    </div>
  );
};

export default Categories;
