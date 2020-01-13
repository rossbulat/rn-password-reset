import React from 'react'
import { View, TextInput as TextInputNative } from 'react-native'
import { styles } from './styles'
import { ErrorMessage } from './ErrorMessage'
import { InputLabel } from './InputLabel'

export const TextInput = (props: any) => {

  const { name, label, ...rest } = props;

  delete props['name'];
  delete props['label'];

  return (
    <>
      {label !== undefined &&
        <InputLabel label={label} />
      }
      <View style={{ backgroundColor: '#f2f2f2', ...styles.inputWrap }}>
        <TextInputNative
          {...rest}
        />
      </View>
      <ErrorMessage name={name} />
    </>
  );
}

export default TextInput;