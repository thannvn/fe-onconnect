/* eslint-disable global-require */
/* eslint-disable jsx-a11y/media-has-caption */
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import AppIcon from 'shared/icons/app-icon.component';
import CheckIcon from '@mui/icons-material/Check';
import './home-page.style.scss';
import { GREEN } from 'styles/mui/variables';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ImageHero } from 'app/assets/svg/image-hero.svg';
import { ReactComponent as RocheLogo } from 'app/assets/svg/logo-roche.svg';
import graphicsImage from 'app/assets/images/graphics.webp';
import engageUI from 'app/assets/images/engage-ui.png';
import heroImage from 'app/assets/images/hero-img.png';
import PartnerSlider from '../components/partner-slider/partner-slider.component';

function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const FEATTURES_1 = [
    'See each customer journey in a single view across all channels',
    'Eliminate the need to ask them for information you already have',
    'Enable multimedia responses via social, video, and phone channels',
    'Set up in seconds; cloud-based, no coding or hardware required',
  ];
  const FEATURES_2 = [
    'Incoming phone calls & messages are handled digitally',
    'Intelligent routing connects customers to the right experts',
    'Return calls show up as recognised numbers, enhancing resolution times and reducing time spent ‘on-hold’',
    'Build deeper bonds with consistent one-to-one relationships – customers won’t get passed around',
    'Easily access reports, insights, and files',
    'Let distributed teams to work cohesively',
  ];
  const FEATURES_3 = [
    'Incoming phone calls & messages are handled digitally',
    'Intelligent routing connects customers to the right experts',
    'Return calls show up as recognised numbers, enhancing resolution times and reducing time spent ‘on-hold’',
    'Build deeper bonds with consistent one-to-one relationships – customers won’t get passed around',
    'Easily access reports, insights, and files',
    'Let distributed teams to work cohesively',
  ];
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
              <AppIcon iconName="ic-quote-close" className="quote-close" />
            </Stack>

            <div className="forester mt--MS">
              <AppIcon iconName="ic-forester" />
            </div>

            <Typography textAlign="center" className="mt--XS">
              {t('home_page.quote.sub_content')}
            </Typography>
          </Grid>

          <Grid item xs={12} className="introduce-section mt--XXXL ">
            <div className="watch-video mb--XXS">
              <AppIcon iconName="ic-arrow-right-left" className="mt--XS" />
              <Typography className="hand-writing ml--XXS">
                Watch the video
              </Typography>
            </div>

            <iframe
              title="introduce"
              className="video mb--L"
              src="https://www.youtube.com/embed/8vXu5f4wHnQ"
            />
          </Grid>

          <Grid item xs={12} className="introduce-title-section mt--XXL">
            <Typography variant="h3" textAlign="center">
              <span>{t('common.web_name')}</span> delivers seamless customer
              experience through digital collaboration.
            </Typography>
          </Grid>

          <Grid container className="feature-section" spacing={4}>
            <Grid item xs={6} className="wrap-left">
              <Typography className="paragraph-number">1</Typography>
              <Typography className="title">Connect</Typography>
              <Typography className="subtitle">
                Be available to customers on their
                <br />
                <span>own terms</span>
              </Typography>

              <div className="content">
                <Typography>
                  Discover, acquire, and engage customers through channels they
                  already use - from first enquiry to post-sales support.right
                </Typography>

                <div className="mt--S">
                  {FEATTURES_1.map((item) => (
                    <Stack
                      direction="row"
                      spacing={2}
                      className="mt--XXS"
                      key={item}
                    >
                      <CheckIcon sx={{ color: GREEN }} fontSize="large" />
                      <Typography>{item}</Typography>
                    </Stack>
                  ))}
                </div>
              </div>
            </Grid>

            <Grid item xs={6} className="wrap-right">
              <Stack direction="row" spacing={0}>
                <Typography className="hand-writing" sx={{ width: '220px' }}>
                  All channels converge in one dashboard.
                </Typography>
                <AppIcon iconName="ic-arrow-left-down" className="mt--XS" />
              </Stack>
              <img src={engageUI} alt="engage" className="image" />

              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                className="home-channel"
              >
                <AppIcon iconName="ic-qr-code-square" />
                <AppIcon iconName="ic-whats-app-square" />
                <AppIcon iconName="ic-messenger-square" />
                <AppIcon iconName="ic-we-chat-square" />
              </Stack>
            </Grid>
            <Grid />
          </Grid>

          <Grid container className="feature-section-2" spacing={4}>
            <Grid item xs={6} className="wrap-right">
              <Stack direction="row" spacing={0} className="point-text">
                <AppIcon iconName="ic-arrow-right-left" className="mt--XS" />
                <Typography className="hand-writing" sx={{ width: '150px' }}>
                  Built-in routing intelligence
                </Typography>
              </Stack>

              <img src={heroImage} alt="hero-img" className="image" />
            </Grid>

            <Grid item xs={6} className="wrap-left">
              <Typography className="paragraph-number">2</Typography>
              <Typography className="title">Orchestrate</Typography>
              <Typography className="subtitle">
                Match enquiries to the
                <br />
                <span>right expertise</span>
              </Typography>

              <div className="content">
                <Typography>
                  Our intelligent hybrid platform offers unmatched efficiency.
                </Typography>

                <div className="mt--S">
                  {FEATURES_2.map((item) => (
                    <Stack
                      direction="row"
                      spacing={2}
                      className="mt--XXS"
                      key={item}
                    >
                      <CheckIcon sx={{ color: GREEN }} fontSize="large" />
                      <Typography>{item}</Typography>
                    </Stack>
                  ))}
                </div>
              </div>
            </Grid>
            <Grid />
          </Grid>

          <Grid container className="feature-section-3" spacing={4}>
            <Grid item xs={6} className="wrap-left">
              <Typography className="paragraph-number">3</Typography>
              <Typography className="title">Evaluate</Typography>
              <Typography className="subtitle">
                Build long-term loyalty strategy for
                <br />
                <span>improved ROI</span>
              </Typography>

              <div className="content">
                <Typography>
                  Understanding your customers means understanding your
                  business. CINNOX turns unstructured data into clearly
                  formulated growth strategies.
                </Typography>

                <div className="mt--S">
                  {FEATURES_3.map((item) => (
                    <Stack
                      direction="row"
                      spacing={2}
                      className="mt--XXS"
                      key={item}
                    >
                      <CheckIcon sx={{ color: GREEN }} fontSize="large" />
                      <Typography>{item}</Typography>
                    </Stack>
                  ))}
                </div>
              </div>
            </Grid>

            <Grid item xs={6} className="wrap-right">
              <Stack direction="row" spacing={2} className="point-text">
                <Typography className="hand-writing">Unified data</Typography>
                <AppIcon iconName="ic-arrow-left-right" className="mt--XXS" />
              </Stack>

              <ImageHero className="image-hero" />
            </Grid>
            <Grid />
          </Grid>

          <Grid item xs={12} className="introduce-title-section mt--XXL">
            <Typography variant="h3" textAlign="center">
              Trusted by <span>1000+</span> multinational corporations across
              the globe
            </Typography>
          </Grid>

          <Grid item xs={12} className="partners ">
            <PartnerSlider />
          </Grid>

          <Grid container spacing={0} className="case-study-card">
            <Grid item xs={8} className="wrap-left">
              <Stack
                direction="row"
                spacing={4}
                alignItems="center"
                className="title"
              >
                <RocheLogo />
                <Typography className="big-plus">+</Typography>
                <Typography className="on-connect">ONCONNECT</Typography>
              </Stack>

              <Typography className="font--32b mt--S">
                From Our Customer
              </Typography>

              <div className="content">
                <Typography>
                  Roche is using CINNOX as part of a digitalisation pilot
                  program for customer enquiry handling and team collaboration -
                  as part of their wider push towards customer service
                  automation.
                </Typography>
              </div>

              <Stack
                direction="row"
                justifyContent="space-between"
                className="text-quote mt--L"
                spacing={8}
              >
                <AppIcon iconName="ic-quote-open" />
                <Typography variant="h6">
                  CINNOX is unique in that its intuitive design drastically
                  reduces the flow and process in multiple adoptions for
                  business units – which is usually the hardest part of
                  introducing any change within a large organisation like ours.
                </Typography>
                <AppIcon iconName="ic-quote-close" className="quote-close" />
              </Stack>

              <div className="signature">
                <Typography>Hans Lim</Typography>
                <Typography>
                  Global Idea Accelerator, Innovation Theme, APAC Automation
                  Squad Lead, Roche Hong Kong Limited
                </Typography>
              </div>
            </Grid>

            <Grid item xs={4} className="wrap-right">
              <img src={graphicsImage} alt="graphics" className="graphics" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className="trial-section">
          <Typography>Reimagine your business</Typography>
          <Typography>Get started with a 14-day free trial.</Typography>
          <Button
            variant="contained"
            className="trial-button --no-transform"
            onClick={() => navigate('/register-free')}
          >
            {t('nav.free_trial')}
          </Button>
          <Typography>
            No credit card required | 1 minute installation
          </Typography>
        </Grid>
      </Container>
    </>
  );
}

export default HomePage;
