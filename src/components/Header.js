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
import Menu from '../components/Menu';
import Map from '../components/Map';

const Header = ({navigation}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [slideAnimation] = useState(new Animated.Value(-300)); // initial position, hors de l'écran

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

  const handleRefresh = () => {
    console.log('Page refreshed!');
  };

  return (
    <TouchableWithoutFeedback onPress={handleCloseMenu}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleMenu}>
            <Image
              style={styles.menu}
              source={require('../assets/icons/menu.png')}
            />
          </TouchableOpacity>

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
            <Menu navigation={navigation} />
          </Animated.View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', // Utilisez la position absolue
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999, // Assurez-vous que le menu s'affiche au-dessus de tout le reste
    padding: 25,
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
  refresh: {
    height: 39,
    width: 39,
  },
});

export default Header;
