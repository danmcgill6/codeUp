import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Card, CardSection } from './common';
import { attendMeetup } from '../actions';

export class SingletMeetup extends Component {
  attendMeetup() {
    this.props.attendMeetup(this.props.viewMeetup, this.props.user);
  }

    render() {
      return (
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
            <Text>When{this.props.viewMeetup.date} At:{this.props.viewMeetup.time}</Text>
          </CardSection>
          <Button text="Attend" style={{ marginTop: 10 }} />
        </Card>
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
  }
  
   const mapDispatch = state => {
   
  };
  
  export default connect(mapStateToProps, { attendMeetup })(SingletMeetup);