import React from 'react';
import { Button, StyleSheet, Text, View, Image, SafeAreaView, Alert } from 'react-native';
import WelcomePage from './components/WelcomePage'
import RegistrationPage from './components/RegistrationPage';
import MainStack from './navigate'
export default function App() {

    return (
        <MainStack/>
        //<WelcomePage></WelcomePage>
    );
  
}
