import {
  FormHelperText,
  MenuItem,
  MenuProps,
  Select,
  SelectProps,
} from '@mui/material';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { DEFAULT_MENU } from 'shared/const/menu-props.const';

export interface SelectItem {
  label: string;
  value: string | number;
}

interface SelectControllerProps extends SelectProps {
  controllerName: string;
  control: Control<any>;
  options: SelectItem[];
}

function SelectController(props: SelectControllerProps) {
  const { control, controllerName, options } = props;

  return (
    <Controller
      name={controllerName}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <Select
            {...field}
            {...props}
            id="phoneCode"
            className="onc-select width-100"
            labelId="select-phone"
          >
            {options.map((item) => (
              <MenuItem value={item.value}>{item.label}</MenuItem>
            ))}
          </Select>
          {fieldState.error && (
            <FormHelperText>{fieldState.error.message}</FormHelperText>
          )}
        </>
      )}
    />
  );
}

export default SelectController;
