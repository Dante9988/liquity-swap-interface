import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../state";
import styles from "./Footer.module.css";

const Footer = () => {
  const { address } = useSelector(selectUser);

  return (
    <footer className={styles.footer}>
      <span id={styles.creator}>Made by Anvar Baltakhojayev</span>
      <span id={styles.address}>{address}</span>
    </footer>
  );
};

export default Footer;
