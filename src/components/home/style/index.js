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
	&:hover {
		width: 240px;
		height: 140px;
	}
`