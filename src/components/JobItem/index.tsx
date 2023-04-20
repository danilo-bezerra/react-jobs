import React from "react";

import styles from "./styles.module.scss";

import { GiEarthAfricaEurope, GiTimeBomb } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import { JobsDTO } from "../../dtos/JobsDTO";
import { JobDTO } from "../../dtos/JobDTO";
import { NavLink } from "react-router-dom";
import { ContractTime } from "../Job/ContractTime";

type Props = {
  job: JobDTO;
};

export function JobItem({ job }: Props) {
  return (
    <NavLink to={`job/${job.id}`} className={styles.container}>
      {/* <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSWSxsVpAmqb_T7CLGolJ193Bw9xh7X7r0yQ&usqp=CAU"
        alt=""
      /> */}
      <div className={styles.description}>
        <strong className={styles.business}>{job.company.display_name}</strong>
        <p className={styles.title}>{job.title}</p>

        <div className={styles.infos}>
          {job.contract_time && (
            <ContractTime>
              {job.contract_time.replaceAll("_", " ")}
            </ContractTime>
          )}

          <div className={styles.jobAttributes}>
            <span className={styles.jobAttribute}>
              <GiEarthAfricaEurope size={12} /> {job.location.display_name}
            </span>
            <span className={styles.jobAttribute}>
              <IoMdTime size={12} /> 5 days ago
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
