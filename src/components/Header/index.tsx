import React from "react";

import styles from "./styles.module.scss";
import { Logo } from "../Logo";

type Props = {};

export function Header({}: Props) {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}
