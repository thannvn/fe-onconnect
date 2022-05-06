import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import './pricing-card.style.scss';

interface PricingCardProps {
  info: PricingCardInfo;
  isMonthly: boolean;
}

interface PricingCardInfo {
  id: number;
  cardType: number;
  title: string;
  subtitle: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

const POPULAR_TYPE = 1;

function PricingCard({ info, isMonthly }: PricingCardProps) {
  const popularType = info.cardType === POPULAR_TYPE;

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

      <CardActionArea className="action-area">
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="h4">
            US${isMonthly ? info.monthlyPrice : info.yearlyPrice}
            <span>/month</span>
          </Typography>
        </Stack>

        <Typography>
          Engage customers across online touchpoints with rich and contextual
        </Typography>
      </CardActionArea>
    </Card>
  );
}

export default React.memo(PricingCard);
