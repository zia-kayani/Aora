import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'



const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className='justify-center items-center gap-2'>
      <Image
        source={icon}
        resizeMode='contian'
        tintColor={color}
        className='h-6 w-6'
      />
      <Text className={`${focused} 'font-psemibold': 'font-preguler' text-xs`} style={{color:color}}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {

  return (
    <>
      <Tabs screenOptions={{
         tabBarShowLabel: false, 
         tabBarActiveTintColor:'#FFA001',
         tabBarInactiveTintColor:'#CDCDE0',
         tabBarStyle : {
          backgroundColor:'#161622',
          borderTopWidth:1,
          borderTopColor:'#232535',
          height:84

         }

      }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        ></Tabs.Screen>

        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'BookMark',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="BookMark"
                focused={focused}
              />
            )
          }}
        ></Tabs.Screen>


        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Create"
                focused={focused}
              />
            )
          }}
        ></Tabs.Screen>

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        ></Tabs.Screen>
      </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({})