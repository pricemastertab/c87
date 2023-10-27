import {React, useEffect, useState} from 'react';
import { StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { RFValue } from "react-native-responsive-fontsize";

import FeedScreen from '../screens/Feed';
import CreateStoryScreen from "../screens/CreateStory";

import { auth } from '../config';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { onValue, ref, update} from 'firebase/database';

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator(){
  const [light_theme, setlight_theme] = useState(true);
  

  const fetchUser = async () => {
  

    let theme, name, image;
    const datab = getDatabase();
    var userId = auth.currentUser.uid;
  
    const value = ref(datab, "/users/" + userId)
    .onValue(value, (snapshot) => {
      theme = snapshot.val().current_theme;
        name = '${snapshot.val().firstName}  ${snapshot.val().lastName}';
    });
  
    if (theme === 'light'){
      setlight_theme(true);
      setIsEnabled(false);
    } else{
      setlight_theme(false);
      setIsEnabled(true);
    };
    setName(name);
  }
  useEffect(() => {fetchUser()});

  

  return (
      <Tab.Navigator
        labeled={false}
        barStyle={ light_theme ? styles.bottomTabStyleLight:styles.bottomTabStyle}
        screenOptions={({route}) =>({
          tabBarIcon:({focused, color, size}) =>{
            let iconName;
            if(route.name === 'Feed'){
              iconName = focused ?'home' : 'home-outline';
            }else if(route.name === 'Criar História'){
              iconName = focused ?'add-circle' : 'add-circle-outline'; 
            }
            return ( 
            <Ionicons 
            name={iconName} 
            size={RFValue(25)} 
            color={color}
            style={styles.icons}
            />
            );
          }          
        })}
        activeColor= {"#ee8249"}
        inativeColor= {light_theme ? 'gray' : '#eaeaea' }         
      >
        <Tab.Screen name="Feed" component={FeedScreen} options={{headerShown:false}} />
        <Tab.Screen name="Criar História" component={CreateStoryScreen} options={{headerShown:false}}/>
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  },

  bottomTabStyleLight: {
    backgroundColor: "#eaeaea",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
});


