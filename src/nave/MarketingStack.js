import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Marketing from '../screen/Marketing'

const Stack = createStackNavigator()

export default function MarketingStack() {
    return (
        <Stack.Navigator style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <Stack.Screen
                name="Marketing"
                component={Marketing}
                options={{
                    title: '@Marketing',
                    headerStyle: {
                      backgroundColor: '#4ab567',
                    },
                    headerTintColor: '#fff',
                  }}
            />







            
        </Stack.Navigator>
    )
}
