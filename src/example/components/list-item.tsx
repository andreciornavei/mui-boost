import React from "react";
import { ListItemType } from "../types";
import { Stack, Typography, styled } from "@mui/material";

type Props = {
  item: ListItemType;
};

const StackStyle = styled(Stack)`
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[200]};
`;

export const FlatlistItem = ({ item }: Props): JSX.Element => {
  return (
    <StackStyle py={1}>
      <Typography>{item.name}</Typography>
      <Typography>{item.url}</Typography>
    </StackStyle>
  );
};
