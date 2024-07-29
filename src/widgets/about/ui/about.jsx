import styles from "./about.module.scss";
import car from "../images/main-1.webp";
import car2 from "../images/main-2.webp";
import car3 from "../images/main-3.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reactSlick.css";
import Image from "next/image";

export default function About() {
  const arrData = [
    {
      img: car,
      title: "УСТАНОВКА ТАХОГРАФОВ В ЛИПЕЦКЕ И ЛИПЕЦКОЙ ОБЛАСТИ",
      _id: "8dbaf3ca-f523-4613-a06b-437eeb79e61e",
    },
    {
      img: car2,
      title:
        "ОФОРМЛЕНИЕ КАРТЫ ВОДИТЕЛЯ, ЗАМЕНА БЛОКА НКМ В ЛИПЕЦКЕ И ЛИПЕЦКОЙ ОБЛАСТИ",
      _id: "df710270-2db0-4345-bca5-cfe4bed46c70",
    },
    {
      img: car3,
      title:
        "ООО ТАХОДРАЙВЕР ОСУЩЕСТВЛЯЕТ ОПЕРАТИВНЫЙ ВЫЕЗД НА МЕСТО, А ТАКЖЕ ДАЕТ ГАРАНТИЮ НА РАБОТУ",
      _id: "514458a6-115b-4cc6-8b1a-3c5f28cc6273",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    swipeToSlide: true,
    className: "containerAbout",
    adaptiveHeight: true,
  };

  return (
    <section>
      <div className={styles.imageContainer}>
        <Slider {...settings}>
          {arrData.map((item) => (
            <>
              <Image
                key={item._id}
                className={styles.container}
                src={item.img}
                alt="Картинка"
              />
              <h1 className={styles.title}>{item.title}</h1>
            </>
          ))}
        </Slider>
      </div>
    </section>
  );
}
