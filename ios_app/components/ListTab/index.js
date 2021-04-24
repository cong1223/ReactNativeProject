import React from 'react';
import { View, ScrollView } from 'react-native';
import TabItem from './TabItem';
import styles from './styles';

const ListTab = props => {
  const { fieldData, onTabClick, curIndex } = props;
  return (
    <View style={styles.tabContainer}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {fieldData.map((item, index) => {
          return (
            <TabItem
              data={item}
              index={index}
              key={index}
              curIndex={curIndex}
              onTabClick={onTabClick}
              styles={styles}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ListTab;
