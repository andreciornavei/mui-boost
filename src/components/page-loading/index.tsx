import React from "react";
import { Stack } from "@mui/material";
import { Loading } from "../loading";
import { LoadingProps } from "../loading/types";

export const PageLoading = (props: LoadingProps): JSX.Element => {
  return (
    <Stack
      flex={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Loading {...props} />
    </Stack>
  );
};
