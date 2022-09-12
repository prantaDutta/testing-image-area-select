import React from 'react'
import {SafeAreaView} from 'react-native'
import {SelectAreaRegion} from './src/components/SelectAreaRegion'

const App: React.FC = () => {
  return (
    <SafeAreaView>
      <SelectAreaRegion />
      {/* <ShirtIcon fill="green" /> */}
    </SafeAreaView>
  )
}

export default App
