import React from 'react';
import ReactDOM from 'react-dom';

// Components
import App from './router/App'

// styles
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

const container = document.getElementById("app")

// React dom siempre recibe un elemento
// es por eso que siempre usamos etiquetas
// que se auto-cierran para declarar el componente
// como elemento
ReactDOM.render(<App />, container)