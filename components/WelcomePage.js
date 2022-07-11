import React from 'react';
import { Button, StyleSheet, Text, View, Image, SafeAreaView, Alert } from 'react-native';
import { styles } from '../styles/style' 

export default function WelcomePage ({ navigation }) {

    const loadScene = () => {
      navigation.navigate('Registration')
    }
    return (
        <SafeAreaView style = {styles.centered}>
            <Text
            style = {styles.welcomeTo}>
            WELCOME TO
            </Text>
            <Image 
            source = {require('../assets/logo.png')}
            style = {styles.logo}
            />
            <Button 
            title = {'Lets start'}
            onPress = {loadScene}
            />
        </SafeAreaView>
    );
  
}