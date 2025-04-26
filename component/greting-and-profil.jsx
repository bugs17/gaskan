import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../lib/constant'
import FontAwesome from '@expo/vector-icons/FontAwesome';


const GreatingAndProfil = () => {
  return (
    <View style={{width:'100%', height:'auto', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:20, alignItems:'center'}}>
          <Text style={{fontFamily:FONTS.SemiBold, fontSize:25, color:'white'}}>Hallo, Bugs 👋</Text>
          <Pressable style={{width:40, height:40, backgroundColor:COLORS.backgroundCardGray, borderRadius:20, justifyContent:'center', alignItems:'center'}}>
            <FontAwesome name="user" size={24} color={COLORS.buttondarkBlue} />
          </Pressable>
        </View>
  )
}

export default GreatingAndProfil