import React from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// end Navigation

// Screens
import Home from './screens/home';
import Characters from './screens/characters';
// End Screens

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused
                ? 'grid' 
                : 'grid-outline';
              } else if (route.name === 'Characters') {
                iconName = focused 
                  ? 'albums' 
                  : 'albums-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Characters" component={Characters} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});