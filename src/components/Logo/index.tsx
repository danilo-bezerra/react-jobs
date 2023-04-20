import React from "react";

import styles from "./styles.module.scss";

type Props = {};

export function Logo({}: Props) {
  return (
    <div className={styles.logo}>
      React <span>Jobs</span>
    </div>
  );
}
