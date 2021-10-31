import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screen/Home'

const Stack = createStackNavigator()

export default function HomeStack() {
    return (
        <Stack.Navigator style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Stack.Screen
                name="home"
                component={Home}
                options={{
                    title: '@Productos',
                    headerStyle: {
                      backgroundColor: '#4ab567',
                    },
                    headerTintColor: '#fff',
                  }}
            />







            
        </Stack.Navigator>
    )
}
