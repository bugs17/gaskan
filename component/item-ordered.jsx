import { View, Text, Image } from 'react-native'
import React from 'react'
import { FONTS } from '../lib/constant'

const ItemOrdered = () => {
  return (
    <View style={{flexDirection:'row',width:'100%', borderBottomWidth:.5, borderColor:'gray', paddingVertical:10, justifyContent:'space-between'}}>
      <View style={{ }}>
        <View style={{height:50, width:50,borderRadius:10, overflow:'hidden'}}>
            <Image source={{uri:'https://www.dapurkobe.co.id/wp-content/uploads/kulit-ayam-crispy-geprek.jpg'}} style={{height:50, width:50}} resizeMode='cover' />
        </View>
      </View>
      <View style={{flex:2, paddingLeft:10, justifyContent:'center', }}>
        <Text style={{fontFamily:FONTS.Medium, fontSize:13}}>Ayam geprek</Text>
        <Text style={{fontFamily:FONTS.Light, fontSize:12}}>Qty: 2</Text>
      </View>
      <View style={{flex:1, justifyContent:'center',  alignItems:'flex-end'}}>
        <Text style={{fontFamily:FONTS.SemiBold}}>20.000</Text>
      </View>
    </View>
  )
}

export default ItemOrdered