import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import Logo from '../components/Logo';

const SplashScreen = ({ navigation }: { navigation: any }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.replace('CreateAccount');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity }}>
        <Logo size={180} />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9C74F', // your brand yellow
    justifyContent: 'center',
    alignItems: 'center',
  },
});
