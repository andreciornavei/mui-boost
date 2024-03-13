import React from "react";
import moment from "moment";
import { theme } from "../../theme";
import { Controller } from "react-hook-form";
import { FormInputDatePickerProps } from "./types";
import { FormInputDatePickerStyles } from "./styles";
import { CalendarBlank, X } from "@phosphor-icons/react";
import { parseAndFormatDate } from "../../utils/formatter";
import { InputAdornment, Popover, TextField, IconButton } from "@mui/material";

export function FormInputDatePicker({
  name,
  size = "small",
  control,
  ...props
}: FormInputDatePickerProps) {
  // <!-- define popopver controller -->
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => setAnchorEl(null);
  const handleOpen = (event: any) => setAnchorEl(event.currentTarget);

  const open = Boolean(anchorEl);
  const id = open ? "daterange-popover" : undefined;

  const formatDisplay = (date: string) => {
    return parseAndFormatDate(date, {
      fromPattern: "YYYY-MM-DD",
      toPattern: "DD/MM/YYYY",
      default: date || "",
    });
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <>
          <TextField
            inputRef={ref}
            name={name}
            fullWidth
            size={size}
            color="primary"
            label={props.label}
            value={formatDisplay(value)}
            onBlur={onBlur}
            error={Boolean(props.error)}
            helperText={props.error}
            FormHelperTextProps={{
              sx: { display: "block", mx: 0, fontSize: 10 },
            }}
            sx={{
              backgroundColor:
                props.theme === "light"
                  ? theme.palette.common.white
                  : theme.palette.gray.light,
              mb: props.error && 2,
            }}
            onClick={handleOpen}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ marginRight: "-8px" }}>
                  {value?.length > 0 ? (
                    <IconButton size="small" onClick={() => onChange("")}>
                      <X fontSize={14} color={theme.palette.muted.main} />
                    </IconButton>
                  ) : (
                    <IconButton size="small">
                      <CalendarBlank
                        fontSize={14}
                        color={theme.palette.muted.main}
                      />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={() => handleClose()}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            PaperProps={{
              elevation: 0,
              sx: {
                marginTop: "8px !important",
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px !important",
              },
            }}
          >
            <FormInputDatePickerStyles
              showPreview={false}
              showDateDisplay={false}
              showMonthAndYearPickers={false}
              weekdayDisplayFormat="EEEEE"
              onChange={(date) => {
                onChange(moment(date).format("YYYY-MM-DD"));
                handleClose();
              }}
            />
          </Popover>
        </>
      )}
    />
  );
}
