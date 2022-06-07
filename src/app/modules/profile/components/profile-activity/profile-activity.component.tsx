import { Settings, StarBorderOutlined } from '@mui/icons-material';
import { Divider } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { PackageInfo } from 'shared/const/pricing.const';
import ChangePassword from '../change-password/change-password.component';
import PackageInfoTab from '../package-info/package-info.component';
import './profile-activity.style.scss';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}

interface ProfileActivityProps {
  packageInfo?: PackageInfo;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function ProfileActivity({ packageInfo }: ProfileActivityProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="profile-activity">
      <Tabs value={value} onChange={handleChange}>
        <Tab
          icon={<StarBorderOutlined />}
          iconPosition="start"
          label="Package"
          {...a11yProps(0)}
        />
        <Tab
          icon={<Settings />}
          iconPosition="start"
          label="Setting"
          {...a11yProps(1)}
        />
      </Tabs>
      <Divider />

      <TabPanel value={value} index={0}>
        <PackageInfoTab packageInfo={packageInfo} />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <ChangePassword />
      </TabPanel>
    </div>
  );
}

ProfileActivity.defaultProps = {
  packageInfo: undefined,
};

export default React.memo(ProfileActivity);
