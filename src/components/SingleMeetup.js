import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableHighlight } from 'react-native';
import { Button, Card, ListItem } from 'react-native-elements';
import { CardSection } from './common';
import { attendMeetup, leaveMeetup } from '../actions';

export class SingletMeetup extends Component {
  constructor() {
    super();
    this.renderAttending = this.renderAttending.bind(this);
  }

  attendMeetup() {
    this.props.attendMeetup(this.props.viewMeetup, this.props.user);
  }
  leaveMeetup() {
    this.props.leaveMeetup(this.props.viewMeetup, this.props.user);
  }
  renderButton() {
    if (this.props.viewMeetup.Users) {
     const checkUser = this.props.viewMeetup.Users.filter(user => user.id === this.props.user.id);
      if (checkUser.length > 0) {
       return ( 
                <Button 
                  text='Leave Meetup' style={{ marginTop: 10 }} 
                  onPress={this.leaveMeetup.bind(this)} 
                />
              );
      }
    }
    return ( 
            <Button 
              text='Attend' 
              style={{ marginTop: 10 }} 
              onPress={this.attendMeetup.bind(this)} 
            />
          );
  }
  renderAttending() {
    console.log(this.props.viewMeetup.Users)
    if (this.props.viewMeetup.Users) {
    const attending = this.props.viewMeetup.Users.map((user, i) => {
      return (
        <ListItem 
          key={i}
          roundAvatar
          title={user.firstName + user.lastName}
          avatar={{ url: user.profileImage }}
          onPress={() => console.log()}
        />
       
      );
    });
    return attending;
  }
  return [];
}
    render() {
      return (
        <View>
          <Card>
            <CardSection>
              <Text style={styles.headerText}>{this.props.viewMeetup.title}</Text>
            </CardSection>
            <CardSection>
              <Text>Host:{this.props.viewMeetup.createdBy}</Text>
            </CardSection>
            <CardSection>
              <Text>About:{this.props.viewMeetup.description}</Text>
            </CardSection>
            <CardSection>
              <Text>About:{this.props.viewMeetup.languages}</Text>
            </CardSection>
            <CardSection>
              <Text>When{this.props.viewMeetup.date} At:{this.props.viewMeetup.time}</Text>
            </CardSection>
            {
                this.renderButton()
            }
          </Card>

          <Card>
              <CardSection>
                <Text style={styles.headerText}>Who's going?</Text>
              </CardSection>
              {
                this.renderAttending().length > 0 ? this.renderAttending() : <Text>No users attending this meetup yet</Text>
              }
          </Card>
        </View>
      );
    }
  }

  const styles = {
    headerText: {
      fontSize: 30
    }
  }

  const mapStateToProps = state => {
    console.log(state);
    return { 
        viewMeetup: state.meetups.viewMeetup,
        user: state.auth.user
   };
  };

  export default connect(mapStateToProps, { attendMeetup, leaveMeetup })(SingletMeetup);