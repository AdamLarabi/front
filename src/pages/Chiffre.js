import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import axios from 'axios';

const Chiffre = ({navigation}) => {
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
      <View
        style={{
          marginTop: 100,
          flex: 1,
          marginLeft: 40,
        }}>
        {stations.map(station => (
          <View key={station.id_station} style={{marginBottom: 20}}>
            <Text style={{fontSize: 22, color: '#fff', fontWeight: 'bold'}}>
              Station {station.id_station}
            </Text>
            <Text style={{fontSize: 18, color: '#fff'}}>
              Latitude: {station.latitude}
            </Text>
            <Text style={{fontSize: 18, color: '#fff'}}>
              Longitude: {station.longitude}
            </Text>
            <Text style={{fontSize: 18, color: '#fff'}}>
              Altitude: {station.altitude}
            </Text>
          </View>
        ))}
      </View>
    </Background>
  );
};

export default Chiffre;
