import React, { useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { SearchForm } from "../../components/SearchForm";
import { JobItem } from "../../components/JobItem";
import { Radio } from "../../components/Form/Radio";
import { Checkbox } from "../../components/Form/Checkbox";
import { Input } from "../../components/Form/Input";
import { Box, IconButton } from "@chakra-ui/react";
import { API_KEY, APP_ID, api } from "../../services/api";
import { JobsDTO } from "../../dtos/JobsDTO";
import { JobItemList } from "../../components/JobItemList";
import Button from "../../components/Form/Button";
import JobPagination from "../../components/Job/JobPagination";

type Props = {};

export function HomePage({}: Props) {
  const [jobs, setJobs] = useState<JobsDTO>();
  const [currentPage, setCurrentPage] = useState(1);

  const lastPage = jobs?.results ? Math.ceil(jobs?.count / 10) : 0;

  function handleChangePage(pageNumber: number) {
    if (pageNumber >= 1 && pageNumber <= lastPage) {
      setCurrentPage(pageNumber);
    }
  }

  console.log({ count: jobs?.count, lastPage });

  async function getJobs() {
    try {
      const res = await api.get<JobsDTO>(
        `/search/${currentPage}?app_id=${APP_ID}&app_key=${API_KEY}`
      );
      console.log(res.data);
      setJobs(res.data);
    } catch {
      console.log("Error on fetch");
    }
  }

  useEffect(() => {
    getJobs();
  }, [currentPage]);

  return (
    <main className={styles.container}>
      <SearchForm />
      <section className={styles.resultsContainer}>
        <form className={styles.filterForm}>
          <Checkbox>Full time</Checkbox>

          <Input placeholder="City, state, zip code or country" />

          <Radio>London</Radio>
          <Radio>Amsterdam</Radio>
          <Radio>New York</Radio>
          <Radio>Berlin</Radio>
        </form>
        {jobs && (
          <section className={styles.jobs}>
            <JobItemList jobs={jobs!} />
            <JobPagination
              currentPage={currentPage}
              lastPage={lastPage}
              onChange={handleChangePage}
            />
          </section>
        )}
      </section>
    </main>
  );
}
