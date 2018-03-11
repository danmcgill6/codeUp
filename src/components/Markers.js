import React from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';


 const Markers = (props) => {
    const markers = props.meetups.map(meetup => {
        return (
            <Mapbox.PointAnnotation
            key='pointAnnotation'
            id='pointAnnotation'
            coordinate={[parseFloat(meetup.lng), parseFloat(meetup.lat)]}>
    
            <View style={styles.annotationContainer}>
              <View style={styles.annotationFill} />
            </View>
            <Mapbox.Callout title='Look! An annotation!' />
          </Mapbox.PointAnnotation>
        );
     });
  return (
      <View>
      {
          markers
      }  
      </View>
  );   
};

const styles = StyleSheet.create({
    annotationContainer: {
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 15,
    },
    annotationFill: {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: 'orange',
      transform: [{ scale: 0.6 }],
    }
  });

export default Markers;
