import React from 'react';
import { RefreshControl } from 'react-native';

const MyRefreshControl = props => {
  const { refreshing, onPageRefresh } = props;
  return (
    <RefreshControl
      title="正在加载中"
      refreshing={refreshing}
      onRefresh={onPageRefresh}
      tintColor="#666"
      titleColor="#666"
    />
  );
};

export default MyRefreshControl;
