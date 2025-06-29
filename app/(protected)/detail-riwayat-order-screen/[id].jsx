import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'
import { COLORS, FONTS } from '../../../lib/constant';
import ItemOrdered from '../../../component/item-ordered'
import SubTotalDanOngkir from '../../../component/sub-total-dan-ongkir';
import Devider from '../../../component/devider-dashed';
import KurirDetail from '../../../component/kurir-detail';
import StepAndStatusOrder from '../../../component/step-and-status-order';




const DetailRiwayatOrder = () => {
    const {width, height} = Dimensions.get('screen')


    const { id } = useLocalSearchParams();


  return (
    <>
        <Stack.Screen options={{title:id, headerTitleStyle:{fontFamily:FONTS.SemiBold, fontSize:14, color:COLORS.buttondarkBlue}}} />
        <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:'center', paddingTop:20, paddingBottom:20, gap:10}} showsVerticalScrollIndicator={false}>
            <View style={{width:width - 40, flex:1, backgroundColor:'white', minHeight:height - 270, borderRadius:20, overflow:'hidden', shadowColor: '#000',
                    paddingHorizontal:15,
                    paddingVertical:20,
                    borderWidth:1.5,
                    borderColor:'gray',
                    borderStyle:'dashed',
                    }}>

                <Text style={{fontFamily:FONTS.Medium, fontSize:10, color:'gray', textAlign:'center', marginBottom:10}}>ORD-5F3K9Z81</Text>
                <ItemOrdered />
                <ItemOrdered />
                <ItemOrdered />
                <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:10}}>
                    <Text style={{fontFamily:FONTS.Medium, fontSize:13}}>Ongkos Kurir</Text>
                    <Text style={{fontFamily:FONTS.Medium, fontSize:13}}>Rp. 15.000</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'center', paddingTop:30}}>
                    <Text style={{fontFamily:FONTS.SemiBold, color:'black', fontSize:25}}>Rp.55.000</Text>
                </View>

                
                
                <Devider />
                    
                
                <Text style={{fontFamily:FONTS.Bold, color:COLORS.orange, fontSize:40, textAlign:'center', marginTop:40}}>SUKSES</Text>

                
            </View>
        </ScrollView>
    </>
  )
}

export default DetailRiwayatOrder