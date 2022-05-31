/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormHelperText,
  MenuItem,
  Select,
  SelectChangeEvent,
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
  name: string;
  control: Control<any>;
  options: SelectItem[];
  handleChange?: (event: SelectChangeEvent<unknown>) => void;
}

function SelectController(props: SelectControllerProps) {
  const { control, name, options, handleChange, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <>
          <Select
            MenuProps={DEFAULT_MENU}
            {...field}
            {...rest}
            id={name}
            onChange={(event: SelectChangeEvent<unknown>) => {
              field.onChange(event);
              if (handleChange) handleChange(event);
            }}
            error={!!fieldState.error}
          >
            {options.map((item) => (
              <MenuItem value={item.value} key={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
          {fieldState.error && (
            <FormHelperText className="labelAsterisk">
              {fieldState.error.message}
            </FormHelperText>
          )}
        </>
      )}
    />
  );
}

SelectController.defaultProps = {
  handleChange: () => {},
};

export default SelectController;
