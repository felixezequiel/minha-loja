import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import { validateToken } from "../../API"

export const Auth = createContext()
export const AuthProvider = ({ children }) => {
	const [authorization, setAuthorization] = useState({
		user: null,
		password: null,
		auth: false
	})

	const updateState = (user, auth) => {
		setAuthorization({
			user: user.user,
			password: user.pwd,
			auth: auth
		})
	}

	useEffect(() => {
		let user = localStorage.getItem('login')
		if (!user) return
		user = JSON.parse(user)
		const initial = async () => {
			await validateToken(user.token)
			.then(() => updateState(user, true))
			.catch(() => updateState(user, false))
		}
		initial()
	}, [])

	return (
		<Auth.Provider value={[authorization, setAuthorization]}>
			{children}
		</Auth.Provider>
	)
}