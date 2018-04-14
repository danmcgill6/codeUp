import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions/AuthActions';
import { Card, CardSection, Button, Input, Spinner } from './common';


export class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };


    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        console.log(email, password);
        this.props.loginUser({ email, password });
    }
  
    
    renderError() {
        if (this.props.error) { 
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }
    
    renderButton() {
        if (this.props.loading) {
            return <Spinner size='large' />;
        }

        return ( 
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
     }

    render() {
      return (
      <View style={styles.container}>
        <Card>
          <CardSection>
            <Input 
                placeholder='user@gmail.com'
                label="Email:"
                value={this.state.text}
                onChangeText={this.onEmailChange.bind(this)}
                value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input 
                secureTextEntry
                placeholder='Password'
                label="Password:"
                value={this.state.password}
                onChangeText={this.onPasswordChange.bind(this)}
            />
          </CardSection>
          {
              this.renderError()
          }
          <CardSection>
          {
              this.renderButton()
          }
          </CardSection>
        </Card>
    </View>
      );
    }
  }

  const styles = {
      errorTextStyle: {
          fontSize: 20,
          alignSelf: 'center',
          color: 'red'
      },
      container: {
          marginTop: 125,
      }
  };

  const mapStateToProps = state => {
      return { 
          email: state.auth.email,
          password: state.auth.password,
          error: state.auth.error,
          loading: state.auth.loading
     };
  };

  export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
