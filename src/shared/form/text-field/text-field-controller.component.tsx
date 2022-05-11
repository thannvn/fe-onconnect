import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { BaseTextFieldProps, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { Control, Controller } from 'react-hook-form';

interface TextFieldController extends BaseTextFieldProps {
  controllerName: string;
  control: Control<any>;
}

function TextFieldController(props: TextFieldController) {
  const { control, controllerName } = props;
  return (
    <Controller
      name={controllerName}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...props}
          id={controllerName}
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
