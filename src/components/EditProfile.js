import React, { Component } from 'react';
import {Input, Card, FormLabel, FormInput, Text } from 'react-native-elements';

export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', bio: '', github: '', picture: '' };
      }

      onSubmit() {
        this.props.createMeetup(this.state);
      }
      changeName(text) {
        console.log(this.state);
        this.setState({ street: text });
      }
      changeBio(text) {
        console.log(this.state);
        this.setState({ city: text });
      }
      changePicture(text) {
        console.log(this.state);
        this.setState({ title: text });
      }
      changeGithub(text) {
        console.log(this.state);
        this.setState({ description: text });
      }
    render() {
      return (
         <Card>
              <Input
              placeholder='Name'
              value={this.state.name}
              onChangeText={this.changeName.bind(this)}
            />
             <Input
              placeholder='Bio'
              value={this.state.bio}
              onChangeText={this.changeBio.bind(this)}
            />
             <Input
              placeholder='Github URL'
              value={this.state.github}
              onChangeText={this.changePicture.bind(this)}
            />
             <Input
              placeholder='Picture'
              value={this.state.picture}
              onChangeText={this.changeGithub.bind(this)}
            />
          </Card>
      );
    }
  }