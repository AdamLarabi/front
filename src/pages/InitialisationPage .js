// InitialisationPage.tsx
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const InitialisationPage = () => {
  const navigation = useNavigation();

  // Fonction pour initialiser les données météorologiques et naviguer vers la page Acceuil
  const initializeWeatherData = async () => {
    // Simulation de l'initialisation des données météorologiques depuis une API
    const simulatedWeatherData = {
      location: {
        name: 'Ville',
        region: 'Région',
      },
      current: {
        temp_f: 75, // Température en degrés Fahrenheit
        condition: {
          text: 'Ensoleillé', // Condition météorologique actuelle
        },
        precip_mm: 0.5, // Précipitation en millimètres
      },
      hourly: {
        time: [1620958800, 1620962400, 1620966000], // Exemple de données de temps
        temp_f: [70, 72, 74], // Exemple de données de température horaire
        condition: {
          text: ['Ensoleillé', 'Partiellement nuageux', 'Nuageux'], // Exemple de données de condition horaire
        },
        precip_mm: [0.1, 0.2, 0.3], // Exemple de données de précipitation horaire
      },
    };

    // Attendez un peu de temps pour simuler l'appel à une API
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Naviguer vers la page Acceuil avec les données initialisées
    navigation.navigate('Acceuil', {weatherData: simulatedWeatherData});
  };

  useEffect(() => {
    // Appeler la fonction d'initialisation des données météorologiques au chargement de la page
    initializeWeatherData();
  }, []);

  return null; // La page InitialisationPage ne rend aucun contenu visible
};

export default InitialisationPage;
