import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default props => {
    return (
        <View style={stylesList.container}>
            <View>
                <Text>Data: <Text>x</Text></Text>
            </View>
            <View>
                <Text>Temperatura Min: <Text></Text></Text>
            </View>
            <View>
                <Text>Temperatura Max: <Text>x</Text></Text>
            </View>
            <View>
                <Text>Descrição: <Text>x</Text></Text>
            </View>
        </View>
    );
}

const stylesList = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})