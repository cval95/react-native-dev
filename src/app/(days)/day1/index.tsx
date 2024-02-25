import React from 'react'
import {View, Text} from 'react-native';
import { Stack } from 'expo-router';
import { ScreenStackHeaderLeftView } from 'react-native-screens';

const DayDeatilsScreen = () => {
  return (
    <div>
      <View>
        <Stack.Screen options={{title: 'Day 1'}} />

        <Text>Day Details Screen</Text>
      </View>
    </div>
  )
}

export default DayDeatilsScreen;
