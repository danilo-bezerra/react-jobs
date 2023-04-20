import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

type Props = TextProps & {};

export function ContractTime({ children, ...rest }: Props) {
  return (
    <Text
      as="span"
      fontSize="0.75rem"
      fontFamily="Roboto"
      border="2px"
      borderColor="#334680"
      padding=".125rem"
      paddingLeft=".5rem"
      paddingRight=".5rem"
      borderRadius=".25rem"
      {...rest}
    >
      {children}
    </Text>
  );
}
