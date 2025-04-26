import { Text, View, Image, Button, TouchableOpacity, Pressable } from "react-native";
import { Link, Redirect, useRouter } from "expo-router";
import {COLORS, FONTS} from '../lib/constant'
import Logo from '../assets/images/gaskan-logo.png'
import logoGoogle from '../assets/images/google.png'
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from "react";


export default function Index() {

  const [sk, setSk] = useState(false)
  const router = useRouter()
  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:COLORS.backgroundBlue,
      }}
    >
    
      <View style={{
        flex:1,
        width:'100%',
        justifyContent:'flex-end',
        alignItems:'center'
      }}>
        <Image source={Logo} style={{height:200, width:200, marginBottom:-65}} resizeMode="contain" />
        <Text style={{fontFamily:FONTS.SemiBold, letterSpacing:2, fontSize:16, color:COLORS.backgroundprimary}}>Mager? Gaskan su</Text>
      </View>

      <View style={{
        flex:1,
        width:'100%',
      }}>

      <View style={{flex:1, width:'100%', alignItems:'center', paddingTop:40}}>
          <TouchableOpacity style={{
            width:200,
            height:40,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:20,
            backgroundColor:COLORS.buttonBlack,
            flexDirection:'row',
            gap:8
          }} activeOpacity={.6} onPress={() => router.push('/')}>
            <Image
              source={logoGoogle}
              style={{height:15, width:15}}
              resizeMode="contain"
            />
            <Text style={{color:COLORS.backgroundCardWhite, fontFamily:FONTS.SemiBold, letterSpacing:1}}>Masuk</Text>
          </TouchableOpacity>
      </View>
      <View style={{flex:1, width:'100%', justifyContent:'center', alignItems:'center', flexDirection:'row', gap:6}}>
        <Pressable onPress={() => setSk((prevState) =>  !prevState)} style={{height:20, width:20, borderWidth:1, borderColor:COLORS.borderBlack, justifyContent:'center', alignItems:'center', borderRadius:4}} >
          {sk && (
            <Entypo name="check" size={18} color={COLORS.buttonRed} />
          )}
        </Pressable>

        <Pressable onPress={() => router.push('/syarat-ketentuan')}>
          <Text style={{textDecorationLine:'underline', fontFamily:FONTS.Medium}}>Syarat & Ketentuan Pengguna</Text>
        </Pressable>
      </View>

      </View>
    </View>
  );
}
