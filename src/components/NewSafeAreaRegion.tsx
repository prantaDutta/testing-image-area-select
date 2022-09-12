import React, {ReactNode, useEffect, useState} from 'react'
import {
  GestureResponderEvent,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native'
import ShirtIcon from './../assets/images/shirt.svg'

interface INewSafeAreaRegionProps {
  children?: ReactNode
}

const IMAGE_HEIGHT = 400
const IMAGE_WIDTH = 400

const SMALL_BOX_HEIGHT = 20
const SMALL_BOX_WIDTH = 20

interface ISmallBox {
  height: number
  width: number
}

export const showLastTwoDecimal = (num: number) =>
  (Math.round(num * 100) / 100).toFixed(2)

export const NewSafeAreaRegion: React.FC<INewSafeAreaRegionProps> = ({}) => {
  const [selectedBoxes, setSelectedBoxes] = useState<ISmallBox[]>([])

  const handleTouch = (e: GestureResponderEvent) => {
    // console.log('touchMove', e)
    const {locationX, locationY} = e.nativeEvent
    console.log('locationX: ', locationX)
    console.log('locationY: ', locationY)

    setSelectedBoxes([...selectedBoxes, {height: locationY, width: locationX}])

    console.log('selectedBoxes: ', selectedBoxes)
  }

  useEffect(() => {
    console.log('selectedBoxes: ', selectedBoxes)
  }, [selectedBoxes])

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <ShirtIcon fill="green" style={styles.image} />
        <View style={styles.absoluteContainer} onTouchStart={handleTouch}>
          {selectedBoxes.map((boxItem, i) => {
            return (
              <View
                pointerEvents="none" //
                key={`key-${i}`}
                style={[
                  styles.box,
                  {
                    backgroundColor: `orange`,
                    height: SMALL_BOX_HEIGHT,
                    width: SMALL_BOX_WIDTH,
                    left: boxItem.width - SMALL_BOX_WIDTH,
                    top: boxItem.height - SMALL_BOX_HEIGHT,
                  },
                ]}
              />
            )
          })}
        </View>
      </View>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
    // paddingTop: 30,
    // backgroundColor: 'white',
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
    // backgroundColor: 'white',
    // paddingTop: 30,
    margin: 0,
    padding: 0,
  },
  image: {
    // width: IMAGE_WIDTH,
    // height: IMAGE_HEIGHT,
  },
  absoluteContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    position: 'absolute',
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    borderWidth: 2,
    borderColor: 'orange',
  },
  box: {
    position: 'absolute',
    height: SMALL_BOX_HEIGHT,
    width: SMALL_BOX_WIDTH,
    margin: 0,
    padding: 0,
    borderRadius: 100,
    // marginVertical: 2,
  },
})
