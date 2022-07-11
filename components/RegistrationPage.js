import React from 'react';
import { Button, StyleSheet, Text, View, Image, SafeAreaView, Alert, TextInput } from 'react-native';
import { styles } from '../styles/style' 

export default function RegistrationPage () {


    return (
        <SafeAreaView style = {styles.centered}>
            <Text
            style = {styles.welcomeTo}>
            WELCOME
            </Text>
           <Text
           style = {styles.RegistationText}>
            EMAIL
           </Text>
           <TextInput
           style = {styles.input}
           placeholder = 'example@example.com'
           />
            <Text
           style = {styles.RegistationText}>
            PASSWORD
           </Text>
           <TextInput
           style = {styles.input}
           placeholder = '*********'
           />
           <Text style = {{color: 'white'}}>FORGOT PASSWORD?</Text>
           <View style = {{flexDirection: 'row'}}>
           <Image style = {styles.marginBetweenElements} 
            source = {require('../assets/facebook.png')}
            />
            <Image style = {styles.marginBetweenElements} 
            source = {require('../assets/gmail.png')}
            />
            <Image  style = {styles.marginBetweenElements}
            source = {require('../assets/in.png')}
            />
           </View>
           <View style = {{flexDirection: 'column', justifyContent: 'space-between'}}>
           <Button
            title = {'LOGIN'}
            />
            <Text> </Text>
            <Button
            title = {'REGISTER'}
            />
           </View>
        </SafeAreaView>
    );
}