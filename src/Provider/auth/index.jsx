import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"

export const Auth = createContext()
export const AuthProvider = ({ children }) => {
	const [authorization, setAuthorization] = useState({
		user: null,
		password: null,
		auth: false
	})

	useEffect(() => {
		let user = localStorage.getItem('user')
		if (!user) return 
		
	})

	return (
		<Auth.Provider value={[authorization, setAuthorization]}>
			{children}
		</Auth.Provider>
	)
}