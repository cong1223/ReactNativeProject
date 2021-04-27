import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

const PageLoading = () => {
  return (
    <View style={styles.pageLoading}>
      <Image
        style={styles.loadingPic}
        source={require('../../assets/img/loading.gif')}
      />
    </View>
  );
};

export default PageLoading;
