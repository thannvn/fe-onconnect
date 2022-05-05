import { Container, Grid, Stack, Switch, Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import './pricing-page.style.scss';

function Pricing() {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl" className="container mt--XXL">
      <Helmet>
        <title>{t('pricing_page.title')}</title>
      </Helmet>

      <Grid spacing={2} className="main-layout">
        <Grid item xs={12} className="title">
          <Typography variant="h1">
            Designed for Businesses of All Sizes and Sectors
          </Typography>
        </Grid>

        <Grid item xs={12} className="pricing-board mt--LL">
          <Stack direction="row" spacing={2}>
            <div className="pricing-switching">
              <Typography>Yearly</Typography>
              <Switch
                defaultChecked
                inputProps={{ 'aria-label': 'ant design' }}
              />
              <Typography>Monthly</Typography>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Pricing;
