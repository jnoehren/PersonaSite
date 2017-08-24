import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import Header from './components/Header'
import Personas from './components/Personas'
import Skillz from './components/Skillz'
import Confident from './components/Confident'
import Other from './components/Other'

import store from './store'

render(
	<Provider store={store}>
		<Header />
	</Provider>,
	document.getElementById("Header")
) 

render(
	<Provider store={store}>
		<Personas />
	</Provider>,
	document.getElementById("Personas")
) 

render(
	<Provider store={store}>
		<Skillz />
	</Provider>,
	document.getElementById("Skillz")
) 

render(
	<Provider store={store}>
		<Confident />
	</Provider>,
	document.getElementById("Confident")
) 
	
render(
	<Provider store={store}>
		<Other />
	</Provider>,
	document.getElementById("Other")
) 