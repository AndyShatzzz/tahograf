"use client";

import CloseIcon from "@mui/icons-material/Close";
import styles from "./articleTaho.module.scss";
import { useEffect } from "react";
import { IconButton } from "@mui/material";
import { useLayoutClickClose } from "../../../features/useLayoutClickClose/hooks/useLayoutClickClose";
import Link from "next/link";

export default function ArticleTaho() {
  const [layoutClickClose, ref] = useLayoutClickClose();

  useEffect(() => {
    layoutClickClose();
  }, [layoutClickClose]);

  return (
    <>
      <div className={styles.wrapperAbsolute}></div>
      <div className={styles.modal} ref={ref}>
        <Link href="/articles">
          <IconButton className={styles.buttonClose}>
            <CloseIcon />
          </IconButton>
        </Link>
        <h3 className={styles.title}>Установка тахографов</h3>
        <p className={styles.subtitle}>
          Установка цифровых тахографов требует от специалистов наличия
          профессиональных знаний и навыков. {`ООО "ТАХОДРАЙВЕР"`} занимается
          установкой тахографов в Липецке, Липецкой области уже в течение более
          10 лет. Тахограф можно установить на любой тип транспортного средства.
          Процесс установки и требования к тахографам регулируются нормативными
          актами. Установку тахографов могут выполнять только сертифицированные
          мастерские, которые можно найти в реестре на сайте Минтранса.
          {`ООО "ТАХОДРАЙВЕР"`} имеет все необходимые сертификаты, документы а
          также оборудование для правильной и качественной установки любого
          тахографа любого типа. {`ООО "ТАХОДРАЙВЕР"`} включен в реестр
          сертифицированных центров Минтранса по установке тахографов. Поскольку
          установка тахографа – это сложная задача, её следует выполнять в
          специализированных мастерских, имеющих соответствующее разрешение.
          Перед установкой проводится обязательная проверка устройства
          сотрудниками государственной метрологической службы, чтобы
          удостовериться в его исправности и готовности к эксплуатации. На
          исправное оборудование наносят специальное клеймо. Установка включает
          два этапа: монтаж тахографа на транспортное средство и его активацию.
        </p>
        <h3 className={styles.title}>
          Установка тахографа на приборной панели ТС
        </h3>
        <p className={styles.subtitle}>
          Тахограф должен быть размещен в зоне, где водитель сможет его легко
          видеть. Для установки тахографа используется место формата 1DIN. Если
          в транспортном средстве нет готового места для тахографа, его
          необходимо создать. Обычно устанавливается пластиковый кожух
          заводского изготовления.
        </p>
        <h3 className={styles.title}>
          Прокладка питающего кабеля от источника питания до места установки
          тахографа
        </h3>
        <p className={styles.subtitle}>
          Питание тахографа должно быть организовано так, чтобы предотвратить
          его случайное отключение. Отключение тахографа допускается только во
          время ремонта автомобиля, при этом обычно отключается аккумуляторная
          батарея транспортного средства. Кабель для подключения тахографа
          прячется в защитный пластиковый гофрированный рукав. Для надежной
          работы тахографа рекомендуется использовать кабель с сечением 0,75
          кв/мм. Концы кабеля обжимают клеммами с помощью специального
          инструмента. Использование «скруток» не допускается. Питающие линии
          защищены предохранителями с номиналом 5А.
        </p>
        <h3 className={styles.title}>
          Прокладка сигнального кабеля до датчика скорости
        </h3>
        <p className={styles.subtitle}>
          Сигнальный кабель проложен от датчика скорости до тахографа и
          изготавливается из кабеля марки ПВС 4х0,75 кв/мм, который предназначен
          для использования на открытых участках и имеет двойную изоляцию. Если
          требуется соединить несколько отрезков кабеля, стыки выполняются с
          помощью специальных разъемов, которые обеспечивают возможность
          пломбирования соединений.
        </p>
        <h3 className={styles.title}>Монтаж датчика скорости</h3>
        <p className={styles.subtitle}>
          На некоторых автомобилях сигнал от датчика скорости может не
          соответствовать требованиям тахографа (например, форма сигнала или
          частота импульсов может быть неподходящей). В таких случаях необходимо
          заменить датчик на подходящий аналог.
        </p>
        <h3 className={styles.title}>
          Согласование коэффициентов скорости спидометра с тахографом
        </h3>
        <p className={styles.subtitle}>
          На многих современных автомобилях спидометр и счетчики суточного и
          общего пробега используют данные от системы АБС. Тахограф же получает
          информацию о пробеге от датчика скорости и системы ГНСС. Допустимая
          заводская погрешность спидометра, которая может достигать 10%, иногда
          приводит к расхождению в показаниях пробега на одометре и тахографе.
          Чтобы избежать таких расхождений, необходимо проводить калибровку
          оборудования. В некоторых случаях может потребоваться замена
          спидометра автомобиля.
        </p>
        <h3 className={styles.title}>Активация Блока СКЗИ/НКМ тахографа</h3>
        <p className={styles.subtitle}>
          Активация тахографов осуществляется на специализированных
          автоматизированных рабочих местах (АРМ), которые оборудованы в
          тахографических мастерских, работающих с тахографами, оснащенными
          блоком СКЗИ, и имеющими лицензию ФСБ России. АРМ представляет собой
          персональный компьютер, подключенный к серверам ФБУ «Росавтотранс»
          через защищенные каналы связи и оснащенный устройством для чтения
          смарт-карт. Оператор АРМ вводит информацию о владельце транспортного
          средства и самом транспортном средстве в электронную анкету на
          компьютере. Затем оператор вставляет заполненную анкету в тахограф,
          где блок СКЗИ подписывает данные и передает уникальный номер на карту
          мастерской. Оператор переносит карту в устройство для чтения
          смарт-карт на АРМ, проверяет данные и отправляет электронный запрос на
          формирование сертификата электронно-цифровой подписи тахографа на
          сервер ЗАО «Атлас-карт». На этом этапе осуществляется проверка данных,
          таких как уникальность номера тахографа, его наличие в списке ФБУ
          «Росавтотранс», уникальность номера СКЗИ/НКМ и его соответствие
          данному тахографу, а также отсутствие предыдущих установок тахографов
          с СКЗИ на тот же автомобиль. После проверки формируется сертификат ЭЦП
          для блока СКЗИ тахографа, который отправляется на АРМ мастерской по
          защищенному каналу связи. Оператор переносит этот сертификат в
          тахограф с помощью карты мастерской. Сертификат ЭЦП для блока СКЗИ
          действителен три года с момента выдачи, что определяет срок замены
          блока СКЗИ. После этого тахограф и блок СКЗИ считаются
          активированными.
        </p>
        <h3 className={styles.title}>
          Опломбирование тахографа и его подключений проводится для
          предотвращения несанкционированного вмешательства в его работу.
        </h3>
        <h3 className={styles.title}>
          Оформление Акта ввода в эксплуатацию контрольного устройства
        </h3>
        <p className={styles.subtitle}>
          По окончании установки выдается сертификат и устанавливается
          калибровочная табличка на транспортном средстве.
        </p>
      </div>
    </>
  );
}
