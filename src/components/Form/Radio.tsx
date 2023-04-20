import React from "react";

import { Radio as CRadio, RadioProps } from "@chakra-ui/react";

type Props = RadioProps & {};

export function Radio({ children, ...rest }: Props) {
  return <CRadio {...rest}>{children}</CRadio>;
}
