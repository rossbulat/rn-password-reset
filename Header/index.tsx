import React, { useState, useEffect } from 'react'
import { View, Text, Animated, Easing } from 'react-native'
import { useScroller } from '../ScrollContext'
import { styles } from './styles'

export const Header = (props: any) => {

  const { titleShowing, opacity } = useScroller();

  const [titleFade] = useState(
    new Animated.Value(props.disableFade === true ? 1 : 0)
  );

  useEffect(() => {

    if (props.disableFade)
      return;

    titleShowing === false &&
      Animated.timing(
        titleFade, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.sin
      }).start();

    titleShowing === true &&
      Animated.timing(
        titleFade, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.sin
      }).start();
  });

  const propStyles = props.style ? props.style : {};
  const textColor = props.color ? props.color : '#000';

  return (
    <View style={{
      ...styles.header,
      shadowColor: '#333',
      shadowOpacity: props.disableFade ? 1 : opacity,
      ...propStyles
    }}>
      <View style={styles.headerLeft}>
        {props.headerLeft !== undefined && props.headerLeft}
      </View>
      <Animated.View
        style={{
          opacity: titleFade,
          ...styles.headerTitle,
        }}
      >
        <Text style={{ ...styles.title, color: textColor }}>
          {props.title}
        </Text>
      </Animated.View>
      <View style={styles.headerRight}>
        {props.headerRight !== undefined && props.headerRight}
      </View>
    </View>
  )
}

export default Header;