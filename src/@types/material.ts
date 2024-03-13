export {};
declare module "@mui/material" {
  interface Palette {
    muted: any;
    gray: any;
  }
  interface PaletteOptions {
    muted: any;
    gray: any;
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsSizeOverrides {
    tiny: true;
  }
}
