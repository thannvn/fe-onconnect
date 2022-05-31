/* eslint-disable @typescript-eslint/no-explicit-any */
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { BaseTextFieldProps, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { Control, Controller } from 'react-hook-form';

interface TextFieldController extends BaseTextFieldProps {
  name: string;
  control: Control<any>;
}

function TextFieldController(props: TextFieldController) {
  const { control, name } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...props}
          id={name}
          error={!!fieldState.error}
          InputProps={{
            endAdornment: !!fieldState.error && (
              <InputAdornment position="end">
                <ErrorOutlineOutlinedIcon color="error" />
              </InputAdornment>
            ),
          }}
          helperText={fieldState.error ? fieldState.error.message : ''}
        />
      )}
    />
  );
}

export default React.memo(TextFieldController);
