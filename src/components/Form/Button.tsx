import React from "react";

import { Button as CButton, ButtonProps } from "@chakra-ui/react";

type Props = ButtonProps & {};

export default function Button({ children, variant, ...rest }: Props) {
  if (variant == "outline") {
    return (
      <CButton
        bg="transparent"
        color="gray.500"
        fontWeight="normal"
        fontSize="sm"
        variant={variant}
        border="2px"
        borderColor="gray.500"
        _hover={{
          color: "blue.500",
          borderColor: "blue.500",
        }}
        {...rest}
      >
        {children}
      </CButton>
    );
  }

  return (
    <CButton
      bg="brand.500"
      color="blue.50"
      fontWeight="normal"
      fontSize="sm"
      variant={variant}
      _hover={{
        bg: "blue.400",
      }}
      {...rest}
    >
      {children}
    </CButton>
  );
}
