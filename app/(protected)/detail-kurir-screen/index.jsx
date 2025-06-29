import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../../lib/constant'
import Entypo from '@expo/vector-icons/Entypo';
import Fontisto from '@expo/vector-icons/Fontisto';

const index = () => {
  const {width, height} = Dimensions.get('screen')

  return (
    <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:'center', paddingTop:20, paddingBottom:20, gap:15}} showsVerticalScrollIndicator={false}>
      
      {/* kurir card */}
      <View style={{width:width - 40, flex:1, backgroundColor:'white', minHeight:height / 5, borderRadius:20, overflow:'hidden', shadowColor: '#000', borderWidth:1.5, borderColor:'gray'}}>
        <View style={{width:'100%', height:40, backgroundColor:'black', justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'white', fontFamily:FONTS.SemiBold, fontSize:20}}>Kurir</Text>
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
          <View style={{flex:1.5, justifyContent:'center', alignItems:'center'}}>
          <View style={{height:80, width:80,borderRadius:10, overflow:'hidden', borderWidth:1, borderColor:'black'}}>
              <Image source={{uri:'https://townsquare.media/site/812/files/2023/07/attachment-chris-brown.jpg?w=980&q=75'}} style={{height:80, width:80}} resizeMode='cover' />
          </View>
          </View>
          <View style={{flex:3, paddingTop:15}}>
            <Text style={{color:'gray', fontFamily:FONTS.Medium, fontSize:10}}>user_q41NvR0d</Text>
            <Text style={{color:'black', fontFamily:FONTS.SemiBold, fontSize:18}}>Joko Widodo</Text>
            <Text style={{color:'black', fontFamily:FONTS.Medium, fontSize:12}}>Laki-laki</Text>
            <View style={{flexDirection:'row', gap:4}}>
              <Entypo name="star" size={15} color={COLORS.orange} />
              <Entypo name="star" size={15} color={COLORS.orange} />
              <Entypo name="star" size={15} color={COLORS.orange} />
              <Entypo name="star" size={15} color={COLORS.orange} />
              <Entypo name="star" size={15} color={COLORS.orange} />
            </View>
          </View>
        </View>
        
      </View>

      {/* kendaraan card */}
      <View style={{width:width - 40, flex:1, backgroundColor:'white', minHeight:height / 5, borderRadius:20, overflow:'hidden', shadowColor: '#000', borderWidth:1.5, borderColor:'gray'}}>
        <View style={{width:'100%', height:40, backgroundColor:'black', justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'white', fontFamily:FONTS.SemiBold, fontSize:20}}>Kendaraan</Text>
        </View>
        <View style={{flex:1, flexDirection:'row'}}>
          <View style={{flex:1.5, justifyContent:'center', alignItems:'center'}}>
          <View style={{height:80, width:80,borderRadius:10, overflow:'hidden', borderWidth:1, borderColor:'black', justifyContent:'center', alignItems:'center'}}>
              <Fontisto name="motorcycle" size={42} color="black" />
          </View>
          </View>
          <View style={{flex:3, paddingTop:15}}>
            <Text style={{color:'black', fontFamily:FONTS.SemiBold, fontSize:18}}>Yamaha Mio M3</Text>
            <Text style={{color:'black', fontFamily:FONTS.Medium, fontSize:12}}>DS 3345 AD</Text>
            <Text style={{color:'black', fontFamily:FONTS.Medium, fontSize:12}}>Merah</Text>
            
          </View>
        </View>
        
      </View>
    </ScrollView>
  )
}

export default index


{/* <View style={{justifyContent:'center', alignItems:'center', }}>
              <View style={{height:120, width:120,borderRadius:10, overflow:'hidden', borderWidth:2, borderColor:COLORS.orange}}>
                  <Image source={{uri:'https://townsquare.media/site/812/files/2023/07/attachment-chris-brown.jpg?w=980&q=75'}} style={{height:120, width:120}} resizeMode='cover' />
              </View>
        </View>
        <Text style={{textAlign:'center', marginBottom:8, color:'gray'}}>user_q41NvR0d</Text>

        <Text style={{textAlign:'center', fontFamily:FONTS.Bold, fontSize:28, color:COLORS.buttondarkBlue}}>Abner Si Kuris</Text> */}