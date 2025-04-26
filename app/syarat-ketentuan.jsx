import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../lib/constant'
import {WebView} from 'react-native-webview'

const SyaratKetentuan = () => {
    const [htmlContent, setHtmlContent] = useState('https://bugs17.github.io/syarat-ketentuan-eazirent/')
  return (
    <View style={{flex:1, backgroundColor:COLORS.backgroundCardWhite}}>
            {htmlContent ? (
                <WebView 
                    originWhitelist={['*']}
                    source={{uri: htmlContent}}
                    showsVerticalScrollIndicator={false}
                 />
            )
            :
            (
                <Text>Loading. . .</Text>
            )
            }
        </View>
  )
}

export default SyaratKetentuan