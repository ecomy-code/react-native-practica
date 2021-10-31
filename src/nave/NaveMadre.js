import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './HomeStack'
import CarritoStack from './CarritoStack'
import MarketingStack from './MarketingStack'
import PerfilStack from './PerfilStack'
import UsuariosStack from './UsuariosStack'
import EmpresariosStack from './EmpresariosStack'
import BancoStack from './BancoStack'
import PedidosStack from './PedidosStack'
import QuejasStack from './QuejasStack'




const Tab = createBottomTabNavigator();




export default function App() {
  return (




    <NavigationContainer>
      <Tab.Navigator
        
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'homeStack') {
              iconName = focused
                ? 'compass-outline'
                : 'compass-outline';
            } else if (route.name === 'carritoStack'  ) {
              iconName = focused ? 'star-outline' : 'star-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >


        <Tab.Screen name="homeStack" component={HomeStack} />
        <Tab.Screen name="carritoStack" component={CarritoStack} />
        <Tab.Screen name="pedidosStack" component={PedidosStack} />
        <Tab.Screen name="perfilStack" component={PerfilStack} />
        <Tab.Screen name="marketingStack" component={MarketingStack} />


        <Tab.Screen name="bancoStack" component={BancoStack} />

        <Tab.Screen name="quejasStack" component={QuejasStack} />

        <Tab.Screen name="usuariosStack" component={UsuariosStack} />

        <Tab.Screen name="empresariosStack" component={EmpresariosStack} />

      </Tab.Navigator>
    </NavigationContainer>









  );
}
