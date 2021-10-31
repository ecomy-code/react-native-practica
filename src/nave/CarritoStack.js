import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Carrito from '../screen/Carrito'

const Stack = createStackNavigator()

export default function CarritoStack() {
    return (
        <Stack.Navigator style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Stack.Screen
                name="Carrito"
                component={Carrito}
                options={{
                    title: '@Carrito',
                    headerStyle: {
                      backgroundColor: '#4ab567',
                    },
                    headerTintColor: '#fff',
                  }}
            />







            
        </Stack.Navigator>
    )
}
