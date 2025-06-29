import { Stack, useLocalSearchParams } from 'expo-router'
import { View, Text, Image } from 'react-native'
import {FONTS, COLORS} from '../../../lib/constant'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import driverMarker from '../../../assets/images/marker.png';
import pengumuman from '../../../assets/images/pengumuman.png';
import { useState } from 'react';
import { AnimatePresence, MotiView } from 'moti';
import { Ionicons } from '@expo/vector-icons';

const LacakKurirScreen = () => {
  const { idKurir } = useLocalSearchParams();
  const [infoVisible, setInfoVisible] = useState(false);

  const initialRegion={
    latitude: -6.103853669192887,
    longitude: 140.31601699457866,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  }

  const toggleInfo = () => {
    setInfoVisible(prev => !prev);
  };

  const closeInfo = () => {
    setInfoVisible(false);
  };

  return (
    <>
        <Stack.Screen options={{title:'Lacak Kurir', headerTitleStyle:{fontFamily:FONTS.SemiBold, fontSize:14, color:COLORS.buttondarkBlue}, headerRight:() => (<Ionicons name="chatbubble-ellipses" size={24} color='black' />)}} />
        <View style={{flex:1}}>
            <MapView 
              style={{height:'100%', width:'100%'}} 
              provider={PROVIDER_GOOGLE}
              initialRegion={initialRegion}
              onPress={closeInfo}
            >
                <Marker
                  coordinate={{
                    latitude: -6.103853669192887,
                    longitude: 140.31601699457866,
                  }}
                  anchor={{ x: 0.5, y: 0.5 }}
                  flat={true}
                  rotation={55} // opsional: arah driver jika ada
                  onPress={toggleInfo}

                >
                
                  <Image
                    source={driverMarker}
                    style={{ width: 60, height: 60 }}
                    resizeMode="contain"
                  />
                </Marker>
            </MapView>


          <AnimatePresence>
            {infoVisible && (
              <MotiView 
              from={{ top: -20, opacity: 0 }}
              animate={{ top: 20, opacity: 1 }}
              exit={{ top: -20, opacity: 0 }}
              transition={{ type: 'timing', duration: 200 }}
              style={{position:'absolute', overflow:'hidden',top:20, left:40, right:40, height:90, backgroundColor:'white', borderRadius:16, flexDirection:'row', borderWidth:2, borderColor:'black'}}>
                    <Image
                        source={pengumuman}
                        style={{ width: 90, height: 90 }}
                        resizeMode="contain"
                      />
                      <View style={{flex:1, justifyContent:'center', alignItems:'flex-start'}}>
                        <Text style={{fontFamily:FONTS.SemiBold, fontSize:18}}>Halo kak, Tunggu ya. paketnya lagi diantar!</Text>
                      </View>
              </MotiView>
            )}
          </AnimatePresence>
        </View>
    </>
  )
}

export default LacakKurirScreen