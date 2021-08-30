import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from 'react-native';

import { styles } from './styles';

import { BackGround } from '../BackGround';

type Props = ModalProps & {
  children: ReactNode;
}

export function ModalView({
  children, 
  ...rest
}: Props){
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
      <TouchableWithoutFeedback onPress={() =>{}}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <BackGround>
              <View style={styles.bar} />
              {children}
            </BackGround>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}