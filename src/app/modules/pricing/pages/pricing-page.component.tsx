import { Container, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import CompareFeature from '../components/compare-feature/compare-feature.component';
import PricingCard from '../components/pricing-card/pricing-card.component';
import Question from '../components/question/question.component';
import PricingSwitching from '../components/switch-button/switch-button.component';
import { fakeData } from '../shared/pricing-card.type';
import './pricing-page.style.scss';

function Pricing() {
  const { t } = useTranslation();
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  const questions = [
    {
      question: 'What is the entitlement of the free trial?',
      answer: `The free trial is valid for 14 days from the moment you activate your account, 
      with licences for up to 3 users. You can connect WhatsApp Business, WeChat Official Account, 
      Line Official Account, Facebook Messenger, and install the Live Chat and Call 
      Web Widget – all free of charge with no usage fees. No charges will be incurred for staff to 
      staff calls, chats, group chats, video calls, or audio/video conference calls made through CINNOX.
      You will have the same high standards of security, SLA of 99.95%, and access to our customer success 
      team and 24/7 technical support.`,
    },
    {
      question: 'Is there a minimum subscription period or number of licences?',
      answer: `Free trial: You can enjoy up to 3 licences for 14 days.
      ESSENTIALS Plan: 1 licence and 1-month subscription minimum.
      When you upgrade from the free trial to ESSENTIALS, the number of licences used in the free trial 
      will be carried over to your new plan. For example, if you used 2 licences during the free trial, 
      then you need to purchase 2 licences when upgrading to the ESSENTIALS Plan.
      BUSINESS and ENTERPRISE Plans: Minimum 10 licences.`,
    },
    {
      question: 'Do you charge any usage costs?',
      answer: `Usage costs will be incurred on the following:
      - Number of SMS sent
      - Outbound call made to mobile numbers or landlines per minute
      - Incoming call to toll-free and local DID numbers per minute
      - Participants dialling into conference calls through a toll-free or local DID number (if enabled)
      - Transcript (speech-to-text service) based on the amount of audio successfully processed by each month.`,
    },
  ];

  return (
    <Container maxWidth="xl" className="mt--XXXXL mb--XXXL">
      <Helmet>
        <title>{t('pricing_page.page_title')}</title>
      </Helmet>

      <Grid container className="main-layout">
        <div className="pricing-list">
          <Grid item xs={12} className="title">
            <Typography variant="h1">{t('pricing_page.header')}</Typography>
          </Grid>

          <Grid item xs={12} className="mt--LL">
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

          <Grid container spacing={3} className="mt--XS">
            {fakeData.map((item) => (
              <Grid item xs={4} key={item.id}>
                <PricingCard info={item} isMonthly={isMonthly} />
              </Grid>
            ))}
          </Grid>
        </div>

        <div className="compare-features-list">
          <Grid item xs={12} className="title mt--XXXXL">
            <Typography variant="h3">
              {t('pricing_page.compare_features')}
            </Typography>
          </Grid>

          <Grid container spacing={0} className="card-name-compare mt--M">
            <Grid item xs={4.8} />
            <Grid item xs={2.4} className="name">
              <Typography variant="h6">Essentials</Typography>
            </Grid>
            <Grid item xs={2.4} className="name --popular">
              <Typography variant="h6">Business</Typography>
            </Grid>
            <Grid item xs={2.4} className="name">
              <Typography variant="h6">Enterprise</Typography>
            </Grid>
          </Grid>

          <CompareFeature
            partHeading={t('pricing_page.connect')}
            featureTitle={t('pricing_page.channels')}
          />
        </div>

        <div className="questions mt--XXXXL">
          <Grid item xs={12} className="title mb--L">
            <Typography variant="h1">{t('pricing_page.questions')}</Typography>
          </Grid>

          {questions.map((item, index) => (
            <Question
              question={item.question}
              answer={item.answer}
              key={index}
            />
          ))}
        </div>
      </Grid>
    </Container>
  );
}

export default Pricing;
