import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { COLORS, FONTS } from '../../../lib/constant'

const _layoutDetailOrderanScreen = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{title:'Detail Pesanan', headerTitleStyle:{fontFamily:FONTS.SemiBold, fontSize:20, color:COLORS.buttondarkBlue}}} />
    </Stack>
  )
}

export default _layoutDetailOrderanScreen