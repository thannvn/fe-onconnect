import { Container, Link, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import './register-free.style.scss';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router';

function RegisterFree() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl" className="register-free">
      <Helmet>
        <title>{t('register_free.title')}</title>
      </Helmet>

      <Stack
        direction="row"
        spacing={0}
        alignItems="center"
        className="register-bar"
      >
        <Typography variant="h6">LOGO</Typography>

        <Stack
          direction="row"
          alignItems="center"
          className="login"
          spacing={0}
        >
          <Typography>Already have an account?</Typography>
          <Typography onClick={() => navigate('/login')} className="navigate">
            Sign in
          </Typography>
          <ArrowForwardIcon fontSize="small" />
        </Stack>
      </Stack>

      <div className="card mt--XXXXL">
        <Paper className="card-email">
          <Typography variant="h5">Please enter your email</Typography>
        </Paper>
      </div>
    </Container>
  );
}

export default React.memo(RegisterFree);
