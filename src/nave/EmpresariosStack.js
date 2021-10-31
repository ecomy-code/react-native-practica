import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Empresarios from '../screen/Empresarios'

const Stack = createStackNavigator()

export default function EmpresariosStack() {
    return (
        <Stack.Navigator style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Stack.Screen
                name="Empresarios"
                component={Empresarios}
                options={{
                    title: '@Empresarios',
                    headerStyle: {
                      backgroundColor: '#4ab567',
                    },
                    headerTintColor: '#fff',
                  }}
            />







            
        </Stack.Navigator>
    )
}
