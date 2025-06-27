import { Stack } from 'expo-router'
import { COLORS, FONTS } from '../../../lib/constant'

const _layoutDetailKurirScreen = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{title:"Detail Kurir", headerTitleStyle:{fontFamily:FONTS.SemiBold, fontSize:20, color:COLORS.buttondarkBlue}}} />
    </Stack>
  )
}

export default _layoutDetailKurirScreen