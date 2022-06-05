import { Container, Grid, Stack, Typography } from '@mui/material';
import PricingAPI from 'app/api/pricing.api';
import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Loading from 'shared/blocks/loading/loading.component';
import ConnectCompare from '../components/connect-compare/connect-compare.component';
import EvaluateCompare from '../components/evaluate-compare/evaluate-compare.component';
import OrchestrateCompare from '../components/orchestrate-compare/orchestrate-compare.component';
import PricingCard from '../components/package-card/package-card.component';
import Question from '../components/question/question.component';
import SupportService from '../components/support-service/support-service.component';
import PricingSwitching from '../components/switch-button/switch-button.component';
import {
  CompareInfo,
  PackageInfo,
  POPULAR_TYPE,
} from '../shared/const/pricing-card.type';
import { QUESTIONS } from '../shared/const/pricing-page.type';
import './pricing-page.style.scss';

interface ListData {
  packageList: PackageInfo[];
  compareList: CompareInfo[];
}

function Pricing() {
  const { t } = useTranslation();
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const listData = useRef<ListData>({
    compareList: [],
    packageList: [],
  });

  const getListPricingCard = useCallback(async () => {
    try {
      setLoading(true);
      const result = await Promise.all([
        PricingAPI.getListPackage(),
        PricingAPI.getCompareList(),
      ]);
      listData.current.packageList = result[0]?.packageList || [];
      listData.current.compareList = result[1]?.compareList || [];
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getListPricingCard();
  }, [getListPricingCard]);

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsMonthly(event.target.checked);
  };

  return (
    <>
      <Loading open={loading} />

      <Helmet>
        <title>{t('pricing_page.page_title')}</title>
      </Helmet>

      <Container maxWidth="xl" className="pricing-page">
        <Grid container>
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
                    onChange={handleSwitch}
                  />
                  <Typography className="font--16b">Monthly</Typography>
                </div>
              </Stack>
            </Grid>

            <Grid container spacing={3} className="mt--XS">
              {listData.current.packageList.map((item) => (
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
              {listData.current.packageList.map((item) => (
                <Grid
                  item
                  xs={2.4}
                  className={clsx(
                    { '--popular': item.type === POPULAR_TYPE },
                    'name'
                  )}
                  key={item.id}
                >
                  <Typography variant="h6">{item.title}</Typography>
                </Grid>
              ))}
            </Grid>

            <ConnectCompare compareData={listData.current.compareList} />
            <OrchestrateCompare />
            <EvaluateCompare />
            <SupportService />
          </div>

          <div className="questions mt--XXXXL">
            <Grid item xs={12} className="title mb--L">
              <Typography variant="h1">
                {t('pricing_page.questions')}
              </Typography>
            </Grid>

            {QUESTIONS.map((item, index) => (
              <Question
                question={item.question}
                answer={item.answer}
                key={index}
              />
            ))}
          </div>
        </Grid>
      </Container>
    </>
  );
}

export default Pricing;
