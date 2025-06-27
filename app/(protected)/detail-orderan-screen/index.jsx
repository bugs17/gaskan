import { View, Text, ScrollView, Dimensions, Image } from 'react-native'
import { COLORS, FONTS } from '../../../lib/constant'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Entypo from '@expo/vector-icons/Entypo';



const dataItem = [
  {
    nama:'Ayam geprek',
    harga: '25.0000',
    imageUrl: 'https://www.dapurkobe.co.id/wp-content/uploads/kulit-ayam-crispy-geprek.jpg',
    qty: 2
  },
  {
    nama:'Extra Joss Susu',
    harga: '7.0000',
    imageUrl: 'https://www.pondoknasibakarkl.com.my/wp-content/uploads/2024/04/4-Extrajoss.jpg',
    qty: 2
  },
]

const Item = ({nama, imageUrl, harga, qty}) => {

  return (
    <View style={{flexDirection:'row', width:'100%',  borderBottomWidth:.5, gap:10, borderColor:'gray', paddingBottom:12}}>
      <View style={{height:80, width:80,borderRadius:10, overflow:'hidden'}}>
          <Image source={{uri:imageUrl}} style={{height:80, width:80}} resizeMode='cover' />
      </View>
      
      <View style={{flex:1,}}>
        <Text style={{fontFamily:FONTS.Medium, fontSize:15}}>{nama}</Text>
        <Text style={{fontFamily:FONTS.Regular, fontSize:15}}>Rp. {harga}</Text>
        <Text style={{fontFamily:FONTS.Regular, fontSize:15}}>Qty. {qty}</Text>
      </View>
      
      
      
    </View>
  )
}



const DetailOrderanScreen = () => {
      const {width, height} = Dimensions.get('screen')
  
  return (
    <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:'center', paddingTop:20, paddingBottom:20}} showsVerticalScrollIndicator={false}>
      <View style={{width:width - 40, gap:15, flex:1, backgroundColor:'white', minHeight:height - 250, borderRadius:20, overflow:'hidden', shadowColor: '#000', paddingVertical:25, paddingHorizontal:15, borderWidth:1.5, borderColor:'gray', borderStyle:'dashed',}}>
        {
          dataItem.map((data, index) => (
            <Item key={index} harga={data.harga} imageUrl={data.imageUrl} nama={data.nama} qty={data.qty}  />
          ))
        }

        <View style={{gap:5, backgroundColor:COLORS.buttondarkBlue, padding:8, borderRadius:8, marginBottom:10}}>
          <Text style={{color:'#dedede', fontSize:15}}>Catatan untuk kurir:</Text>
          <Text style={{fontFamily:FONTS.SemiBold, fontSize:15, color:'white'}}>Tolong minta sambalnya dipisahkan 😊</Text>
        </View>

        <View style={{ flexDirection:'row', gap:10, alignItems:'center'}}>
          <FontAwesome5 name="store" size={18} color={"gray"} />
          <Text style={{fontFamily:FONTS.SemiBold, fontSize:15, color:'black'}}>Warung Budemi</Text>
        </View>
        <View style={{ flexDirection:'row', gap:10, alignItems:'center'}}>
          <Entypo name="location-pin" size={20} color="gray" />
          <Text style={{fontFamily:FONTS.SemiBold, fontSize:15, color:'black'}}>Kilo 3 depan harapan</Text>
        </View>

        <View style={{flex:1, justifyContent:'flex-end', alignItems:'center', gap:10}}>
          <Text style={{ fontSize:15, color:'gray'}}>Total Pesanan: </Text>
          <Text style={{fontFamily:FONTS.ExtraBold, fontSize:35, color:COLORS.money}}>Rp. 64.000</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default DetailOrderanScreen