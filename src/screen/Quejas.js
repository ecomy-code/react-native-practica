import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

import { Icon } from 'react-native-elements'
export default function Home() {


    return (
        <View style={styles.viewBody}>
            <View style={styles.notFoundView}>
                <Text style={styles.notFoundText}>Quejas realizadas</Text>
            </View>
        </View>
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