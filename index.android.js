import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Navigator
} from 'react-native';

import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes';
import CenaContatos from './src/components/CenaContatos';
import CenaEmpresa from './src/components/CenaEmpresa';
import CenaServicos from './src/components/CenaServicos';

export default class App5 extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id:'a'}}
        renderScene={(route, navigator) => {

          switch (route.id) {
            case 'a':
              return(<CenaPrincipal navigator={navigator}/>);
            case 'b':
              return (<CenaClientes navigator={navigator}/>);
            case 'c':
              return (<CenaContatos navigator={navigator}/>);
            case 'd':
              return (<CenaEmpresa navigator={navigator}/>);
            case 'e':
                return (<CenaServicos navigator={navigator}/>);
            default: return false;
          }
        }}
      />
    );
  }
}


AppRegistry.registerComponent('App5', () => App5);
