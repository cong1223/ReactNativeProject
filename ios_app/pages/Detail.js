import React from 'react';
import WebView from 'react-native-webview';

const DetailPage = props => {
  const { courseId } = props.route.params;
  return (
    <WebView
      source={{ url: 'https://ke.qq.com/course/' + courseId }}
      startInLoadingState={true}
    />
  );
};

export default DetailPage;
