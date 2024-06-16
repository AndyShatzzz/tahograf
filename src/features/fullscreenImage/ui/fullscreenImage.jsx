"use client";

import Image from "next/image";
import styles from "./fullscreenImage.module.scss";
import { useEffect, useRef } from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function FullscreenImage({ imgProps, setIsOpenModal }) {
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpenModal(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [setIsOpenModal]);

  return (
    <>
      <div className={styles.wrapperAbsolute}></div>
      <div className={styles.modal} ref={ref}>
        <IconButton
          className={styles.buttonClose}
          onClick={() => setIsOpenModal(false)}
        >
          <CloseIcon />
        </IconButton>
        <Image className={styles.image} src={imgProps} alt="Лицензия" />
      </div>
    </>
  );
}
