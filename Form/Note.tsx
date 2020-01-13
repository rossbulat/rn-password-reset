import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

export const Note = (props: any) => {

  const { note } = props;

  return (
    <Text style={styles.noteText}>
      {note}
    </Text>
  );
}

export default Note;