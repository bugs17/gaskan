import { View, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { COLORS, FONTS } from '../../../lib/constant'
import SearchBox from '../../../component/search-box';
import CardKurirReady from '../../../component/card-kurir-ready';
import GreatingAndProfil from '../../../component/greting-and-profil';
import { Text } from 'react-native';
import CardMakanan from '../../../component/card-makanan';

import Makanan from '../../../assets/images/makanan.png';
import Minuman from '../../../assets/images/minuman.png';
import Cemilan from '../../../assets/images/cemilan.png';
import CekWarungTerdekat from '../../../component/card-cek-warung-terdekat';
import { useRouter } from 'expo-router';

const Index = () => {
  const { width, height } = Dimensions.get('screen')
  const inset = useSafeAreaInsets()
  const route = useRouter()

  const data = [
    { id: '1', title: 'Makanan', picture: Makanan, url:'semua-makanan-screen' },
    { id: '2', title: 'Minuman', picture: Minuman, url:'semua-minuman-screen' },
    { id: '3', title: 'Cemilan', picture: Cemilan, url:'semua-cemilan-screen' },
    // Tambah data lainnya
  ];
 

  return (
    <SafeAreaView style={{flex:1}}>
      {/* background blue */}
      <View style={{height: height / 3, width:'auto', backgroundColor:COLORS.buttonBlue, position:'absolute', top:0, left:0, right:0, zIndex:-20}} />
      
      <View style={{width:'auto', height:height / 3 - inset.top}} >
        <GreatingAndProfil />
        <View style={{width:'100%', height:160, paddingHorizontal:20, paddingVertical:10}}>
          <CardKurirReady />
        </View>
        <View style={{width:'100%', height:40, paddingHorizontal:30}}>
          <SearchBox />
        </View>
      </View>

      <View style={{marginTop:40}}>
        <Text style={{marginLeft:20, fontFamily:FONTS.SemiBold, color:COLORS.buttondarkBlue}}>Aneka kuliner boven</Text>
        <View style={{width:'100%', height:'auto', flexDirection:'row', justifyContent:'center', paddingVertical:10, gap:8}}>
        {data.map((item) => (
          <CardMakanan onPress={() => route.push(item.url)} title={item.title} picture={item.picture} key={item.id} />
        ))}
        </View>
      </View>

      <View style={{width:'100%', height:height / 4, alignItems:'center', paddingHorizontal:20, paddingVertical:20}}>
        <CekWarungTerdekat />
      </View>
    </SafeAreaView>
  )
}

export default Index