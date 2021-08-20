import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { ButtonIcon } from '../../components/ButtonIcon';
import { CategorySelect } from '../../components/CategorySelect';

export const AppointmentCreate: React.FC = () => {
  const [category, setCategory] = useState('');

  return (
    <>
      <Header
        title="Agendar partida"
      />
      <Text style={[
        styles.label,
        {marginLeft: 24, marginTop: 36, marginBottom: 16}]}
      
      >
        Categoria
      </Text>
      <CategorySelect 
        hasCheckBox
        categorySelected={category}
        setCategory={setCategory}
      />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            <View style={styles.image}/>
            <Text style={styles.label}>
              Selecione um servidor
            </Text>
            <Feather 
              name="chevron-right"
              color={theme.colors.heading}
              size={18}
            />
          </View>
        </RectButton>
      </View>

      
    </>
  );
}