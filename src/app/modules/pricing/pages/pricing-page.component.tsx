import styled from '@emotion/styled/types/base';
import { Container, Grid, Paper, Stack, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import PricingCard from '../components/pricing-card/pricing-card.component';
import PricingSwitching from '../components/switch-button/switch-button.component';
import './pricing-page.style.scss';

const fakeData = [
  {
    id: 1,
    cardType: 0,
    title: 'Essentials',
    subtitle: 'Recommended for 1 to 10 staff',
    monthlyPrice: 20,
    yearlyPrice: 200,
  },
  {
    id: 2,
    cardType: 1,
    title: 'Business',
    subtitle: 'Recommended for more than 10 staff',
    monthlyPrice: 30,
    yearlyPrice: 300,
  },
  {
    id: 3,
    cardType: 0,
    title: 'Enterprise',
    subtitle: 'Recommended for more than 20 staff',
    monthlyPrice: 40,
    yearlyPrice: 400,
  },
];

function Pricing() {
  const { t } = useTranslation();
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

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
          {fakeData.map((item) => (
            <Grid item xs={4}>
              <PricingCard info={item} key={item.id} isMonthly={isMonthly} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Pricing;
