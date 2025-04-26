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
        <Stack.Screen name='/riwayat-orderan' />
    </Stack>
  )
}

export default ProtectedLayout