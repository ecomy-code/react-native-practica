import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { Icon } from 'react-native-elements'


export default function Carrito() {


    return (
        <View style={styles.viewBody}>
            <View style={styles.notFoundView}>
                <Text style={styles.notFoundText}>No has seleccionado ningun producto de ecomycr™</Text>
            </View>
            <View style={styles.notFoundView}>
                <Text style={styles.notFoundText}>Factura idUser  ecomycr™</Text>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>Opciones</Text>
                <br/><br/>
                <Button
                    onPress={() => console.log('ir a pagar')}
                    title="Pagar"
                /><br/>
                <Button
                    onPress={() => console.log('ir a vaciar lista')}
                    title="Vaciar"
                /><br/>
                <Button
                    onPress={() => console.log('guardar lista deseos')}
                    title="Guardar"
                />
            </View>
            
        </View>
    )

}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
    },
    btnContainer: {
        position: "absolute",
        bottom: 10,
        right: 10,
        shadowColor: "black",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5
    },
    notFoundView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    notFoundText: {
        fontSize: 18,
        fontWeight: "bold"
    }
})