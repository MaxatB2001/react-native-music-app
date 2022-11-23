import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20
  },
  artist: {
    color: 'lightgray',
    fontSize: 16,
    margin: 10
  },
  image: {
    height: 250,
    width: 250,
    margin: 15,
    borderRadius: 10
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  buttons: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
})

export default styles;