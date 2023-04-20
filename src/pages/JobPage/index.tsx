import React from "react";

import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";

type Props = {};

export function JobPage({}: Props) {
  const { id } = useParams();

  return (
    <main className={styles.main}>
      JobPage {id}
      <section className={styles.jobDetails}>
        
      </section>
    </main>
  );
}
