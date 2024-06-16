import Image from "next/image";
import image1 from "../images/image1.svg";
import image2 from "../images/image2.svg";
import image3 from "../images/image3.svg";
import image4 from "../images/image4.svg";
import image5 from "../images/image5.svg";

import styles from "./whyMe.module.scss";

export default function WhyMe() {
  const arrData = [
    {
      image: image2,
      title: "Сертифицированный центр",
      _id: "6bdc2c2b-d8cf-41b0-8ee3-306beb3f28c7",
    },
    {
      image: image3,
      title: "Выезд на удобное Вам место",
      _id: "6bdc2c2b-d8cf-41b0-8ee3-306beb3f28c7",
    },
    {
      image: image1,
      title: "Оборудование в наличии",
      _id: "6bdc2c2b-d8cf-41b0-8ee3-306beb3f28c7",
    },
    {
      image: image5,
      title: "Квалифицированный персонал",
      _id: "6bdc2c2b-d8cf-41b0-8ee3-306beb3f28c7",
    },
    {
      image: image4,
      title: "Гарантия на работу",
      _id: "6bdc2c2b-d8cf-41b0-8ee3-306beb3f28c7",
    },
  ];
  return (
    <section className={styles.container}>
      <div className={styles.contentContainer}>
        {arrData &&
          arrData.map((item) => (
            <div className={styles.wrapper} key={item._id}>
              <Image className={styles.img} src={item.image} alt={item.title} />
              <p className={styles.subtitle}>{item.title}</p>
            </div>
          ))}
      </div>
    </section>
  );
}
