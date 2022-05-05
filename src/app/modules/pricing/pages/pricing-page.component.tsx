import styled from '@emotion/styled/types/base';
import { Container, Grid, Paper, Stack, Typography, Box } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import PricingCard from '../components/pricing-card/pricing-card.component';
import PricingSwitching from '../components/switch-button/switch-button.component';
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
          <Stack direction="row" spacing={2} justifyContent="center">
            <div className="pricing-switching">
              <Typography className="font--16b">Yearly</Typography>
              <PricingSwitching
                defaultChecked
                inputProps={{ 'aria-label': 'pricing-time' }}
                sx={{ margin: '0px 5px 0px 5px' }}
              />
              <Typography className="font--16b">Monthly</Typography>
            </div>
          </Stack>
        </Grid>

        <Grid container spacing={3} className="mt--XS pricing-card-list">
          <Grid item xs={4}>
            <PricingCard />
          </Grid>
          <Grid item xs={4}>
            <PricingCard />
          </Grid>
          <Grid item xs={4}>
            <PricingCard />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Pricing;
