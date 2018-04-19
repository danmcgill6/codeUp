import React, { Component } from 'react';
import { View } from 'react-native';
import { Avatar, Text, Divider, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import UserMeetups from './Meetups';
import { Actions } from 'react-native-router-flux';

export class Profile extends Component {
    render() {
      return (
        <View style={styles.profileContainer}>
          <View style={styles.profileTop}>
            <View style={styles.avatarContainer}>
              <Avatar
              style={styles.avatar}
                xlarge
                rounded
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
            </View>
            <View style={styles.nameContainer}>
              <Text h3 style={styles.name}>{this.props.user.firstName} {this.props.user.lastName}</Text>
              <View style={styles.aboutUser}>
                <Text style={styles.bio}>about user</Text>
              </View>
        </View>
        <View style={styles.iconContainer}>
          <Button title='Edit' onPress ={ () => Actions.editProfile() } />
        </View>
        </View>
        <View style={styles.userMeetups}>
         <UserMeetups />
        </View>
      </View>
      );
    }
  }

  const styles = {
    profileTop: {
      marginTop: 25,
      flex: 1,
      justifyContent: 'center',
    },
    aboutUser: {
      flex: 1
    },
    userMeetups: {
      flex: 1
    },
    profileContainer: {
      flex: 1
    },
    avatarContainer: {
      flex: 1,
      justifyContent: 'center'
    },
    nameContainer: {
      marginTop: 25,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    avatar: {
       backgroundColor: 'black',
       justifyContent: 'flex-end'
    },
    iconContainer: {
      alignItems: 'flex-end',
      marginRight: 15
    }
 
  };

  const mapStateToProps = state => {
    return { 
        user: state.auth.user
   };
  };

  export default connect(mapStateToProps, null)(Profile);

