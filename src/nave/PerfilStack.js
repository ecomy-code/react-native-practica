import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Perfil from '../screen/Perfil'

const Stack = createStackNavigator()

export default function PerfilStack() {
    return (
        <Stack.Navigator style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Stack.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    title: '@Perfil',
                    headerStyle: {
                      backgroundColor: '#4ab567',
                    },
                    headerTintColor: '#fff',
                  }}
            />







            
        </Stack.Navigator>
    )
}
