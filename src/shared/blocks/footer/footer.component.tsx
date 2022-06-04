/* eslint-disable react/jsx-no-useless-fragment */
import { Container, Grid, Stack, Typography } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './footer.style.scss';
import { YouTube, Twitter, LinkedIn, Facebook } from '@mui/icons-material';
import { Link } from 'react-router-dom';

interface FooterSectionProps {
  header: string;
  features: Feature[];
  isHaveSubSection: boolean;
  subSection: SubSection | null;
}

interface SubSection {
  titles: string[];
  features: Feature[][];
}

interface Feature {
  label: string;
  href: string;
}

function Feature({ href, label }: Feature) {
  return (
    <Link to={href} className="feature">
      {label}
    </Link>
  );
}

function FooterSection({
  header,
  features,
  isHaveSubSection,
  subSection,
}: FooterSectionProps) {
  return (
    <>
      <Typography className="header mb--S">{header}</Typography>

      {!isHaveSubSection ? (
        <Stack spacing={1}>
          {features?.map((feature) => (
            <Feature
              href={feature.href}
              label={feature.label}
              key={feature.label}
            />
          ))}
        </Stack>
      ) : (
        <>
          {subSection?.titles?.map((subTitle, index) => (
            <Stack
              spacing={1}
              key={subTitle}
              className={clsx({ 'mt--XS': !!index })}
            >
              <Typography className="subTitle">{subTitle}</Typography>
              {subSection?.features?.[index].map((feature) => (
                <Link to={feature.href} key={feature.label} className="feature">
                  {feature.label}
                </Link>
              ))}
            </Stack>
          ))}
        </>
      )}
    </>
  );
}

function Footer() {
  const { t } = useTranslation();
  const FOOTER = {
    headers: [
      t('nav.capabilities.header'),
      t('nav.why_onconnect.header'),
      t('nav.solutions.header'),
      t('footer.resources.header'),
      t('footer.company.header'),
    ],
    haveSubSection: [false, false, true, false, false],
    features: [
      [
        { label: t('nav.capabilities.title1'), href: '/' },
        { label: t('nav.capabilities.title2'), href: '/' },
        { label: t('nav.capabilities.title3'), href: '/' },
      ],
      [
        { label: t('nav.why_onconnect.title1'), href: '/' },
        { label: t('nav.why_onconnect.title2'), href: '/' },
        { label: t('nav.why_onconnect.title3'), href: '/' },
      ],
      {
        titles: [
          t('nav.solutions.business_needs.header'),
          t('nav.solutions.industry.header'),
          t('nav.solutions.case_study.header'),
        ],
        features: [
          [
            { label: t('nav.solutions.business_needs.title1'), href: '/' },
            { label: t('nav.solutions.business_needs.title2'), href: '/' },
            { label: t('nav.solutions.business_needs.title3'), href: '/' },
          ],
          [
            { label: t('nav.solutions.industry.title1'), href: '/' },
            { label: t('nav.solutions.industry.title2'), href: '/' },
          ],
          [
            { label: t('nav.solutions.case_study.title1'), href: '/' },
            { label: t('nav.solutions.case_study.title2'), href: '/' },
            { label: t('nav.solutions.case_study.title3'), href: '/' },
          ],
        ],
      },
      [
        { label: t('footer.resources.title1'), href: '/' },
        { label: t('footer.resources.title2'), href: '/' },
        { label: t('footer.resources.title3'), href: '/' },
        { label: t('footer.resources.title4'), href: '/' },
        { label: t('footer.resources.title5'), href: '/' },
      ],
      [
        { label: t('footer.company.title1'), href: '/' },
        { label: t('footer.company.title2'), href: '/' },
        { label: t('footer.company.title3'), href: '/' },
        { label: t('footer.company.title4'), href: '/' },
      ],
    ],
  };

  return (
    <div className="onc-footer" id="footer">
      <Container maxWidth="xl" className="footer-container">
        <Grid container spacing={4}>
          {FOOTER.headers.map((header, index) => (
            <Grid item xs={2} key={header}>
              <FooterSection
                key={header}
                header={header}
                isHaveSubSection={FOOTER.haveSubSection[index]}
                features={
                  !FOOTER.haveSubSection[index]
                    ? (FOOTER.features[index] as Feature[])
                    : []
                }
                subSection={
                  FOOTER.haveSubSection[index]
                    ? (FOOTER.features[index] as SubSection)
                    : null
                }
              />
            </Grid>
          ))}

          <Grid item xs={2}>
            <Typography className="header mb--S">
              {t('footer.get_in_touch')}
            </Typography>

            <Stack direction="row" spacing={2}>
              <Facebook fontSize="large" />
              <Twitter fontSize="large" />
              <LinkedIn fontSize="large" />
              <YouTube fontSize="large" />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
