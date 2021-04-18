import { useHistory } from "react-router"
import { configMenu } from "./configMenu"
import { BodyHome, CaixaIcone, ContainerHome, HeaderHome } from "./style"

export const Home = () => {
	const history = useHistory()
	return (
		<ContainerHome>
			<HeaderHome>
				<h1>Minha Loja</h1>
			</HeaderHome>
			<BodyHome>
				{
					configMenu.map((menu, key) => (
						<CaixaIcone key={key}>
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
					))
				}
			</BodyHome>
		</ContainerHome>
	)
}