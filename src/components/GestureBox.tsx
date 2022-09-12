import React, {ReactNode, useMemo, useRef} from 'react'
import {
  Animated,
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native'

const CURSOR_SIDE_SIZE = 40
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2

const IMAGE_HEIGHT = 400
const IMAGE_WIDTH = 400

const SMALL_BOX_HEIGHT = 20
const SMALL_BOX_WIDTH = 20

interface IGestureBox {
  children?: ReactNode
}

export const GestureBox: React.FC<IGestureBox> = () => {
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
      <Image
        style={[
          styles.image,
          {height: dimensions.height, width: dimensions.width / 2},
        ]}
        source={require('./../assets/images/shirt.png')}
      />
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
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
  },
  box: {
    position: 'absolute',
    height: CURSOR_SIDE_SIZE,
    width: CURSOR_SIDE_SIZE,
    borderRadius: CURSOR_HALF_SIDE_SIZE,
    backgroundColor: 'orange',
  },
})
