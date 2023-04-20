import React from "react";

import styles from "./styles.module.scss";

import { GiEarthAfricaEurope, GiTimeBomb } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import { JobsDTO } from "../../dtos/JobsDTO";
import { JobItem } from "../JobItem";

type Props = {
  jobs: JobsDTO;
};

export function JobItemList({ jobs }: Props) {
  return (
    <ul className={styles.container}>
      {jobs.results.map((job) => (
        <JobItem key={job.id} job={job}/>
      ))}
    </ul>
  );
}
