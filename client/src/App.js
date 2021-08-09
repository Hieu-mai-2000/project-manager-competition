import React from 'react'
import './App.css'
import Route from './router'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Router>
				<Route />
			</Router>
		</div>
	)
}

export default App
