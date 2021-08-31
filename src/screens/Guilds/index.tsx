import React from 'react';
import { View, FlatList } from 'react-native';
import Guild, { GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

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
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{marginBottom: 69, paddingTop:104}}
        renderItem={({item}) => (
          <Guild 
            data={item}
            onPress={() => handleGuildSelect(item)}
          />
        )}
        ItemSeparatorComponent={() => <ListDivider isCentered/>}
        ListHeaderComponent={() => <ListDivider isCentered/>}
      />
    </View>
  )
}

export default Guilds;