import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import TabletMacIcon from '@material-ui/icons/TabletMac'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'

import "./IconLabelTabs.css"
import Table from "./Table"



import {grey} from '@material-ui/core/colors/grey';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  // let primary = grey[900];
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
        backgroundColor: theme.palette.primary.primary,
        // backgroundColor= "#141414",
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab icon={<MeetingRoomIcon />} label="Cancel anytime" href="/drafts" {...a11yProps(0)} />
          <LinkTab icon={<TabletMacIcon  />}  label="Watch anywhere" href="/trash" {...a11yProps(1)} />
          <LinkTab icon={<LocalOfferIcon />} label="Pick your price" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>

        <div id="tab1-content">
          <div className="tab1-content-inner">
             <div>
               <p className="text-lg">
                If you decide Netflix isn't for you - no problem. No commitment.
				        Cancel online anytime.
               </p>
              <a href="#" className="btn btn-xl2"> Watch Free For 30 Days </a> 
             </div>
       
              <img src="https://i.ibb.co/J2xDJV7/tab-content-1.png" alt="tab1 img"  />   
          </div>
      </div>         
      </TabPanel>

      <TabPanel value={value} index={1}>
         <div id="tab2-content"> 
           <div className="tab2-content-top">
             <p className="text-lg">
              Watch TV shows and movies anytime, anywhere - personalized for you.
             </p>
             <a href="#" className="btn btn-lg"> Watch Free For 30 Days </a>
          </div>

          <div className="tab2-content-bottom">
            <div>
              <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png" alt=""/>
              <p>
                Watch on your TV
              </p>
              <p className="text-dark">
                Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blue-ray Players and more.
              </p>
            </div>

            <div>
              <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png" alt=""/>
              <p>
                Watch instantly or download for later
              </p>
              <p className="text-dark">
                Available on phone and tablet, wherever you go.
              </p>
            </div>

            <div>
              <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" alt=""/>
              <p>
                Use any computer
              </p>
              <p className="text-dark">
                Watch right on Netflix.com.
              </p>
            </div>

          </div>
        </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <div id="tab-3-content">
          <div class="text-center">
						<p class="text-lg">
							Choose one plan and watch everything on Netflix.
						</p>
						<a href="#" class="btn btn-lg" >Watch Free For 30 Days</a>
					</div>

          <Table/>

        </div>

      </TabPanel>

    </div>
  );
}