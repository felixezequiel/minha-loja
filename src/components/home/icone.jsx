import { useState } from "react"
import { useHistory } from "react-router"
import { InfoMenu } from "./infoMenu"
import { CaixaIcone } from "./style"

export const Icone = ({ menu }) => {
	const history = useHistory()
	const [coor, setCoor] = useState({
		left: 0,
		top: 0
	})
	const [infoIcone, setInfoIcone] = useState(false)
	
	const handleMouseMove = evento => {
		setInfoIcone(true)
		setCoor({
			left: (evento.clientX + 10),
			top: (evento.clientY - 20)
		})
	}

	const handleMouseOut = () => {
		setInfoIcone(false)
	}
	
	return (
		<div
			onMouseOut={() => handleMouseOut()}
		>
		{
			infoIcone ?
			<InfoMenu 
				coor={coor} 
				descricao={menu.descricao}
			/> :
			<></>
		}
			<CaixaIcone
				onMouseMove={evento => handleMouseMove(evento)}	
			>
				<img
					src={menu.urlIcone}
					height='90px'
					alt={menu.descricao}
					onClick={() => history.push(menu.rota)}
					style={{
						cursor: 'pointer'
					}}
				/>
			</CaixaIcone>
		</div>
	)
}