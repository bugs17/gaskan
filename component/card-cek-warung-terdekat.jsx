import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../lib/constant'
import Warung from '../assets/images/warung.png'

const CekWarungTerdekat = () => {
  return (
    <TouchableOpacity activeOpacity={.6} style={{width:'100%', height:'100%', backgroundColor:COLORS.buttonRed, borderRadius:20, overflow:'hidden', justifyContent:'center', shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8, // untuk Android
        }}>
      <Image source={Warung} style={{width:'40%', height:'80%', position:'absolute', left:10, bottom:0}} resizeMode='contain' />
      <Text style={{textAlign:'right', marginRight:20, marginLeft:100,fontFamily:FONTS.Bold, color:'white', fontSize:25}}>Cek warung yg paling dekat!</Text>
    </TouchableOpacity>
  )
}

export default CekWarungTerdekat