import React from 'react'
import { View, TextInput } from 'react-native'
import { styles } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ErrorMessage } from './ErrorMessage'

export const TextInputWithIcon = (props: any) => {

  const { ionIcon, name, ...rest } = props;

  return (
    <>
      <View style={styles.inputWrap}>
        <View style={styles.inputIcon}>
          <Ionicons
            name={ionIcon}
            size={25}
            color='#ccc'
          />
        </View>
        <TextInput {...rest} />
      </View>
      <ErrorMessage name={name} />
    </>
  );
}

export default TextInputWithIcon;