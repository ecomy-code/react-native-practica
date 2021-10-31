import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { Icon } from 'react-native-elements'
import ListProductos from '../componente/productos/ListProductos'
export default function Home() {


    return (
        <ListProductos/>
    )

}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
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