import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../lib/constant'
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Orang from '../assets/images/orang3.png'
import OrangMurung from '../assets/images/orang5.png'

const jumlahKurir = 12

const CardKurirReady = () => {
  return (
    <View style={{position:'relative',flexDirection:'row',width:'100%', height:'100%', borderColor:COLORS.borderBlack, borderWidth:1, borderRadius:18, backgroundColor:COLORS.buttondarkBlue, overflow:'hidden'}} >
        <Image source={jumlahKurir > 0 ? Orang : OrangMurung} resizeMode='contain' style={{width:130, height:130, position:'absolute', bottom:0, left:-10, zIndex:20}} />
        <View
            style={{
                position:'absolute',
                top:-70,
                right:-50,
                width: 150,
                height: 150,
                borderRadius: 150 / 2,
                opacity: 0.2,
                backgroundColor: COLORS.buttonRed, // tengahnya bolong
            }}
        />

        <View style={{height:'100%', width:'40%'}}></View>
        <View style={{height:'100%', width:'60%', paddingTop:20, paddingRight:4}}>
            <Text style={{color:'white', fontFamily:FONTS.SemiBold, fontSize:15}}>Jumlah Kurir Tersedia</Text>
            <Text style={{color:'white', fontFamily:FONTS.Bold, fontSize:20}}>{jumlahKurir} {jumlahKurir > 0 && "Siap Gas 😎"}</Text>
            <View style={{flexDirection:'row', justifyContent:'flex-start', marginTop:10 }}>
                <TouchableOpacity activeOpacity={.6} style={{paddingHorizontal:10, backgroundColor:COLORS.buttonRed, paddingVertical:5, borderRadius:5, justifyContent:'center', alignItems:'center', flexDirection:'row', gap:5}}>
                    <Feather name="refresh-cw" size={10} color="white" />
                    {/* <Text style={{color:'white', fontFamily:FONTS.Medium}}>Refresh</Text> */}
                </TouchableOpacity>
                {/* <TouchableOpacity activeOpacity={.6} style={{paddingHorizontal:10, backgroundColor:COLORS.buttonRed, paddingVertical:5, borderRadius:5, justifyContent:'center', alignItems:'center', flexDirection:'row', gap:5}}>
                    <FontAwesome name="map-marker" size={10} color="white" />
                    <Text style={{color:'white', fontFamily:FONTS.Medium}}>Map View</Text>
                </TouchableOpacity> */}
            </View>
        </View>

    </View>
  )
}

export default CardKurirReady