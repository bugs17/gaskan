import { View, Text, ScrollView, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../../../lib/constant'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';


const {width, height} = Dimensions.get('screen')

const datas = [
  {
    namaMakanan: "Ayam Geprek Sambal Bawang",
    harga: 25000,
    status: "sukses",
    waktu: "27-06-2025, 14:30",
    imgUrl: "https://www.dapurkobe.co.id/wp-content/uploads/kulit-ayam-crispy-geprek.jpg"
  },
  {
    namaMakanan: "Nasi Goreng Seafood",
    harga: 30000,
    status: "batal",
    waktu: "25-06-2025, 18:45",
    imgUrl: "https://www.dapurkobe.co.id/wp-content/uploads/kulit-ayam-crispy-geprek.jpg"
  },
  {
    namaMakanan: "Sate Ayam",
    harga: 20000,
    status: "sukses",
    waktu: "20-06-2025, 12:00",
    imgUrl: "https://www.dapurkobe.co.id/wp-content/uploads/kulit-ayam-crispy-geprek.jpg"
  },
  {
    namaMakanan: "Bakso Urat",
    harga: 15000,
    status: "proses",
    waktu: "18-06-2025, 11:15",
    imgUrl: "https://www.dapurkobe.co.id/wp-content/uploads/kulit-ayam-crispy-geprek.jpg"
  },
  {
    namaMakanan: "Mie Goreng Spesial",
    harga: 22000,
    status: "sukses",
    waktu: "16-06-2025, 09:50",
    imgUrl: "https://www.dapurkobe.co.id/wp-content/uploads/kulit-ayam-crispy-geprek.jpg"
  },
  {
    namaMakanan: "Rendang Padang",
    harga: 35000,
    status: "batal",
    waktu: "14-06-2025, 16:20",
    imgUrl: "https://www.dapurkobe.co.id/wp-content/uploads/kulit-ayam-crispy-geprek.jpg"
  },
  {
    namaMakanan: "Tahu Crispy Saus Pedas",
    harga: 12000,
    status: "sukses",
    waktu: "12-06-2025, 13:10",
    imgUrl: "https://www.dapurkobe.co.id/wp-content/uploads/kulit-ayam-crispy-geprek.jpg"
  },
  {
    namaMakanan: "Pecel Lele",
    harga: 18000,
    status: "proses",
    waktu: "10-06-2025, 19:00",
    imgUrl: "https://www.dapurkobe.co.id/wp-content/uploads/kulit-ayam-crispy-geprek.jpg"
  }
];



const Card = ({imgUrl, namaItem, totalHarga, waktu, status}) => {
  const route = useRouter()

  let colorStatus = 'black';
  let statusString;
  let backGroundCard= 'white'

  switch (status) {
    case "sukses":
      colorStatus = COLORS.money
      statusString = "Sukses"
      break;
    case "proses":
      colorStatus = "#c47010"
      statusString = "Diproses"
      break;
    case "batal":
      colorStatus = "red"
      statusString = "Dibatalkan"
      break;
  }


  return (
    <TouchableOpacity activeOpacity={.8} onPress={() => route.push('/detail-riwayat-order-screen/ORD-5F3K9Z81')} style={{width:width - 40, flex:1, backgroundColor:backGroundCard, minHeight:height / 8, borderRadius:14, overflow:'hidden', shadowColor: '#000', borderWidth:1.5, borderColor:'gray', flexDirection:'row'}}>
        <View  style={{flex:1.5, justifyContent:'center', alignItems:'center'}}>
          <View style={{height:80, width:80,borderRadius:10, overflow:'hidden'}}>
              <Image source={{uri: imgUrl}} style={{height:80, width:80}} resizeMode='cover' />
          </View>
        </View>
        <View style={{flex:3, paddingTop:8, paddingRight:8}}>
          <Text style={{fontFamily:FONTS.SemiBold, fontSize:16, color:'black'}}>{namaItem}</Text>
          <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{fontFamily:FONTS.SemiBold, fontSize:14, color:'black'}}>Rp. {totalHarga}</Text>
            <AntDesign name="right" size={14} color="gray" />
          </View>
          <View style={{flexDirection:'row', gap:10, alignItems:'center'}}>
            <Text style={{fontFamily:FONTS.SemiBold, fontSize:14, color:colorStatus }}>{statusString}</Text>
            <Text style={{fontFamily:FONTS.Medium, fontSize:14, color:'gray'}}>{waktu}</Text>
          </View>
        </View>
    </TouchableOpacity>
  )
}



const RiwayatOrderan = () => {
  
  return (
    <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:'center', paddingTop:20, paddingBottom:20, gap:10}} showsVerticalScrollIndicator={false}>
      
      {
        datas.map((data, index) => (
          <Card key={index} imgUrl={data.imgUrl} namaItem={data.namaMakanan} totalHarga={data.harga} status={data.status} waktu={data.waktu} />
        ))
      }
      
    </ScrollView>
  )
}

export default RiwayatOrderan