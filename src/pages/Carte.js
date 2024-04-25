import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Background from '../components/Background';
import Header from '../components/Header';
import axios from 'axios';

const Carte = ({navigation}) => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.11.101:8000/api/list');
        setStations(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Background>
      <Header navigation={navigation} />
      <View style={{flex: 1, borderRadius: 25}}>
        <MapView
          style={{
            marginTop: 85,
            height: '80%',
            width: '100%',
          }}
          initialRegion={{
            latitude: 35.7595, // Default latitude
            longitude: -5.833, // Default longitude
            latitudeDelta: 10,
            longitudeDelta: 10,
          }}
          provider="google">
          {stations.map(station => (
            <Marker
              key={station.id_station}
              coordinate={{
                latitude: parseFloat(station.latitude),
                longitude: parseFloat(station.longitude),
              }}
              title={`Station ${station.id_station}`}
              description={`Altitude: ${station.altitude}`}
            />
          ))}
        </MapView>
      </View>
    </Background>
  );
};

export default Carte;
