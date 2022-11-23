import React, { FC } from 'react'
import {FlatList, View} from 'react-native'
import { AlbumType } from '../../types'
import Album from '../Album'

type AlbumListProps = {
  data: Array<AlbumType>
  header?: JSX.Element
  footer?: JSX.Element
}

const AlbumList: FC<AlbumListProps> = ({data, footer, header}) => {
  return (
      <FlatList 
      columnWrapperStyle={{flexGrow: 1, justifyContent: 'center'}}
          data={data}
          renderItem={({item}) => <Album album={item}/>}
          keyExtractor={item => item._id}
          numColumns={2}
          // contentContainerStyle={{flexGrow: 1, justifyContent: 'center', width:'100%'}}
          ListHeaderComponent={header}
          ListFooterComponent={footer}
         />
  )
}

export default AlbumList