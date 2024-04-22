import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const Map = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    // Récupérer les données depuis votre API
    const fetchData = async () => {
      try {
        // requête axios pour obtenir les données des stations
        const response = await axios.get('http://127.0.0.1:8000/api/list');
        setStations(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{flex: 1, borderRadius: 15}}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 35.7595, // Latitude par défaut (par exemple)
          longitude: -5.833, // Longitude par défaut (par exemple)
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}>
        {stations.map(station => (
          <Marker
            key={station.id_station}
            coordinate={{
              latitude: station.latitude,
              longitude: station.longitude,
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
