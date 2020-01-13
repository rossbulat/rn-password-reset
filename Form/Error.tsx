import React from 'react'
import { View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { styles } from './styles'

export const Error = (props: any) => {

  const { error } = props;

  if (error === null) {
    return (<></>);
  }

  return (
    <View style={styles.error}>
      <Ionicons name='ios-warning' size={22} style={styles.errorIcon} />
      <Text style={styles.errorText}>
        {error}
      </Text>
    </View>
  );
}

export default Error;