import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import Background from '../components/Background';
import Menu from '../components/Menu';
import Menu from '../components/Map';

const Acceuil = ({route}) => {
  // Extract weather data from navigation parameters
  const {weatherData} = route.params;

  // Check if weather data is available
  if (!weatherData) {
    return <Text style={styles.errorText}>No weather data available</Text>;
  }

  // Extract weather data
  const {location, current, hourly} = weatherData;
  const flashOpacity = useState(new Animated.Value(0))[0];
  const [showFlash, setShowFlash] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const slideAnimation = useState(new Animated.Value(-300))[0]; // initial position, hors de l'écran

  const openMenu = () => {
    setMenuOpen(true);

    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(slideAnimation, {
      toValue: -300,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setMenuOpen(false);
    });
  };

  const handleMenu = () => {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  const handleCloseMenu = () => {
    if (menuOpen) {
      closeMenu();
    }
  };

  const StayIn = () => {
    console.log('empecheeee le!');
  };

  const handleRefresh = () => {
    setShowFlash(true);

    setTimeout(() => {
      setShowFlash(false);
    }, 500);
    console.log('Page refreshed!');
  };

  useEffect(() => {
    if (showFlash) {
      Animated.sequence([
        //kadir bzaf dyal animation
        Animated.timing(flashOpacity, {
          toValue: 0.9,
          duration: 270,
          useNativeDriver: true,
        }),
        Animated.timing(flashOpacity, {
          toValue: 0,
          duration: 270,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [showFlash]);

  return (
    <Background>
      <TouchableWithoutFeedback onPress={handleCloseMenu}>
        <View style={styles.container}>
          {showFlash && (
            <Animated.View style={[styles.flash, {opacity: flashOpacity}]} />
          )}
          <>
            <View style={styles.header}>
              <TouchableOpacity onPress={handleMenu}>
                <Image
                  style={styles.menu}
                  source={require('../assets/icons/menu.png')}
                />
              </TouchableOpacity>
              <Text style={styles.locationText}>
                {location.name}, {location.region}
              </Text>
              <TouchableOpacity onPress={handleRefresh}>
                <Image
                  style={styles.refresh}
                  source={require('../assets/icons/refresh.png')}
                />
              </TouchableOpacity>
            </View>
            {menuOpen && (
              <Animated.View
                style={[
                  styles.menuContainer,
                  {transform: [{translateX: slideAnimation}]},
                ]}>
                <Menu onPress={StayIn} />
              </Animated.View>
            )}
          </>

          <View>
            <Map />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130b02',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 45,
  },
  menu: {
    height: 39,
    width: 39,
  },
  menuContainer: {
    position: 'absolute',
    top: 80,
    left: 0,
    height: '60%',
    zIndex: 4,
    borderRadius: 15,
  },
  locationText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  refresh: {
    height: 39,
    width: 39,
  },
  weatherInfoContainer: {
    marginBottom: 20,
    marginLeft: 20,
  },
  weatherInfo: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 5,
  },
  forecastTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
  forecastItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  forecastTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  forecastInfoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  forecastInfo: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 3,
  },
  flash: {
    ...StyleSheet.absoluteFillObject, //cover the entire screen
    backgroundColor: 'white',
  },
});

export default Acceuil;
