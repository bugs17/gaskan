import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import ItemOrdered from './item-ordered';
import SubTotalDanOngkir from './sub-total-dan-ongkir';
import Devider from './devider-dashed';
import KurirDetail from './kurir-detail';
import { COLORS, FONTS } from '../lib/constant';
import StepAndStatusOrder from './step-and-status-order';
import { useRouter } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const DeatailOrderan = () => {
    const {width, height} = Dimensions.get('screen')
    const router = useRouter()

    const rows = 33
    const columns = 4

    // ini watermark untuk struknya
    const renderWatermarks = () => {
        let elements = []

        for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            elements.push(
            <Text
                key={`${i}-${j}`}
                style={{
                position: 'absolute',
                top: i * 40,
                left: j * (width / columns),
                color: 'rgba(0,0,0,0.05)', // pudar banget
                fontSize: 20,
                transform: [{ rotate: '23deg' }],
                }}
            >
                gaskan
            </Text>
            )
        }
        }

        return elements
    }

  return (
    <ScrollView style={{flex:1}} contentContainerStyle={{alignItems:'center', paddingTop:20, paddingBottom:20}} showsVerticalScrollIndicator={false}>
        <View style={{width:width - 40, flex:1, backgroundColor:'white', minHeight:height - 270, borderRadius:20, overflow:'hidden', shadowColor: '#000',
                paddingHorizontal:15,
                paddingVertical:20,
                borderWidth:1.5,
                borderColor:'gray',
                borderStyle:'dashed',
                }}>
            <ItemOrdered />
            <ItemOrdered />
            <SubTotalDanOngkir />

            <TouchableOpacity onPress={() => router.push('/detail-orderan-screen')} activeOpacity={.8} style={{width:90, paddingVertical:2,backgroundColor:'black', justifyContent:'center', alignItems:'center', borderRadius:10, flexDirection:'row', gap:5, alignSelf:'center'}}>
                <Text style={{fontFamily:FONTS.Light, color:'white'}}>Detail</Text>
            </TouchableOpacity>
            
            <Devider />
                
            <Text style={{fontFamily:FONTS.Bold, textAlign:'center', color:COLORS.buttondarkBlue}}>Kurir yang antar kaks punya pesanan.</Text>
            <KurirDetail />

            <TouchableOpacity onPress={() => router.push('/chat')} activeOpacity={.8} style={{width:'100%',paddingVertical:4,marginTop:10,backgroundColor:'black', justifyContent:'center', alignItems:'center', borderRadius:10, flexDirection:'row', gap:5}}>
                <Ionicons name="chatbubble-ellipses" size={15} color='white' />
                <Text style={{fontFamily:FONTS.Light, color:'white'}}>Chat Kurir</Text>
            </TouchableOpacity>

            <Devider />

            <StepAndStatusOrder />

            
        </View>
    </ScrollView>
  )
}

export default DeatailOrderan