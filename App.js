import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './navigation/MainNavigation';
import { useFonts } from 'expo-font';
import HomeNavigation from './navigation/HomeNavigation';
import { useState } from 'react';

export default function App() {

  //Loading app fonts
  let [fontsLoaded] = useFonts({
		'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
		'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
		'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
		'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
		'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
	});
  const [user, setUser] = useState(' ')

	if (!fontsLoaded) {
		return <View>
      <Text>Loading...</Text>
      </View>;
	}

// Check user 'logged in' status
  
  return (
    <NavigationContainer> 
    {user? <HomeNavigation/> : <MainNavigation/>}
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20
  },
});
