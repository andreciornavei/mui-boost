import { styled } from "@mui/material";

export const Body = styled("div")`
  display: flex;
  min-height: 100%;
  flex-direction: row;
`;

export const Divider = styled("div")`
  width: 1px;
  background-color: ${({ theme }) => theme.palette.divider};
`;

export const Container = styled("div")`
  flex: 1;
  margin: 0 auto;
  max-width: 800px;
  min-wifth: 800px;
  background-color: ${({ theme }) => theme.palette.background.default};
`;
