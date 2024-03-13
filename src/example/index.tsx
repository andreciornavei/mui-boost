import React from "react";
import { Form } from "./components/form";
import { List } from "./components/list";
import { Body, Divider, Container } from "./styles";

export const Example = (): JSX.Element => {
  return (
    <Body>
      <Container>
        <Form />
        <Divider />
        <List />
      </Container>
    </Body>
  );
};
