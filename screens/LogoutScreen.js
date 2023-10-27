import {React, useState, useEffect} from "react";
import { View, Text, StyleSheet, Platform, Alert, ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "../../config";
import { signOut } from "firebase/auth";


export default function LogoutScreen(){
    const navigation = useNavigation();
    useEffect(() =>{
        signOut(auth).then(() => {
            if (Platform.OS === 'android'){
                ToastAndroid.show('você saiu do app', ToastAndroid.LONG);
            } else {
                Alert.alert('você saiu do app')
            }
            navigation.replace('Login')
        }).catch((error) => {
            if (Platform.OS === 'android'){
                ToastAndroid.show('Error ao sair do app', ToastAndroid.LONG);
            } else {
                Alert.alert(error.message);
            }
        });
    })
    return (
        <View style={styles.container} >
            <Text>Tela de sair</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
