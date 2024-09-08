import { Link, SplashScreen } from 'expo-router'
import React, { useEffect } from 'react'
import { Text, View , } from 'react-native'



const App = ()=> {

    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className='text-3xl font-plight'> Aora </Text>
        <Link href='/home' style={{color:'blue'}}>Go to Home</Link>
      </View>
    )
}

export default App;

