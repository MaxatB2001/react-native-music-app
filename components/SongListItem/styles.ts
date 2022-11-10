import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  artist: {
    color: 'lightgray',
    fontSize: 16,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10
  },
  rightContainer: {
    justifyContent: 'space-around',
    marginLeft: 10
  }
})

export default styles;