import React from "react";
import { Stack, Typography } from "@mui/material";
import { FlatList } from "../../lib";
import { ListItemType } from "../types";
import { FlatlistItem } from "./list-item";

export const List = (): JSX.Element => {
  const handleLoadData = (
    limit: number = 10,
    cursor: string | number | undefined
  ) => {
    return new Promise<Array<unknown>>((resolve) => {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${cursor}`)
        .then((res) => res.json())
        .then((pagination) => resolve(pagination?.results || []))
        .catch(() => resolve([]));
    });
  };

  return (
    <Stack flex={1} p={3} spacing={2}>
      <Typography variant="h6">FlatList</Typography>
      <FlatList
        emptyTitle="Empty"
        cursorMode="offset"
        emptyMessage="This is an empty list"
        itemKey={(item: ListItemType) => item.name}
        renderItem={(item: ListItemType) => <FlatlistItem item={item} />}
        handleFetch={handleLoadData}
      />
    </Stack>
  );
};
