import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../lib/constant'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

const KurirDetail = () => {
  const route = useRouter()
  return (
    <View style={{width:'100%', flexDirection:'row', gap:10, paddingVertical:10,  justifyContent:'flex-start', overflow:'hidden', alignItems:'center', marginTop:20}} >

      <View style={{height:80, width:80, borderRadius:10, overflow:'hidden'}}>
        <Image source={{uri:'https://townsquare.media/site/812/files/2023/07/attachment-chris-brown.jpg?w=980&q=75'}} resizeMode='cover' style={{width:80, height:80}} />  
      </View>
      <View style={{ }}>
        <Text style={{fontFamily:FONTS.SemiBold, fontSize:20}}>Joko Widodoj</Text>
        <Text style={{fontFamily:FONTS.Medium, color:'gray'}}>Yamaha Mio M3</Text>
        <Text style={{fontFamily:FONTS.Medium, color:'gray'}}>DS 3345 AD</Text>
        <View style={{flexDirection:'row', gap:6}}>
            <TouchableOpacity onPress={() => route.push('/detail-kurir-screen')} activeOpacity={.8} style={{width:90, paddingVertical:2,backgroundColor:'black', justifyContent:'center', alignItems:'center', borderRadius:10, flexDirection:'row', gap:5}}>
                <MaterialCommunityIcons name="account-details" size={15} color="white" />
                <Text style={{fontFamily:FONTS.Light, color:'white'}}>Detail</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={.8} style={{width:90, paddingVertical:2,backgroundColor:COLORS.buttondarkBlue, justifyContent:'center', alignItems:'center', borderRadius:10, flexDirection:'row', gap:5}}>
                <FontAwesome name="map-marker" size={15} color="white" />
                <Text style={{fontFamily:FONTS.Light, color:'white'}}>Lacak</Text>
            </TouchableOpacity>
            
        </View>
      </View>
    </View>
  )
}

export default KurirDetail