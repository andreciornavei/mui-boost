import React from "react";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  FormInputAutocomplete,
  FormInputCurrency,
  FormInputDatePicker,
  FormInputDateRangePicker,
  FormInputFormat,
  FormInputPhone,
  FormInputPickPeriod,
  FormInputPinCode,
  FormInputText,
} from "../../lib";

export const Form = (): JSX.Element => {
  const [formdata, setFormdata] = useState<Record<string, unknown>>({});
  const { control, handleSubmit } = useForm<Record<string, unknown>>({});
  return (
    <Stack p={3} spacing={3} flex={1}>
      <div>
        <Typography>{JSON.stringify(formdata)}</Typography>
      </div>
      <Divider />
      <form onSubmit={handleSubmit(setFormdata)}>
        <Stack direction="column" spacing={2}>
          <FormInputText
            control={control}
            name="form-input-text"
            label="form-input-text"
          />
          <FormInputCurrency
            control={control}
            size="small"
            name="form-input-currency"
            label="form-input-currency"
          />
          <FormInputFormat
            control={control}
            mask={true}
            format="###.###.###-##"
            name="form-input-format"
            label="form-input-format"
          />
          <FormInputPhone
            control={control}
            name="form-input-phone"
            label="form-input-phone"
          />
          <FormInputAutocomplete
            size="small"
            control={control}
            name="form-input-autocomplete"
            label="form-input-autocomplete"
            loadOptions={() =>
              new Promise((resolve) => {
                resolve([
                  { key: "option-a", value: "Option A" },
                  { key: "option-b", value: "Option B" },
                ]);
              })
            }
          />
          <Stack alignItems="flex-start">
            <FormInputPinCode
              size="small"
              control={control}
              name="form-input-pin-code"
            />
          </Stack>
          <FormInputPickPeriod
            size="small"
            control={control}
            name="form-input-pick-period"
          />
          <FormInputDatePicker
            size="small"
            control={control}
            label="form-input-date-picker"
            name="form-input-date-picker"
          />
          <FormInputDateRangePicker
            size="small"
            control={control}
            label="form-input-date-range"
            name="form-input-date-range"
          />
          <Button type="submit" size="medium" variant="contained">
            Submit Form
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};
