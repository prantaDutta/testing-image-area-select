import React, {useState} from 'react'
import {Image, Pressable, StyleSheet, View} from 'react-native'

// const imageData = [
//   {
//     backgroundColor: 'rgba(220,20,60,0.2)',
//     height: 150,
//     width: 150,
//   },
//   {
//     backgroundColor: 'rgba(205,92,92,0.5)',
//     height: 150,
//     width: 150,
//   },
//   {
//     backgroundColor: 'rgba(255,165,0, 0.4)',
//     height: 150,
//     width: 150,
//   },
//   {
//     backgroundColor: 'rgba(128,128,0, 0.6)',
//     height: 150,
//     width: 150,
//   },
// ]

const IMAGE_HEIGHT = 400
const IMAGE_WIDTH = 400

const SMALL_BOX_HEIGHT = 20
const SMALL_BOX_WIDTH = 20

export const ImageArea: React.FC = () => {
  const totalBoxes =
    (IMAGE_HEIGHT * IMAGE_WIDTH) / (SMALL_BOX_HEIGHT * SMALL_BOX_WIDTH)
  const [selectedBoxes, setSelectedBoxes] = useState<number[]>([])

  const handleBoxPress = (boxId: number) => {
    const isSelected = selectedBoxes.includes(boxId)
    if (isSelected) {
      setSelectedBoxes(selectedBoxes.filter(box => box !== boxId))
    } else {
      setSelectedBoxes([...selectedBoxes, boxId])
    }
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('./../assets/images/shirt.png')}
      />
      <View style={styles.absoluteContainer}>
        {/* {imageData.map((image, index) => {
          const {backgroundColor, height, width} = image
          return (
            <View
              key={index}
              style={[styles.box, {backgroundColor, height, width}]}
            />
          )
        })} */}
        {[...Array(totalBoxes).keys()].map((_box, index) => {
          const isSelected = selectedBoxes.includes(_box)
          const selectedColor = isSelected ? `green` : `transparent`
          return (
            <Pressable
              key={index}
              style={[styles.box, {backgroundColor: selectedColor}]}
              onPress={() => handleBoxPress(_box)}
            />
          )
        })}
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
    backgroundColor: 'white',
    // paddingTop: 30,
    margin: 0,
    padding: 0,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
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
    height: SMALL_BOX_HEIGHT,
    width: SMALL_BOX_WIDTH,
    margin: 0,
    padding: 0,
    borderRadius: 100,
    // marginVertical: 2,
  },
})
