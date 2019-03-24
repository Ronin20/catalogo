import { StyleSheet } from 'react-native';

export const Estilos = StyleSheet.create({
    container: {
        marginTop: 20
    },
    item: {
        flexDirection: 'row',
        height: 122,
        borderWidth: 2,
        borderColor: 'black',
        margin: 5
    },
    info: {
        marginLeft: 20,
        justifyContent: 'center',
        flex:1
    },
    txtTitulo: {
        fontSize: 18,
        color: 'blue',
        fontWeight: 'bold'
    },
    imagem: {
        width: 100,
        height: 100
    }
})