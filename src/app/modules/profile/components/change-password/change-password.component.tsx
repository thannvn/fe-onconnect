import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid, Typography } from '@mui/material';
import AuthenticationAPI from 'app/api/authentication.api';
import { useAppDispatch } from 'app/services/redux/hooks';
import { logout } from 'app/services/redux/slices/user-slice';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import Loading from 'shared/blocks/loading/loading.component';
import addToast from 'shared/blocks/toastify/add-toast.component';
import { Message } from 'shared/const/message.const';
import TextFieldController from 'shared/form/text-field/text-field-controller.component';
import * as yup from 'yup';
import './change-password.style.scss';

interface ChangePasswordForm {
  currentPassword: string;
  newPassword: string;
}

function ChangePassword() {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const schema = useRef(
    yup.object().shape({
      currentPassword: yup.string().required('Current password is require'),
      newPassword: yup.string().required('New password is require'),
    })
  ).current;

  const { control, handleSubmit } = useForm<ChangePasswordForm>({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ChangePasswordForm) => {
    try {
      setLoading(true);
      await AuthenticationAPI.changePassword(
        data.currentPassword,
        data.newPassword
      );
      addToast({ message: Message.CHANGE_PASSWORD_SUCCESS, type: 'success' });
      dispatch(logout());
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="change-password">
      <Loading open={loading} />

      <Typography textAlign="center" className="font--24b">
        Change password
      </Typography>

      <Grid container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid item xs={12}>
            <Typography className="mt--S mb--XXS require-field">
              Current password
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextFieldController
              name="currentPassword"
              control={control}
              className="onc-text-field --width-100"
              placeholder="Enter current password"
              type="password"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography className="mt--S mb--XXS require-field">
              New password
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextFieldController
              name="newPassword"
              control={control}
              className="onc-text-field --width-100"
              placeholder="Enter new password"
              type="password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              className="onc-button --no-transform --width-100 mt--S"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
        </form>
      </Grid>
    </div>
  );
}

export default ChangePassword;
