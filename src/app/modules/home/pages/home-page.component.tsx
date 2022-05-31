/* eslint-disable global-require */
/* eslint-disable jsx-a11y/media-has-caption */
import { Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import AppIcon from 'shared/icons/app-icon.component';
import './home-page.style.scss';

function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('home_page.page_title')}</title>
      </Helmet>

      <Container maxWidth="xl" className="home-page">
        <Grid rowSpacing={2}>
          <Grid container className="hero-section">
            <Grid item xs={6} className="hero-item">
              <div className="text-home">
                <Typography variant="h3">
                  <span className="special">{t('home_page.hero.connect')}</span>
                  {t('home_page.hero.with_onconnect')}
                </Typography>
                <Typography>{t('home_page.hero.description')}</Typography>
              </div>
            </Grid>

            <Grid item xs={6} className="hero-item">
              <video width="100%" height="640px" autoPlay loop muted>
                <source
                  src={require('app/assets/videos/home-banner-video.mp4')}
                  type="video/mp4"
                />
              </video>
            </Grid>
          </Grid>

          <Grid item xs={12} className="quote-section">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              className="text-quote"
              spacing={8}
            >
              <AppIcon iconName="ic-quote-open" />
              <Typography variant="h6">
                {t('home_page.quote.content')}
              </Typography>
              <AppIcon iconName="ic-quote-close" />
            </Stack>

            <div className="forester mt--MS">
              <AppIcon iconName="ic-forester" />
            </div>

            <Typography textAlign="center" className="mt--XS">
              {t('home_page.quote.sub_content')}
            </Typography>
          </Grid>

          <Grid item xs={12} className="introduce-section mt--XXXXL">
            <iframe
              title="introduce"
              className="video"
              src="https://www.youtube.com/embed/8vXu5f4wHnQ"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
