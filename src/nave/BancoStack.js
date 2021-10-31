import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Banco from '../screen/Banco'

const Stack = createStackNavigator()

export default function BancoStack() {
    return (
        <Stack.Navigator style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Stack.Screen
                name="Banco"
                component={Banco}
                options={{
                    title: '@Banco',
                    headerStyle: {
                      backgroundColor: '#4ab567',
                    },
                    headerTintColor: '#fff',
                  }}
            />







            
        </Stack.Navigator>
    )
}
