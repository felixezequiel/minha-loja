import { ContainerInfoMenu } from "./style"

export const InfoMenu = ({ descricao, coor }) => {
	console.log('render')
	return (
		<ContainerInfoMenu coor={coor}>
			<span>
				{descricao}
			</span>
		</ContainerInfoMenu>
	)
}