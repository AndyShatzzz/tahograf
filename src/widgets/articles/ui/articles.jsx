import { Container } from "../../../shared/styledComponent/ui/imageAnimation";
import { Title } from "../../../shared/styledComponent/ui/titleAnimation";
import styles from "./articles.module.scss";
import bgCar from "../../../shared/images/bgCar.webp";
import tahCard from "../images/tahCard.webp";
import addTaho from "../images/addTaho.webp";
import tahoShim from "../images/tahoShim.webp";
import tahoCheck from "../images/brokenTaho.webp";
import analog from "../images/analog.webp";
import loadingTaho from "../images/loadingTaho.webp";
import Image from "next/image";
import Link from "next/link";

export default function Articles() {
  return (
    <>
      <Container
        className={styles.container}
        style={{
          background: `linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ), url(${bgCar.src})`,
        }}
      >
        <Title style={{ marginBottom: "40px" }}>Статьи</Title>
        <div className={styles.mainContainer}>
          <Link href="/articles/aboutcard" className={styles.articleContainer}>
            <Image className={styles.img} src={tahCard} alt="Карта водителя" />
            <h2 className={styles.gridTitle}>Карты для тахографов</h2>
          </Link>
          <Link
            href="/articles/installtaho"
            className={styles.articleContainer}
          >
            <Image
              className={styles.img}
              src={addTaho}
              alt="Установка тахографа"
            />
            <h2 className={styles.gridTitle}>Установка тахографов</h2>
          </Link>
          <Link href="/articles/tahoshim" className={styles.articleContainer}>
            <Image className={styles.img} src={tahoShim} alt="Тахошайбы" />
            <h2 className={styles.gridTitle}>Что такое Тахошайбы</h2>
          </Link>
          <Link href="/articles/brokentaho" className={styles.articleContainer}>
            <Image
              className={styles.img}
              src={tahoCheck}
              alt="Неисправность тахографа"
            />
            <h2 className={styles.gridTitle}>Неисправность тахографа</h2>
          </Link>
          <Link href="/articles/analogtaho" className={styles.articleContainer}>
            <Image
              className={styles.img}
              src={analog}
              alt="Аналоговыq тахограф"
            />
            <h2 className={styles.gridTitle}>Аналоговые тахографы</h2>
          </Link>
          <Link
            href="/articles/loadingtaho"
            className={styles.articleContainer}
          >
            <Image
              className={styles.img}
              src={loadingTaho}
              alt="Выгрузка данных"
            />
            <h2 className={styles.gridTitle}>Требования к выгрузке данных</h2>
          </Link>
        </div>
      </Container>
    </>
  );
}
