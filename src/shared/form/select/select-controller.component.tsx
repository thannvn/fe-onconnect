/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormHelperText, MenuItem, Select, SelectProps } from '@mui/material';
import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { DEFAULT_MENU } from 'shared/const/menu-props.const';

export interface SelectItem {
  label: string;
  value: string | number;
}

interface SelectControllerProps extends SelectProps {
  name: string;
  control: Control<any>;
  options: SelectItem[];
}

function SelectController(props: SelectControllerProps) {
  const { control, name, options } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <Select MenuProps={DEFAULT_MENU} {...field} {...props} id={name}>
            {options.map((item) => (
              <MenuItem value={item.value} key={item.value}>
                {item.label}
              </MenuItem>
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
