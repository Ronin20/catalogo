import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios'
import Itens from './Itens';



export default class ListaItens extends Component {
	
	constructor(props){
		super(props)

		this.state = {
			itensLista: []
		}
	}

	componentWillMount(){
		//requisição http
		axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
			.then((response) => { this.setState({itensLista: response.data})})
			.catch(() => { alert('Erro ao recuperar os dados') })
	}

	render() {
		console.log('Render')
		return (
			<ScrollView>
				{ this.state.itensLista.map((item) => (<Itens key={item.titulo} item={item}></Itens>) )}
			</ScrollView>
		);
	}
}










/*constructor(props) { executado quando o componente inicia
		super(props);
		this.state = {
		};
		console.log('Constructor')

	}

	componentWillMount() { executado antes da renderização
		console.log('WillMount')
	}

	Render( durante a renderização)

	componentDidMount() { Depois da renderização
		console.log('DidMoount')
	}
*/