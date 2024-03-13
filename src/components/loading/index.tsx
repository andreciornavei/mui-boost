import React from "react";
import { LoadingProps } from "./types";
import { CircularProgress, Stack, Typography } from "@mui/material";

export const Loading = ({ message }: LoadingProps) => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <CircularProgress size={16} thickness={5} />
      <Typography variant="caption" fontWeight="bold">
        {message || "Loading..."}
      </Typography>
    </Stack>
  );
};
