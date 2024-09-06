import { Link, SplashScreen } from 'expo-router'
import React, { useEffect } from 'react'
import { Text, View , } from 'react-native'


SplashScreen.preventAutoHideAsync();

const App = ()=> {

    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className='text-3xl font-plight'> Aora </Text>
        <Link href='/profile' style={{color:'blue'}}>Go to profile</Link>
      </View>
    )
}

export default App;

