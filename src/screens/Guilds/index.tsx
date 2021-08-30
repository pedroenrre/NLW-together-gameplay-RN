import React from 'react';
import { View, FlatList } from 'react-native';
import Guild, { GuildProps } from '../../components/Guild';

import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

const Guilds = ({handleGuildSelect} : Props) => {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    }
  ]
  return (
    <View>
      <FlatList 
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Guild 
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
      />
    </View>
  )
}

export default Guilds;