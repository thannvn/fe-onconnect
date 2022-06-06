import React, { useCallback, useEffect, useRef, useState } from 'react';
import Helmet from 'react-helmet';
import { Container, Grid } from '@mui/material';
import './profile.style.scss';
import AuthenticationAPI from 'app/api/authentication.api';
import LoadingComponent from 'shared/blocks/loading/loading.component';
import { Profile } from 'shared/const/user.const';
import ProfileInfo from '../components/profile-info/profile-info.component';
import ProfileActivity from '../components/profile-activity/profile-activity.component';

function ProfilePage() {
  const [loading, setLoading] = useState<boolean>(false);
  const profile = useRef<Profile>();

  const getUserInfo = useCallback(async () => {
    try {
      setLoading(true);
      const result = await AuthenticationAPI.getProfile();
      if (result) {
        profile.current = result.profile;
      }
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
            <ProfileActivity packageInfo={profile.current?.Package} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ProfilePage;
