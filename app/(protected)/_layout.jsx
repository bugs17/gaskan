import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'



const ProtectedLayout = () => {

  // const {isSignedIn} = useAuth()
  //   if (!isSignedIn) {
  //       return <Redirect href="/login" />
  //   }

  return (
    <Stack>
        <Stack.Screen name='(tabs)' options={{
            headerShown:false,
        }} />
        <Stack.Screen name='riwayat-orderan-list-screen' options={{headerShown:false}} />
        <Stack.Screen name='detail-orderan-screen' options={{headerShown:false}} />
        <Stack.Screen name='detail-kurir-screen' options={{headerShown:false}} />
    </Stack>
  )
}

export default ProtectedLayout