import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import Button from "../Form/Button";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { TbDots } from "react-icons/tb";

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

type Props = {
  currentPage: number;
  lastPage: number;
  onChange: (pageNumber: number) => void;
};

export default function JobPagination({
  currentPage,
  lastPage,
  onChange,
}: Props) {
  return (
    <Box display="flex" gap=".25rem" mx="auto" maxW="max-content">
      <IconButton
        aria-label="left double arrow icon"
        icon={<MdKeyboardDoubleArrowLeft />}
        onClick={() => onChange(1)}
      />
      {/* <IconButton
        aria-label="left arrow icon"
        icon={<AiOutlineLeft />}
        onClick={() => onChange(currentPage - 1)}
      /> */}
      <Button variant="outline" onClick={() => onChange(currentPage - 2)}>
        {currentPage - 2}
      </Button>

      <Button variant="outline" onClick={() => onChange(currentPage - 1)}>
        {currentPage - 1}
      </Button>
      <Button>{currentPage}</Button>
      <Button variant="outline" onClick={() => onChange(currentPage + 1)}>
        {currentPage + 1}
      </Button>
      <Button variant="outline" onClick={() => onChange(currentPage + 2)}>
        {currentPage + 2}
      </Button>

      {/* <IconButton
        aria-label="right arrow icon"
        icon={<AiOutlineRight />}
        onClick={() => onChange(currentPage + 1)}
      /> */}
      <IconButton
        aria-label="right double arrow icon"
        icon={<MdKeyboardDoubleArrowRight />}
        onClick={() => onChange(lastPage)}
      />
    </Box>
  );
}
