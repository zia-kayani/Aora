import { ScrollView, StyleSheet, Text , Image, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/form-field'
import CustomButton from '../../components/custom-button'
import { Link } from 'expo-router'


const SignUp = () => {
  const [form , setForm] = useState({
    username:'',
    email:'',
    password:''
  })

 const [isSubmitting , setIsSubmitting] = useState(false)

  const submit = () =>{}

  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView class>
        <View className='w-full  h-full justify-center px-4 my-6 '>
          <Image source={images.logo}  resizeMethod='contain' className='w-[115px] h-[35px]'/>
          <Text className='text-white text-xl mt-10 font-psemibold text-semibold'>Sign up to Aora</Text>
          <FormField 
            title='Username'
            value={form.username}
            handleChangeText = {(e)=>setForm({...form , username:e})}
            otherStyles='mt-10'
          />
          <FormField 
            title='Email'
            value={form.email}
            handleChangeText = {(e)=>setForm({...form , email:e})}
            otherStyles='mt-7'
            keyboardType = 'email-address'
          />
             <FormField 
            title='Password'
            value={form.password}
            handleChangeText = {(e)=>setForm({...form , password:e})}
            otherStyles='mt-7'
          />
          <CustomButton 
            title='sign-up'
            handlePress={submit()}
            containerStyles='mt-7'
            isLoading={isSubmitting}
          />

          <View className='flex-row gap-2 justify-center pt-5 '>
            <Text className='text-gray-100 text-lg font-pregular'>Have an account already?</Text>
            <Link href='/sign-in' className='text-lg font-psemibold text-secondary'>Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
 
  )
}

export default SignUp

const styles = StyleSheet.create({})