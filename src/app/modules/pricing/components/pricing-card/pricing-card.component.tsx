/* eslint-disable @typescript-eslint/no-explicit-any */

import CheckIcon from '@mui/icons-material/Check';
import { Button, Card, Stack, Typography } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import AppIcon from 'shared/icons/app-icon.component';
import { GREEN } from 'styles/mui/variables';
import {
  CARD_CHANNELS,
  POPULAR_TYPE,
  PricingCardInfo,
} from '../../shared/const/pricing-card.type';
import './pricing-card.style.scss';

interface PricingCardProps {
  info: PricingCardInfo;
  isMonthly: boolean;
}

function PricingCard({ info, isMonthly }: PricingCardProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const popularType = info.cardType === POPULAR_TYPE;
  const channels = info.channels.split(',');

  const handleStartFree = () => {
    navigate('/register-free');
  };

  return (
    <Card className="pricing-card">
      <div
        className={clsx('header', {
          '--popular': popularType,
        })}
      >
        <Stack className="title" direction="row" alignItems="center">
          <Typography variant="h5">{info.title}</Typography>
          {popularType && (
            <Typography className="card-type">Most Popular</Typography>
          )}
        </Stack>

        <Typography>{info.subtitle}</Typography>
      </div>

      <div className="action-area">
        <Stack direction="row" alignItems="baseline" spacing={0.5}>
          <Typography variant="h4">
            US${isMonthly ? info.monthlyPrice : info.yearlyPrice}
          </Typography>
          <Typography className="per-month">/staff/month</Typography>
        </Stack>

        <Typography sx={{ height: '6.5rem' }} className="mt--XS">
          {info.summary}
        </Typography>

        <Button
          variant="contained"
          className="onc-button --no-transform"
          onClick={handleStartFree}
        >
          {t('pricing_page.start_free')}
        </Button>
      </div>

      <div className="card-content">
        <Typography className="font--16b">
          {t('pricing_page.plan_include')}
        </Typography>

        <div className="options mt--XS">
          {info.options.map((option, index) => (
            <div key={index} className={clsx({ 'mt--XS': !!index })}>
              <Typography className="title">{option.title}</Typography>

              {option.description.split('\n').map((splitDes, indexDes) => (
                <div key={indexDes}>
                  <Stack direction="row" spacing={2} className="mt--XXS">
                    <CheckIcon sx={{ color: GREEN }} />
                    <Typography>{splitDes}</Typography>
                  </Stack>
                </div>
              ))}

              {index === 0 && (
                <Stack
                  flexWrap="wrap"
                  direction="row"
                  spacing={1}
                  className={clsx('channels', {
                    '--long-channels': channels.length > 5,
                  })}
                >
                  {channels.map((channel) => (
                    <AppIcon
                      iconName={(CARD_CHANNELS as any)[channel]}
                      key={channel}
                    />
                  ))}
                </Stack>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

export default React.memo(PricingCard);
