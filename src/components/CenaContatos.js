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

const detalheContatos = require('../imgs/detalhe_contato.png');

export default class CenaPrincipal extends Component {
  render() {
    return (
        <View style={{flex:1, backgroundColor: '#FFF'}}>

        <StatusBar backgroundColor='#61BD8C' />
        <BarraNavegacao voltar navigator={this.props.navigator}/>

        <View style={styles.cabecalho}>
          <Image source={detalheContatos} />
          <Text style={styles.txtTitulo}> Contatos </Text>
        </View>

        <View style={styles.detalheContatos}>
          <Text style={styles.txtContatos}>TEL: (11) 1234-1234</Text>
          <Text style={styles.txtContatos}>CEL: (11) 91232-1231</Text>
          <Text style={styles.txtContatos}>EMAIL: contato@atmconsultoria.com</Text>
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
    color: '#61BD8C',
    marginLeft:10,
    marginTop:25
  },
  detalheContatos:{
    marginTop:20,
    padding:20
  },
  txtContatos:{
    fontSize: 18
  }
})
