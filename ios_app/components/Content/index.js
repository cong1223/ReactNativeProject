import React, { useState } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import styles from './styles';

const Content = (props) => {
  const [text, setText] = useState('');
  return (
    <TouchableWithoutFeedback onPress={props.onViewClick}>
      <View style={styles.container}>
        <Text style={styles.text}>{props.contentText}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Content;
