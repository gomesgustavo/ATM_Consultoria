import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  Image
} from 'react-native';

//Importar o componente barra navegação
import BarraNavegacao from './BarraNavegacao';

const detalheCiente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor: '#FFF'}}>

        <StatusBar backgroundColor='#61BD8C' />
        <BarraNavegacao voltar navigator={this.props.navigator}/>

        <View style={styles.cabecalho}>
          <Image source={detalheCiente} />
          <Text style={styles.txtTitulo}> Nossos Clientes </Text>
        </View>

        <View style={styles.detalheCliente}>
          <Image source={cliente1} />
          <Text style={styles.txtDetalheCliente}> Lorem ipsum dolorem </Text>
        </View>

        <View style={styles.detalheCliente}>
          <Image source={cliente2} />
          <Text style={styles.txtDetalheCliente}> Lorem ipsum dolorem </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho:{
    flexDirection: 'row',
    marginTop: 20

  },
  txtTitulo:{
    fontSize: 30,
    color: '#B9C941',
    marginLeft:10,
    marginTop:25
  },
  detalheCliente:{
    padding:20,
    marginTop:10
  },
  txtDetalheCliente:{
    fontSize: 18,
    marginLeft: 20
  }
})
