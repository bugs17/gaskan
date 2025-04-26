import { View, Text, Animated, Easing } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { FONTS, COLORS } from '../lib/constant';

const SearchBox = () => {
    const messages = ["Kaks mo makan apa? 🍔", "Tong antar skarang k? 🛵", "Ayam geprek juga pas k 🤤"];
  const [index, setIndex] = useState(0);
  const translateY = useRef(new Animated.Value(20)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const interval = setInterval(() => {
      // Slide up dan fade out
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: -5,
          duration: 500,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Setelah selesai animasi keluar, update index dan reset animasi ke bawah
        setIndex((prev) => (prev + 1) % messages.length);
        translateY.setValue(20);
        opacity.setValue(0);

        // Slide in dan fade in
        Animated.parallel([
          Animated.timing(translateY, {
            toValue: 0,
            duration: 500,
            easing: Easing.out(Easing.exp),
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
        ]).start();
      });
    }, 4000); // Delay antar transisi teks (4 detik)

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{width:'100%', height:'100%', borderColor:"#8E8E93", borderWidth:.5, borderRadius:20, backgroundColor:COLORS.backgroundCardGray, flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingHorizontal:15}} >
        <View style={{flexDirection:'row', gap:10}}>
            <Feather name="search" size={18} color="#717175" />
            <Animated.Text style={{fontFamily:FONTS.Regular, color:'#717175', transform:[{translateY}], opacity}}>{messages[index]}</Animated.Text>
        </View>
        <MaterialCommunityIcons name="food-fork-drink" size={18} color={COLORS.orange} />
    </View>
  )
}

export default SearchBox