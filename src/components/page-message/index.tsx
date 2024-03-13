import React from "react";
import { PageMessageProps } from "./types";
import { Stack, Typography, useTheme } from "@mui/material";

export const PageMessage = (props: PageMessageProps): JSX.Element => {
  const { palette } = useTheme();
  return (
    <Stack
      flex={1}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Stack
        flex={1}
        spacing={2}
        maxWidth={300}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <props.icon size={64} weight="duotone" color={palette.primary.main} />
        <Typography variant="body1" fontWeight="bold">
          {props.title}
        </Typography>
        <Typography variant="body2" textAlign="center">
          {props.message}
        </Typography>
      </Stack>
    </Stack>
  );
};
