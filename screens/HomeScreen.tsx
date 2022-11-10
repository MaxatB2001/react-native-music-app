import { StyleSheet, Text, View, FlatList } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';
import PlayerWidget from '../components/PlayerWidget';
import { RootTabScreenProps } from '../types';

export default function HomeScreen() {

  const album = [
    {
      id: '1',
      imageUri: 'https://i1.sndcdn.com/artworks-000527526030-oeg5io-t500x500.jpg',
      artist: 'King Gnu',
      title: 'King Gnu'
    },
    {
      id: '2',
      imageUri: 'https://i1.sndcdn.com/artworks-000527526030-oeg5io-t500x500.jpg',
      artist: 'King Gnu',
      title: 'King Gnu'
    },
    {
      id: '3',
      imageUri: 'https://i1.sndcdn.com/artworks-000527526030-oeg5io-t500x500.jpg',
      artist: 'King Gnu',
      title: 'King Gnu'
    },
    ];

    const albumCategoriesArray = [
      {
        id: '1',
        title: 'Best music',
        albums: [
          {
            id: '1',
            imageUri: 'https://i1.sndcdn.com/artworks-000527526030-oeg5io-t500x500.jpg',
            artist: 'King Gnu',
            name: 'King Gnu'
          },
          {
            id: '2',
            imageUri: 'https://i1.sndcdn.com/artworks-000527526030-oeg5io-t500x500.jpg',
            artist: 'King Gnu',
            name: 'King Gnu'
          },
          {
            id: '3',
            imageUri: 'https://i1.sndcdn.com/artworks-000527526030-oeg5io-t500x500.jpg',
            artist: 'King Gnu',
            name: 'King Gnu'
          },
          ]
      },
      {
        id: '2',
        title: 'Most popular',
        albums: [
          {
            id: '1',
            imageUri: 'https://i1.sndcdn.com/artworks-000527526030-oeg5io-t500x500.jpg',
            artist: 'King Gnu',
            name: 'King Gnu'
          },
          {
            id: '2',
            imageUri: 'https://i1.sndcdn.com/artworks-000527526030-oeg5io-t500x500.jpg',
            artist: 'King Gnu',
            name: 'King Gnu'
          },
          {
            id: '3',
            imageUri: 'https://i1.sndcdn.com/artworks-000527526030-oeg5io-t500x500.jpg',
            artist: 'King Gnu',
            name: 'King Gnu'
          },
          ]
      },
      {
        id: '3',
        title: 'King gnu',
        albums: [
          {
            id: '1',
            imageUri: 'https://i1.sndcdn.com/artworks-000527526030-oeg5io-t500x500.jpg',
            artist: 'King Gnu',
            name: 'King Gnu'
          },
          {
            id: '2',
            imageUri: 'https://i1.sndcdn.com/artworks-000527526030-oeg5io-t500x500.jpg',
            artist: 'King Gnu',
            name: 'King Gnu'
          },
          {
            id: '3',
            imageUri: 'https://i1.sndcdn.com/artworks-000527526030-oeg5io-t500x500.jpg',
            artist: 'King Gnu',
            name: 'King Gnu'
          },
          ]
      }
    ]

  return (
    <View style={styles.container}>
      <FlatList
        data={albumCategoriesArray}
        renderItem={({item}) => (
          <AlbumCategory 
            title={item.title} 
            albums={item.albums}
          />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff'
  }
});
