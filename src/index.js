import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

// Components
import App from './router/App'

// styles
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'
import './global.css';
import App from './components/App';

const container = document.getElementById("app")

// React dom siempre recibe un elemento
// es por eso que siempre usamos etiquetas
// que se auto-cierran para declarar el componente
// como elemento
ReactDOM.render(<App />, container)
