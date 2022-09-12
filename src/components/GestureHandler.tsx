import React, {ReactNode, useMemo, useRef} from 'react'
import {Animated, StyleSheet, useWindowDimensions, View} from 'react-native'

const CURSOR_SIDE_SIZE = 50
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2

interface IGestureHandler {
  children?: ReactNode
}

export const GestureHandler: React.FC<IGestureHandler> = () => {
  const dimensions = useWindowDimensions()

  const initialXY = useMemo(
    () => ({
      x: dimensions.width / 2 - CURSOR_HALF_SIDE_SIZE,
      y: dimensions.height / 2 - CURSOR_HALF_SIDE_SIZE,
    }),
    [dimensions],
  )

  const touch = useRef(new Animated.ValueXY(initialXY)).current

  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onResponderRelease={() => {
        Animated.spring(touch, {
          toValue: initialXY,
          // left/top are not supported
          useNativeDriver: false,
        }).start()
      }}
      onResponderMove={event => {
        touch.setValue({
          x: event.nativeEvent.locationX,
          y: event.nativeEvent.locationY,
        })
      }}>
      <Animated.View
        style={[
          styles.box,
          {
            left: Animated.subtract(touch.x, CURSOR_HALF_SIDE_SIZE),
            top: Animated.subtract(touch.y, CURSOR_HALF_SIDE_SIZE),
          },
        ]}
      />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    position: 'absolute',
    height: CURSOR_SIDE_SIZE,
    width: CURSOR_SIDE_SIZE,
    borderRadius: CURSOR_HALF_SIDE_SIZE,
    backgroundColor: 'orange',
  },
})
