import { Stack } from 'expo-router'
import { COLORS, FONTS } from '../../../lib/constant'


const _layoutRiwayatOrderanListSCreen = () => {
  return (
    <Stack>
        <Stack.Screen name='index' options={{title:"Riwayat Orderan", headerTitleStyle:{fontFamily:FONTS.SemiBold, fontSize:20, color:COLORS.buttondarkBlue}}} />
    </Stack>
  )
}

export default _layoutRiwayatOrderanListSCreen