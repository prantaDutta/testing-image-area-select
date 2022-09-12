import {AreaSelector, IArea} from '@bmunozg/react-image-area'
import React, {useState} from 'react'
import {Image} from 'react-native'

export const AreaSelect = () => {
  const [areas, setAreas] = useState<IArea[]>([])

  const onChangeHandler = (changedAreas: IArea[]) => {
    setAreas(changedAreas)
  }

  return (
    <AreaSelector areas={areas} onChange={onChangeHandler}>
      <Image source={require('./../assets/images/scr_icon.png')} />
    </AreaSelector>
  )
}
