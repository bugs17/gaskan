import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../../lib/constant'

const index = () => {
  const {width, height} = Dimensions.get('screen')

  return (
    <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:'center', paddingTop:20, paddingBottom:20}} showsVerticalScrollIndicator={false}>
      <View style={{width:width - 40, gap:15, flex:1, backgroundColor:'white', minHeight:height / 5, borderRadius:20, overflow:'hidden', shadowColor: '#000', borderWidth:1.5, borderColor:'gray'}}>
        <View style={{width:'100%', height:40, backgroundColor:'black'}}></View>

        
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