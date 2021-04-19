import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const Logo = () => {
  return (
    <Image
      style={styles.logo}
      source={require('../../assets/img/logo.png')}
    />
  );
};

export default Logo;
