import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, FONTS } from '../lib/constant';

const CardMakanan = ({title, picture}) => {

  const { width, height } = Dimensions.get('screen');

  const shineAnim = useRef(new Animated.Value(-1)).current;

  useEffect(() => {
    const loopAnimation = () => {
      shineAnim.setValue(-1);
      Animated.timing(shineAnim, {
        toValue: 1,
        duration: 5000,
        useNativeDriver: true,
      }).start(() => loopAnimation());
    };
    loopAnimation();
  }, []);

  const translateX = shineAnim.interpolate({
    inputRange: [-1, 1],
    outputRange: [-width, width],
  });

  return (
    <TouchableOpacity
        activeOpacity={0.8}
        style={{
            width: width / 3 - 10,
            height: 'auto',
            paddingVertical: 10,
            borderRadius: 18,
            backgroundColor: COLORS.backgroundCardGray,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
            width: 0,
            height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 8, // untuk Android
        }}
      >

        {/* Shine Effect */}
      

      <Image source={picture} style={{height:80, width:80}} resizeMode='contain' />
      <Text style={{fontSize:12, fontFamily:FONTS.Medium, color:COLORS.buttondarkBlue, marginTop:5}}>{title}</Text>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '150%',
          width: '100%',
          transform: [{ translateX: translateX }, { rotate: '45deg' }],
        }}
      >
        <LinearGradient
          colors={['transparent', 'rgba(255,255,255,0.3)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{
            flex: 1,
            width: '30%',
          }}
        />
      </Animated.View>
      </TouchableOpacity>
  );
};

export default CardMakanan;
