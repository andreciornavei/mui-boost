import {
  FormInputTextSizes,
  FormInputTextTheme,
} from "../form-input-text/types";
import { Control, FieldValues } from "react-hook-form";

export type FormInputDatePickerProps = {
  name: string;
  label: string;
  error?: string;
  size?: FormInputTextSizes;
  theme?: FormInputTextTheme;
  endIcon?: JSX.Element;
  control: Control<FieldValues, any>;
};
