import { StyleSheet } from 'react-native';
import { screenSize } from '../../utils/tools';

const styles = StyleSheet.create({
  tabContainer: {
    height: 35,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
    borderBottomWidth: 1
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent'
  },
  tabItemCurrent: {
    borderBottomColor: '#23b8ff'
  },
  tabItemText: {
    fontSize: 14,
    color: '#333'
  },
  tabItemTextCurrent: {
    color: '#23b8ff'
  }
});

export default styles;
