import React from 'react';
import { Text } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Map from './components/Map';
import Meetups from './components/Meetups';
import PostMeetup from './components/PostMeetup';
import Profile from './components/Profile';
import SingleMeetup from './components/SingleMeetup';

const RouterComponent = () => { 
    const TabIcon = ({ selected, title }) => {
        return (
          <Text style={{fontSize: 18 }}>{title}</Text>
        );
      }
    return ( 
        <Router>
            <Scene key="root" hideNavBar>
                {/* <Scene key="auth" initial>
                    <Scene key="login" component={LoginForm} title="Please Login" />
                </Scene> */}
                <Scene key="main">
                    <Scene
                        key="tabbar"
                        tabs={true}
                        tabBarStyle={{ backgroundColor: '#fff' }}
                    >
                    <Scene key="map" component={Map} title="Map" icon={TabIcon} inital />      
                    <Scene
                        key="meetups"
                        component={Meetups} 
                        title="Meetups" 
                        rightTitle="Create"
                        onRight={() => Actions.postMeetup()}
                        icon={TabIcon}
                    />
                    <Scene key="profile" component={Profile} title="Profile" icon={TabIcon} />
                    </Scene>
                    <Scene key="postMeetup" component={PostMeetup} title="Create Meetup" />
                    <Scene key="singleMeetup" component={SingleMeetup} title="Meetup" />
                    </Scene>
                </Scene>
            
         
        </Router>
    );
};

export default RouterComponent;

