import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

const TabItem = props => {
  const { data, onTabClick, curIndex, styles, index } = props;
  return (
    <View style={[styles.tabItem, curIndex === index && styles.tabItemCurrent]}>
      <TouchableWithoutFeedback onPress={() => onTabClick(data.field, index)}>
        <Text
          style={[
            styles.tabItemText,
            curIndex === index && styles.tabItemTextCurrent
          ]}
        >
          {data.field_name}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default TabItem;
