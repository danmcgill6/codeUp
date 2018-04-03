import React, { Component } from 'react';
import { DatePickerIOS } from 'react-native';
import { connect } from 'react-redux';
import { Input, Card, Button, Text } from 'react-native-elements';
import { createMeetup } from '../actions';

export class PostMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = { street: '', city: '', state: '', title: '', description: '', languages: '',time: '4:02pm', date: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  
  onSubmit() {
    this.props.createMeetup(this.state);
  }
  setStreet(text) {
    console.log(this.state);
    this.setState({ street: text });
  }
  setCity(text) {
    console.log(this.state);
    this.setState({ city: text });
  }
  setTitle(text) {
    console.log(this.state);
    this.setState({ title: text });
  }
  setDescription(text) {
    console.log(this.state);
    this.setState({ description: text });
  }
  setLanguage(text) {
    console.log(this.state);
    this.setState({ languages: text });
  }
  setDate(newDate) {
    console.log(this.state);
    this.setState({ date: newDate });
  }
  newState(text) {
    console.log(this.state);
    this.setState({ state: text });
  }
 
    render() {
      return (
   
          <Card>
            <Text h2>Meetup Info:</Text>
            <Input
              placeholder='Title'
              value={this.state.title}
              onChangeText={this.setTitle.bind(this)}
            />
             <Input
              placeholder='Street'
              value={this.state.street}
              onChangeText={this.setStreet.bind(this)}
            />
             <Input
              placeholder='City'
              value={this.state.city}
              onChangeText={this.setCity.bind(this)}
            />
             <Input
              placeholder='State'
              value={this.state.state}
              onChangeText={this.newState.bind(this)}
            />
             <Input
              placeholder='Languages'
              value={this.state.labguages}
              onChangeText={this.setLanguage.bind(this)}
            />
             <Input
              placeholder='Description'
              value={this.state.description}
              onChangeText={this.setDescription.bind(this)}
            />

          <Text h3>When:</Text>

          <DatePickerIOS 
           date={this.state.date}
           onDateChange={this.setDate}
          />
          <Button text="Submit" onPress={this.onSubmit.bind(this)}/>
          </Card>
               
      
      );
    }
  }

export default connect(null, { createMeetup })(PostMeetup);

