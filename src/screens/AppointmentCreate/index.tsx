import React, {useState} from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { ButtonIcon } from '../../components/ButtonIcon';
import { CategorySelect } from '../../components/CategorySelect';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { GuildProps } from '../../components/Guild';
import { ModalView } from '../../components/ModalView';
import Guilds from '../Guilds';
import { GuildIcon } from '../../components/GuildIcon';

export const AppointmentCreate: React.FC = () => {
  const [category, setCategory] = useState('');
  const [openGuildsModal, setOpenGuildsModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleCloseGuilds(){
    setOpenGuildsModal(false);
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setOpenGuildsModal(false);
    setGuild(guildSelected);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
      style={styles.container}
    >
      <ScrollView>
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
          <RectButton onPress={handleOpenGuilds}>
            <View style={styles.select}>
              {guild.icon ? <GuildIcon/> : <View style={styles.image}/>}
              <Text style={styles.label}>
                {guild.name ? guild.name : 'Selecione um servidor'}
              </Text>
              <Feather 
                name="chevron-right"
                color={theme.colors.heading}
                size={18}
              />
            </View>
          </RectButton>
          
          <View style={styles.field}>
            <View>
              <Text style={[styles.label, {marginBottom: 12}]}>
                Dia e mês
              </Text>
              <View style={styles.collumn}>
                <SmallInput maxLength={2}/>
                <Text style={styles.divider}>
                  /
                </Text>
                <SmallInput maxLength={2}/>
              </View>
            </View>

            <View>
              <Text style={[styles.label, {marginBottom: 12}]}>
                Hora e minuto
              </Text>
              <View style={styles.collumn}>
                <SmallInput maxLength={2}/>
                <Text style={styles.divider}>
                  :
                </Text>
                <SmallInput maxLength={2}/>
              </View>
            </View>
          </View>

          <View style={[styles.field, {marginBottom: 12}]}>
            <Text style={styles.label}>
              Descrição
            </Text>

            <Text style={styles.caracteresLimit}>
              Max 100 caracteres
            </Text>
          </View>
          
          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
          />

          <View style={styles.footer}>
            <Button title="Agendar" />
          </View>
        </View>
      </ScrollView>

      <ModalView 
        visible={openGuildsModal}
        closeModal={handleCloseGuilds}
      >
        <Guilds handleGuildSelect={handleGuildSelect}/>
      </ModalView>
    </KeyboardAvoidingView>
  );
}