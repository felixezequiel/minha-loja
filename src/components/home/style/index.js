import styled from 'styled-components'
import { colorPalette } from '../../../colorPalette'

export const ContainerHome = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	align-items: center;
	flex-direction: column;

	background-color: ${colorPalette.branco};
`

export const HeaderHome = styled.div `
	background-color: ${colorPalette.begeMedium};
	color: ${colorPalette.branco};

	width: 100%;
	

	display: flex;
	align-items: center;
	justify-content: center;
	
	font-size: 24pt;
`

export const BodyHome = styled.div`
	width: 60%;

	display: flex;
	align-items: center;
	flex-wrap: wrap;

	padding-top: 80px;
`

export const CaixaIcone = styled.div`
	padding: 20px;
	width: 250px;
	height: 150px;
	margin: 10px;

	display: flex;
	align-items: center;
	justify-content: center;

	background-color: ${colorPalette.branco};

	box-shadow: 4px 4px 10px ${colorPalette.begeLigth};
`

export const ContainerInfoMenu = styled.div.attrs(props => {
	return {
		style: {
			top: props.coor.top + 'px',
			left: props.coor.left + 'px'
		}
	}
})`
	position: fixed;
	padding: 3px;
	background-color: ${colorPalette.begeLigth};
	color: ${colorPalette.branco};
	box-shadow: 0 0 10px ${colorPalette.branco};

	border-radius: .5em;

`