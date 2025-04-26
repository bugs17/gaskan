import { View, Text, Dimensions, Animated, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useRef } from 'react'
import NoOrderPicture from '../assets/images/no-order2.png'
import { COLORS, FONTS } from '../lib/constant';
import Book from '../assets/images/book.png'

const NoOrderComponent = () => {

    const {width, height} = Dimensions.get('screen')
      const shakeAnim = useRef(new Animated.Value(0)).current;
    
      useEffect(() => {
        const shake = () => {
          Animated.sequence([
            Animated.timing(shakeAnim, {
              toValue: 1,
              duration: 50,
              useNativeDriver: true,
            }),
            Animated.timing(shakeAnim, {
              toValue: -1,
              duration: 50,
              useNativeDriver: true,
            }),
            Animated.timing(shakeAnim, {
              toValue: 1,
              duration: 50,
              useNativeDriver: true,
            }),
            Animated.timing(shakeAnim, {
              toValue: 0,
              duration: 50,
              useNativeDriver: true,
            }),
          ]).start();
        };
    
        const interval = setInterval(shake, 3000);
        return () => clearInterval(interval);
      }, [shakeAnim]);
    
      const shakeStyle = {
        transform: [
          {
            rotate: shakeAnim.interpolate({
              inputRange: [-1, 1],
              outputRange: ['-5deg', '5deg'],
            }),
          },
        ],
      };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={NoOrderPicture} resizeMode='contain' style={{height:height / 2, width:width - 30}} />
          <View style={{height:height / 6, width:width, paddingHorizontal:20, marginTop:-20, alignItems:'center'}}>
          <Animated.View style={shakeStyle}>
            <TouchableOpacity
            activeOpacity={0.8}
            style={[
              {
                width: width / 2,
                paddingRight: 20,
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: COLORS.buttondarkBlue,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                borderRadius: 20,
                overflow: 'hidden',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 6,
                elevation: 8,
              },
              
            ]}
          >
            <Image source={Book} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
            <Text style={{ fontFamily: FONTS.SemiBold, color: 'white' }}>Order Disini</Text>
            </TouchableOpacity>
          </Animated.View>
          </View>
        </View>
  )
}

export default NoOrderComponent