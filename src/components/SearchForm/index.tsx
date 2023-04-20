import React, { FormEvent } from "react";

import styles from "./styles.module.scss";
import { Box } from "@chakra-ui/react";

import { RiSuitcaseLine } from "react-icons/ri";
import { Input } from "../Form/Input";
import Button from "../Form/Button";

type Props = {};

export function SearchForm({}: Props) {
  const [search, setSearch] = React.useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ search });
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <Box className={styles.form}>
        <RiSuitcaseLine color="#b9bdcf" size={24} />
        <Input
          placeholder="Title, companies, expertise or benefits"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
        <Button
          type="submit"
          backgroundColor="#28f"
          color="#fff"
          fontWeight="normal"
          fontSize="sm"
          _hover={{
            backgroundColor: "#2676d1",
          }}
        >
          Search
        </Button>
      </Box>
    </form>
  );
}
