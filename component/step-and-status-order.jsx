import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../lib/constant'
import StepNumber from './step-number'

const statusOrder = [
    {
        status:"Pesanan di terima warung",
        desc:"Pesanan sudah di terima oleh warung.",
        time:'17 : 20 WIT',
        completed:true
    },
    {
        status:"Kurir mulai pengantaran",
        desc:"Pesanan sedang di antar kurir ke kaks punya lokasi.",
        time:'17 : 30 WIT',
        completed:true
    },
    {
        status:"Selesai",
        desc:"Pesanan telah telah berhasil sampai di kaks punya lokasi.",
        time:'17 : 40 WIT',
        completed:true
    },
]

const StepAndStatusOrder = () => {
  return (
    <View style={{width:'100%'}}>
        <Text style={{fontFamily:FONTS.Bold, textAlign:'center', color:COLORS.buttondarkBlue}}>Status orderan</Text>
        <View style={{width:'100%', marginTop:20}} >
            

            {statusOrder.map((item, index) => (
                <StepNumber key={index} no={index + 1} status={item.status} desc={item.desc} time={item.time} completed={item.completed}/>
            ))}

        </View>
    </View>
  )
}

export default StepAndStatusOrder