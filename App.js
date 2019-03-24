import React from 'react';
import { Text, View } from 'react-native';
import ListaItens from './src/componentes/ListaItens';
import { Estilos } from './src/estilos/Estilos';

export default class App extends React.Component {
  render() {
    const { container } = Estilos
    return (
      <View style={container}>
          <ListaItens/>
      </View>
    );
  }
}