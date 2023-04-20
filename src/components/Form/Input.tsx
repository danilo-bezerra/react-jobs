import React from "react";

import { Box, Input as CInput, InputProps } from "@chakra-ui/react";

type Props = InputProps & {};

export function Input({ ...rest }: Props) {
  return (
    <Box w="full">
      <CInput
        fontSize="sm"
        backgroundColor="transparent"
        w="full"
        bg="#fff"
        _focus={{
          outline: "none",
          border: "none",
        }}
        _hover={{
          outline: "none",
          border: "none",
        }}
        autoFocus
        _dark={{
          color: "gray.500",
          _placeholder: {
            color: "gray.300",
          },
        }}
        {...rest}
      />
    </Box>
  );
}
