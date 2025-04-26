import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../lib/constant'

const StepNumber = ({no, status, desc, time, completed}) => {
  return (
    <View style={{flexDirection:'row', width:'100%'}}>
    {completed && (
        <>

            <View style={{width:'20%', alignItems:'center'}} >
                <View style={{width:20, height:20 , borderRadius:20 / 2, backgroundColor: completed ? COLORS.orange : 'gray', justifyContent:'center', alignItems:'center', overflow:'hidden'}} >
                    <Text style={{fontFamily:FONTS.Bold, color:'white'}}>{no}</Text>
                </View>
                <View style={{width:2, height:90, borderLeftWidth:2, borderLeftColor:completed ? COLORS.orange : 'gray', borderStyle:'dashed'}} />
            </View>
            <View style={{width:'80%'}} >
                <Text style={{fontFamily:FONTS.Bold, color:completed ? COLORS.orange : 'gray'}}>{status}</Text>
                <Text style={{fontFamily:FONTS.Light, color:COLORS.buttondarkBlue}}>{desc}</Text>
                <Text style={{fontFamily:FONTS.Light, color:COLORS.buttondarkBlue, marginTop:10}}>{time}</Text>
            </View>
        </>
    )}
    </View>
  )
}

export default StepNumber