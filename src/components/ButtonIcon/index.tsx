import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, View, Text, Image } from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  title: String;
}

export function ButtonIcon({title, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
        <View style={styles.iconWrapper}>
        <Image source={DiscordImg}/>

        </View>
        <Text style={styles.title}>
          {title}
        </Text>
    </TouchableOpacity>
  );
}