import React from 'react'
import { View, TextInput } from 'react-native'
import { styles } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ErrorMessage } from './ErrorMessage'

export const TextInputWithIcon = (props: any) => {

  const { ionIcon, name, ...rest } = props;

  delete props['ionIcon'];
  delete props['name'];

  return (
    <>
      <View style={{ backgroundColor: '#f2f2f2', ...styles.inputWrap }}>
        <View style={styles.inputIcon}>
          <Ionicons
            name={ionIcon}
            size={25}
            color='#ccc'
          />
        </View>
        <TextInput
          {...rest}
        />
      </View>
      <ErrorMessage name={name} />
    </>
  );
}

export default TextInputWithIcon;