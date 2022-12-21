import { View, Text, Dimensions, Pressable, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { MotiImage, MotiView } from 'moti'

const width = Dimensions.get('screen').width;

const Intro = () => {
  return (
    <>
      <StatusBar style='dark'/>
      <SafeAreaView style={styles.container}>
        <MotiImage 
          source={require('../img/image.png')} 
          style={styles.image} 
          from={{opacity: 0, translateY: 100}}
          animate={{opacity: 1 , translateY: 0}}
          transition={{delay: 100}}
        />
        <MotiView
          from={{opacity: 0, translateY: 100}}
          animate={{opacity: 1, translateY: 0}}
          transition={{delay: 200}}
        >
          <Text style={styles.title}>React Native</Text>
          <Text style={styles.text}>
            React Native app with Moti animations. Learn more at <Text style={{color: '#FEC520'}}>https://moti.fyi</Text>
          </Text>
        </MotiView>
        <Pressable>
          <MotiView 
            style={[styles.button, {width: width * 0.8}]}
            from={{opacity: 0, translateY: 100}}
            animate={{opacity: 1, translateY: 0}}
            transition={{delay: 300}}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </MotiView>
        </Pressable>
      </SafeAreaView>
    </>
  )
}

export default Intro

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F8E9B0'
  },
  image: {
    width: width * 0.8,
    height: width * 0.8
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    marginTop: 20,
    marginHorizontal: 20,
    lineHeight: 20,
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 35
  },
  button: {
    padding: 25,
    backgroundColor: '#FEC520',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2
  }, 
  buttonText: {
    fontWeight: '600',
    fontSize: 16
  }
})