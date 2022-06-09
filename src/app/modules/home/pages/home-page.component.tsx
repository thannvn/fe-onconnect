/* eslint-disable global-require */
/* eslint-disable jsx-a11y/media-has-caption */
import CheckIcon from '@mui/icons-material/Check';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import engageUI from 'app/assets/images/engage-ui.png';
import graphicsImage from 'app/assets/images/graphics.webp';
import heroImage from 'app/assets/images/hero-img.png';
import intellectualImage from 'app/assets/images/intellectual.png';
import vmgLogo from 'app/assets/images/partners-logo/vmg.png';
import { ReactComponent as ImageHero } from 'app/assets/svg/image-hero.svg';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AppIcon from 'shared/icons/app-icon.component';
import { GREEN } from 'styles/mui/variables';
import PartnerSlider from '../components/partner-slider/partner-slider.component';
import './home-page.style.scss';

function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const FEATTURES_1 = [
    'Messaging, Chat (P2P & Group Chat)',
    'Voice and video call (high-class PBX)',
    'File sharing (multimedia)',
    'Meetings & Video confrence',
    'Set up in seconds; cloud-based, no coding or hardware required',
  ];
  const FEATURES_2 = [
    'Incoming phone calls & messages are handled digitally',
    'Intelligent routing connects customers to the right experts',
    'Easily access reports, insights, and files',
    `ensures that remote workers can connect with in-office employees through video conferences, and everyone
     can stay in touch in real-time through instant messaging`,
    `Let distributed teams to work cohesively, Where communication is about sharing knowledge, 
     collaboration is about actively working together to achieve mutual goals`,
  ];
  const FEATURES_3 = [
    `Cost savings, every company needs to keep costs low and ROI high if it wants success, 
     OnConnect provides with access to robust communication tools, without the initial capital expenditure, 
     or on-going maintenance of an on-premise service`,
    'Enrich customer experiences with unified data, leveraging APIs',
    `Encourages innovation, companies want to make sure that they’re on the cutting-edge of technology. 
     With OnConnect, they can change and adapt the services they access according to their developing needs`,
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

          {/* <Grid item xs={12} className="introduce-section mt--XXXL ">
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
          </Grid> */}

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
                Be available to your on their
                <br />
                <span>own terms</span>
              </Typography>

              <div className="content">
                <Typography>
                  Discover, acquire, and engage customers through channels they
                  already use - for comunication and collaboration.
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
                Curate staff journeys and
                <br />
                <span>optimise workflows</span>
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
              <Typography className="title">Benefit</Typography>
              <Typography className="subtitle">
                Build long-term loyalty strategy for
                <br />
                <span>improved ROI</span>
              </Typography>

              <div className="content">
                <Typography>
                  Understanding your customers means understanding your
                  business. ONCONNECT turns unstructured data into clearly
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
              Trusted by <span>1000+</span> corporations across the globe
            </Typography>
          </Grid>

          <Grid item xs={12} className="partners ">
            <PartnerSlider />
          </Grid>

          <Grid container spacing={0} className="case-study-card">
            <Grid item xs={8} className="wrap-left">
              <Stack
                direction="row"
                spacing={2.5}
                alignItems="center"
                className="title"
              >
                <img src={vmgLogo} alt="vmg-logo" />
                <Typography className="big-plus">+</Typography>
                <Typography className="on-connect ml--S">ONCONNECT</Typography>
              </Stack>

              <Typography className="font--32b mt--S">
                From Our Customer
              </Typography>

              <div className="content">
                <Typography>
                  From Our Customer VMG is using OnConnect as part of a
                  digitalisation pilot program for team communication and team
                  collaboration - as part of their wider push towards digital
                  tranform and innovation for communication.
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
                  OnConnect is unique in its powerful intuitive design
                  user-friendly. Help users experience online meetings, video
                  calls and phone calls with sharp image and sound quality,
                  making it easier for you to connect at work..
                </Typography>
                <AppIcon iconName="ic-quote-close" className="quote-close" />
              </Stack>

              <div className="signature">
                <Typography>Hans Lim</Typography>
                <Typography>
                  Some intellectual property rights - outstanding achievements
                </Typography>
              </div>
            </Grid>

            <Grid item xs={4} className="wrap-right">
              <img src={graphicsImage} alt="graphics" className="graphics" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className="introduce-title-section mt--XXXL">
          <Typography variant="h3" textAlign="center">
            Some intellectual property rights
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          className="mt--S"
          justifyContent="center"
          display="flex"
        >
          <img
            alt="intellectual"
            src={intellectualImage}
            style={{ width: '60%' }}
          />
        </Grid>

        <Grid item xs={12} className="trial-section mb--XXXL">
          <Typography>Reimagine your business</Typography>
          <Typography>Get started with a 30-day free trial.</Typography>
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
