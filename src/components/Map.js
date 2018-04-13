import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { connect } from 'react-redux';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { Button } from 'react-native-elements';
import { viewMeetup } from '../actions';

Mapbox.setAccessToken(process.env.MAPBOX);

export class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { latitude: 40.7128, longitude: 74.0060 };
  }

 componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('position', position);
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude * -1,
          error: null,
        });
  })
  .catch(err => console.log(err));
}

eventHandler(meetup) {
  this.props.viewMeetup(meetup);
}

  render() {
    console.log(this.props.meetups);
    // const filteredMeetups = this.props.meetups.filter(meetup => )
  const markers = this.props.meetups.map(meetup => {
    return (
        <Mapbox.PointAnnotation
          key='pointAnnotation'
          id='pointAnnotation'
          coordinate={[parseFloat(meetup.lng), parseFloat(meetup.lat)]}>
          <View style={styles.annotationContainer}>
            <Button 
              style={styles.annotationFill} 
              color='#f0f' 
              text="  " 
              onPress={() => this.eventHandler(meetup)} 
            /> 
          </View>
        <Mapbox.Callout title='Look! An annotation!' />
      </Mapbox.PointAnnotation>
    );
 });
    return (
      <View style={styles.container}>
        <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={10}
            centerCoordinate={[this.state.longitude,this.state.latitude]}
            style={styles.container}>
            {markers}
        </Mapbox.MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    height: 30,
    borderRadius: 40,
    backgroundColor: 'orange',
    transform: [{ scale: 0.6 }],
  }
});

const mapStateToProps = (state) => {
  return {
      meetups: state.meetups.meetups
  };
 };

 export default connect(mapStateToProps, { viewMeetup })(Map);
