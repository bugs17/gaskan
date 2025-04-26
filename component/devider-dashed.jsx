import { View, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../lib/constant'

const Devider = () => {
  return (
    <View 
        style={{
        marginVertical: 20,
        width: '100%',
        borderBottomWidth: 1.5,
        borderColor: COLORS.buttondarkBlue,
        borderStyle: 'dashed',
      }}
    />
  )
}

export default Devider