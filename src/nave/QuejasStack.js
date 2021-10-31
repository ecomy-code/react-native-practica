import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Quejas from '../screen/Quejas'

const Stack = createStackNavigator()

export default function QuejasStack() {
    return (
        <Stack.Navigator style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Stack.Screen
                name="Quejas"
                component={Quejas}
                options={{
                    title: '@Quejas',
                    headerStyle: {
                      backgroundColor: '#4ab567',
                    },
                    headerTintColor: '#fff',
                  }}
            />







            
        </Stack.Navigator>
    )
}
