import React from 'react';
import Helmet from 'react-helmet';
import { Container, Grid } from '@mui/material';
import './profile.style.scss';
import ProfileInfo from '../components/profile-info/profile-info.component';
import ProfileActivity from '../components/profile-activity/profile-activity.component';

function ProfilePage() {
  return (
    <>
      <Helmet>
        <title>Profile Page</title>
      </Helmet>

      <Container maxWidth="xl" className="profile-page">
        <Grid container className="profile-wrap">
          <Grid item xs={4}>
            <ProfileInfo />
          </Grid>

          <Grid item xs={8}>
            <ProfileActivity />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ProfilePage;
