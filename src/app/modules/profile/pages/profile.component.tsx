import React, { useCallback, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { Container, Grid } from '@mui/material';
import './profile.style.scss';
import AuthenticationAPI from 'app/api/authentication.api';
import LoadingComponent from 'shared/blocks/loading/loading.component';
import ProfileInfo from '../components/profile-info/profile-info.component';
import ProfileActivity from '../components/profile-activity/profile-activity.component';

function ProfilePage() {
  const [loading, setLoading] = useState<boolean>(false);

  const getUserInfo = useCallback(async () => {
    try {
      setLoading(true);
      await AuthenticationAPI.getProfile();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <>
      <LoadingComponent open={loading} />
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
