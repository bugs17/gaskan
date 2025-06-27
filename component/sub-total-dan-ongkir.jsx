import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../lib/constant'

const SubTotalDanOngkir = () => {
  return (
    <>
    <View style={{flexDirection:'row',width:'100%', paddingVertical:10,justifyContent:'center', alignItems:'center'}}>
      <View style={{flex:1, }}>
        <Text style={{fontFamily:FONTS.Medium, fontSize:13}}>Ongkos Kurir</Text>
      </View>
      <View style={{flex:1, alignItems:'flex-end'}}>
        <Text style={{fontFamily:FONTS.SemiBold}}>15.000</Text>
      </View>
    </View>
    <View style={{flexDirection:'row',width:'100%', paddingVertical:10,justifyContent:'center', alignItems:'center'}}>
      <View style={{flex:1, }}>
        <Text style={{fontFamily:FONTS.Medium, fontSize:13}}>Total bayar ke kurir:</Text>
      </View>
      <View style={{flex:1, alignItems:'flex-end'}}>
        <Text style={{fontFamily:FONTS.SemiBold, color:COLORS.money, fontSize:20}}>Rp.55.000</Text>
      </View>
    </View>

    </>
  )
}

export default SubTotalDanOngkir