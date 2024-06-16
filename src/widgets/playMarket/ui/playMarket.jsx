import Image from "next/image";
import googlePlay from "../image/googlePlay.png";
import ruStore from "../image/ruStore.svg";
import styles from "./playMarket.module.scss";

export default function PlayMarket() {
  return (
    <section className={styles.container}>
      <div className={styles.contentContainer}>
        <h2 className={styles.title}>
          Мобильное приложение &#34;Мой тахограф АТОЛ&#34;
        </h2>
        <a
          className={styles.link}
          href="https://play.google.com/store/apps/details?id=ru.atoldrive.mytachograph&hl=ru"
          target="blank"
        >
          <Image
            className={styles.img}
            src={ruStore}
            alt="Картинка гугл плей"
          />
        </a>
        <p className={styles.text}>Управляйте тахографом со смартфона</p>
      </div>
    </section>
  );
}
