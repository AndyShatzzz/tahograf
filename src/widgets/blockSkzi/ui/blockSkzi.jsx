import styles from "./blockSkzi.module.scss";
import FeedBack from "../../feedBack/ui/feedBack";
import { useState } from "react";

export default function BlockSkzi() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <section className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <h2 className={styles.title}>Замена блока НКМ тахографа</h2>
          <p className={styles.price}>31 000 Р</p>
          <button
            className={styles.button}
            onClick={() => setIsOpenModal(true)}
          >
            Заказать
          </button>
          <p className={styles.text}>
            Замена блока НКМ тахографа производится один раз в 3 года согласно
            законодательства РФ. В услугу по замене блока НКМ тахографа входит:
          </p>
          <ul className={styles.table}>
            <li className={styles.list}>блок НКМ 2.11 (поверенный)</li>
            <li className={styles.list}>демонтаж/монтаж тахографа</li>
            <li className={styles.list}>активация/деактивация</li>
            <li className={styles.list}>поверка, калибровка</li>
            <li className={styles.list}>опломбировка</li>
            <li className={styles.list}>обновление ПО</li>
            <li className={styles.list}>диагностика тахографа</li>
            <li className={styles.list}>выгрузка данных со старого НКМ.</li>
          </ul>
        </div>
      </div>
      {isOpenModal && (
        <FeedBack isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      )}
    </section>
  );
}
