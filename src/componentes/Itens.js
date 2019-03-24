import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import { Estilos } from '../estilos/Estilos';

export default class Itens extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const { item, info, txtTitulo, imagem } = Estilos
		return (
			<View style={item}>
				<View>
					<Image
						source={{uri: this.props.item.foto}}
						style={imagem}
					/>
				</View>
				<View style={info}>
					<Text style={txtTitulo}>{this.props.item.titulo}</Text>
					<Text>Valor: {this.props.item.valor}</Text>
					<Text>Local: {this.props.item.local_anuncio}</Text>
					<Text>Data: {this.props.item.data_publicacao}</Text>
				</View>
			</View>
		);
	}
}
