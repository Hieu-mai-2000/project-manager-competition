import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/login/login'
import SignUp from './components/signUp/signUp'
import LayoutsAuth from './layouts/auth/auth'
import EditCompete from './page/admin/editCompete/editCompete'
import CreateCompete from './page/admin/createCompete/createCompete'
import Admin from './page/admin'

export default function Router() {
	return (
		<Switch>
			<Route exact path="/admin/compete/:id">
				<EditCompete />
			</Route>
			<Route exact path="/admin/compete">
				<CreateCompete />
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

// function AdminPage() {
// 	console.log('vo day')
// 	return (
// 		<Switch>
// 			<Route exact path="/compete/:id">
// 				<EditCompete />
// 			</Route>
// 			<Route exact path="/">
// 				<Admin />
// 			</Route>
// 			{/* <Route>
// 				<ErrorPage errorCode={404} message={'Not Found'} />
// 			</Route> */}
// 		</Switch>
// 	)
// }
