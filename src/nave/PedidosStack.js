import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Pedidos from '../screen/Pedidos'

const Stack = createStackNavigator()

export default function PedidosStack() {
    return (
        <Stack.Navigator style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Stack.Screen
                name="Pedidos"
                component={Pedidos}
                options={{
                    title: '@Pedidos',
                    headerStyle: {
                      backgroundColor: '#4ab567',
                    },
                    headerTintColor: '#fff',
                  }}
            />







            
        </Stack.Navigator>
    )
}
