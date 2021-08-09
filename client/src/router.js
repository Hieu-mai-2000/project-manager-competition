import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/login/login'
import SignUp from './components/signUp/signUp'
import LayoutsAuth from './layouts/auth/auth'
import Compete from './page/compete/createCompete'
import Admin from './page/admin'

export default function Router() {
	return (
		<Switch>
			<Route exact path="/compete/:id">
				<Compete />
			</Route>
			<Route exact path="/admin">
				<Admin />
			</Route>
			<Route exact path="/sign-up">
				<LayoutsAuth>
					<SignUp />
				</LayoutsAuth>
			</Route>
			<Route exact path="/">
				<LayoutsAuth>
					<Login />
				</LayoutsAuth>
			</Route>
		</Switch>
	)
}
