import React from "react";

import { Checkbox as CCheckbox, CheckboxProps } from "@chakra-ui/react";

type Props = CheckboxProps & {};

export function Checkbox({ children, ...rest }: Props) {
  return <CCheckbox {...rest}>{children}</CCheckbox>;
}
