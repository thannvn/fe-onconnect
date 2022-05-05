import { Card, Typography } from '@mui/material';
import React from 'react';
import './pricing-card.style.scss';

function PricingCard() {
  return (
    <Card className="pricing-card">
      <div>
        <Typography>Essentials</Typography>
        <Typography>Recommended for 1 to 10 staff</Typography>
      </div>
    </Card>
  );
}

export default PricingCard;
