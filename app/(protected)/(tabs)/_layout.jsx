

import React from 'react'
import { Tabs } from 'expo-router'
import { COLORS, FONTS } from '../../../lib/constant'
import {  TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import ButtonRiwayatOrderan from '../../../component/button-riwayat-orderan';

const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundCardWhite,
        borderRadius: 20,
      }}
      activeOpacity={0.9} // Efek sentuhan
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: COLORS.backgroundCardWhite, // Warna latar belakang tab
          height: 70, // Tinggi tab bar
        },
        tabBarLabelStyle: {
          fontSize: 14, // Ukuran font label
          fontFamily: FONTS.SemiBold, // Font label
          textTransform: 'none', // Tidak mengubah huruf menjadi kapital
        },
        tabBarActiveTintColor: COLORS.buttondarkBlue, // Warna ikon atau teks aktif
        tabBarInactiveTintColor: "#8E8E93", // Warna ikon atau teks tidak aktif
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
      }}
    >
        <Tabs.Screen name='index' options={{
            headerShown:false,
            title:'Home',
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
        }} />
        <Tabs.Screen name='pesanan' options={{
            headerTitleAlign:'left',
            headerTitleStyle:{
                fontFamily:FONTS.SemiBold,
                fontSize:20,
                color:COLORS.buttondarkBlue
            },
            headerRight: () => (
              <ButtonRiwayatOrderan />
            ),
            title:'Orderan',
            tabBarIcon: ({ color }) => (
              <Entypo name="shopping-bag" size={24} color={color} />
            ),
        }} />
        <Tabs.Screen name='chat' options={{
            headerShown:false,
            title:'Chat',
            tabBarIcon: ({ color }) => (
              <Ionicons name="chatbubble-ellipses" size={24} color={color} />
            ),
        }} />
    </Tabs>
  )
}

export default TabsLayout