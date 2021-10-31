import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Usuarios from '../screen/Usuarios'

const Stack = createStackNavigator()

export default function UsuariosStack() {
    return (
        <Stack.Navigator style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Stack.Screen
                name="Usuarios"
                component={Usuarios}
                options={{
                    title: '@Usuarios',
                    headerStyle: {
                      backgroundColor: '#4ab567',
                    },
                    headerTintColor: '#fff',
                  }}
            />







            
        </Stack.Navigator>
    )
}
