import { Link, SplashScreen } from 'expo-router'
import { StatusBar } from "expo-status-bar";

import React, { useEffect } from 'react'
import { ScrollView, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import CustomButton from '../components/custom-button'
import { Redirect, router } from "expo-router";

const App = () => {

  return (
    // <View className="flex-1 items-center justify-center bg-white">
    //   <Text className='text-3xl font-plight'> Aora </Text>
    //   <Link href='/home' style={{color:'blue'}}>Go to Home</Link>
    // </View>

    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='content-center items-center h-full min-w-full px-4'>
          <Image
            source={images.logo}
            className=' w-[180px] h-[80px]'
            resizeMode='contain'
          />

          <Image
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-3xl font-bold text-white text-center'>
              Discover endless possibilites with  {``}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>
            <Image
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-[-80]'
              resizeMode='contain' />
          </View>
          <Text className='text-gray-100 text-sm text-center font-pregular mt-7'>
            where creativity meets innovation: embark on a journey of limitless exploration with Aora
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />

    </SafeAreaView>
  )
}

export default App;

