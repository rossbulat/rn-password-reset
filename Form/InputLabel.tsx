import React from 'react'
import { Text } from 'react-native'
import { styles } from './styles'

export const InputLabel = (props: any) => {

  const { label } = props;

  return (
    <Text style={styles.inputLabel}>
      {label}
    </Text>
  )
}

export default InputLabel;