import { configMenu } from "./configMenu"
import { Icone } from "./icone"
import { BodyHome, ContainerHome, HeaderHome } from "./style"

export const Home = () => {
	
	return (
		<ContainerHome>
			<HeaderHome>
				<h1>Minha Loja</h1>
			</HeaderHome>
			<BodyHome>
				{
					configMenu.map((menu, key) => (
						<Icone menu={menu} key={key} />
					))
				}
			</BodyHome>
		</ContainerHome>
	)
}