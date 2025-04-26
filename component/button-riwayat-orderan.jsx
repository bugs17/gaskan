import {  Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../lib/constant'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';


const ButtonRiwayatOrderan = () => {
  return (
    <Link href="/riwayat-orderan" asChild>
        <TouchableOpacity activeOpacity={.8} style={{ marginRight: 20,  justifyContent:'center', alignItems: 'center' }}>
            <Ionicons name="receipt-outline" size={24} color={COLORS.buttondarkBlue} />
            <Text style={{fontFamily:FONTS.Light, color:COLORS.buttondarkBlue}}>Riwayat</Text>
        </TouchableOpacity>
    </Link>
  )
}

export default ButtonRiwayatOrderan