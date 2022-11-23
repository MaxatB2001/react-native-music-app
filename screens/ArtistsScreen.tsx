import React, { useEffect, useState } from 'react'
import {FlatList, View} from 'react-native'
import { getLikedArtists } from '../api/SongApi';
import ArtistComponent from '../components/Artist';

const ArtistsScreen = () => {
  const [artists, setArtists] = useState();
  useEffect(() => {
    getLikedArtists().then(data => setArtists(data));
  }, [])
  return (
    <View>
      <FlatList
          data={artists}
          renderItem={({item}) => <ArtistComponent artist={item}/>}
          keyExtractor={item => item._id}
        />
    </View>
  )
}

export default ArtistsScreen