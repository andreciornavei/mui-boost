import { TextFieldProps } from "@mui/material";
import { Control, FieldValues } from "react-hook-form";
import { PatternFormatProps } from "react-number-format";
import { FormInputTextTheme } from "../form-input-text/types";

export type FormInputFormatProps = Omit<
  TextFieldProps,
  "error" | "defaultValue" | "mask"
> & {
  name: string;
  label: string;
  error?: string;
  options?: Object;
  endIcon?: JSX.Element;
  appendPrefixOnValue?: string;
  appendSuffixOnValue?: string;
  loading?: boolean;
  disabled?: boolean;
  inputSize?: "small" | "medium";
  theme?: FormInputTextTheme;
  control: Control<FieldValues, any>;
} & Omit<PatternFormatProps, "mask"> & { mask: boolean };
