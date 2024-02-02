import React from "react";
import { InputGroup } from "react-bootstrap";
import styles from "./SwapInterface.module.css";
import Image from "next/image";

const EthDropdown = (): JSX.Element => {
  return (
    <InputGroup.Text className={styles.inputGroupText}>
      <Image src="/ctc.png" alt="Ctc" width={30} height={30}/>
      &nbsp;&nbsp;CTC
    </InputGroup.Text>
  );
};

export default EthDropdown;
