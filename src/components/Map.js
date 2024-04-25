import React from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const Map = ({stations}) => {
  return (
    <View style={{flex: 1, borderRadius: 15, height: '100%', width: '100%'}}>
      <MapView
        style={{flex: 1, height: '100%', width: '100%'}}
        initialRegion={{
          latitude: 35.7595, // Default latitude
          longitude: -5.833, // Default longitude
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}>
        {/* Render markers using stations data */}
        {stations.map(station => (
          <Marker
            key={station.id_station}
            coordinate={{
              latitude: parseFloat(station.latitude), // Convert latitude to float
              longitude: parseFloat(station.longitude), // Convert longitude to float
            }}
            title={`Station ${station.id_station}`}
            description={`Altitude: ${station.altitude}`}
          />
        ))}
      </MapView>
    </View>
  );
};

export default Map;
