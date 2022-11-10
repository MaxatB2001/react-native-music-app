import React, { FC, ReactNode } from 'react'
import { FlatList } from 'react-native'
import { Song } from '../../types'
import SongListItem from '../SongListItem';
import styles from './styles';

export type SongListProps = {
  songs: Array<Song>;
  header?: FC;
}

const SongList: FC<SongListProps> = ({songs, header}) => {
  return (
    <FlatList
        style={styles.container}
        data={songs}
        renderItem={({item}) => <SongListItem song={item}/>}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={header}
      />
  )
}

export default SongList