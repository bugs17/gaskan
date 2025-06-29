import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { COLORS, FONTS } from '../../../lib/constant'
import { Ionicons } from '@expo/vector-icons'
import banerGaskanMaskot from '../../../assets/images/baner-menu.png'

const SemuaMakananScreen = () => {
    const insets = useSafeAreaInsets();
    const route = useRouter()

  return (
    <>
    <Stack.Screen options={{headerShown:false}} />
    <View style={{width:'100%', height:200, backgroundColor:COLORS.orange}}>
        <View style={{paddingTop:insets.top, paddingHorizontal:20, flexDirection:'row', flex:1}}>

            <View style={{ flex:1.5, paddingTop:insets.top - 8, paddingBottom:20, justifyContent:'space-between'}}>
                <View>
                    <Text style={{fontFamily:FONTS.SemiBold, fontSize:16, color:'white', }}>Mau makan apa hari ini?</Text>
                    <Text style={{fontFamily:FONTS.SemiBold, fontSize:20, color:'white'}}>GASKAN aja dulu!</Text>
                </View>
                <View >
                    <View style={{
                        width: '100%',
                        borderColor: "black",
                        borderWidth: 1,
                        backgroundColor: COLORS.backgroundCardGray,
                        borderRadius: 12,
                        overflow: 'hidden',
                        paddingHorizontal: 6,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        }}>
                        <TextInput
                            style={{
                            flex: 1,
                            color: 'black',
                            paddingVertical: 0, // penting agar text vertikal center di Android
                            }}
                            placeholder="Cari menu..."
                            placeholderTextColor="#999"
                            cursorColor="black"
                            selectionColor={COLORS.money}
                        />
                        <Ionicons name="search-sharp" size={28} color={'black'} />
                    </View>
                </View>
            </View>
            <View style={{ flex:1}}>
                <Image source={banerGaskanMaskot} resizeMode='contain' style={{width:150, height:150}} />
            </View>
        
        </View>

        <TouchableOpacity onPress={() => route.back()} style={{position:'absolute', left:10, top:insets.top}}>
            <Ionicons name="arrow-back-circle-sharp" size={38} color="white" />
        </TouchableOpacity> 
    </View>

    
    
    </>
  )
}

export default SemuaMakananScreen

{/* 
   
*/}