import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { Icon } from 'react-native-elements'
export default function Pedidos() {


    return (
        <View style={styles.viewBody}>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>Opciones</Text>
                <br /><br />
                <Button
                    onPress={() => console.log('Pedidos en espera')}
                    title="En espera"
                /><br />

                <Button
                    onPress={() => console.log('Pedidos en camino')}
                    title="En camino"
                />
                <br /><br />
                <Button
                    onPress={() => console.log('Pedidos entregados')}
                    title="Entregados"
                />

            </View>

        </View>
    )

}





const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
    }
})