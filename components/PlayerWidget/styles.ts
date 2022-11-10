import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 49,
    backgroundColor: '#131313',
    width: '100%', 
    borderBottomWidth: 2,
  },
  row: {
    flexDirection:'row'
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 60,
    height: 60
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  artist: {
    color: 'lightgray',
    fontSize: 18,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around'
  },
  rightContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  },
  progress: {
    height: 3,
    backgroundColor: '#bcbcbc'
  }
});

export default styles;