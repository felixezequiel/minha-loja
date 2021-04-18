import { useStyles } from '../login/style'
import {
	Avatar, Button, Container,
	CssBaseline,
	TextField, Typography
} from '@material-ui/core'
import { useRef } from 'react';
import { msgRegistredSucessful, msgSenhaDiferente, msgUserExists } from '../../helpers/mensagens';
import { insertUsuario, userExists } from '../../API';
import { useHistory } from 'react-router';

export const CadastroUsuario = () => {
	const classes = useStyles();
	const usuario = useRef(null)
	const senha = useRef(null)
	const senhaRepetida = useRef(null)
	const history = useHistory()

	const handleSubmit = async evento => {
		evento.preventDefault()
		if (evento.target.password.value !== evento.target.passwordRepeat.value) return msgSenhaDiferente()
		await userExists(evento.target.usuario.value)
			.then(() => insertUsuario(evento.target.usuario.value, evento.target.password.value)
				.then(() => msgRegistredSucessful().then(() => {
					history.push('/')
				})))
			.catch(() => msgUserExists())

	}

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>

				</Avatar>
				<Typography component="h1" variant="h5">
					Cadastro de Usuario
        </Typography>
				<form className={classes.form} noValidate
					onSubmit={evento => handleSubmit(evento)}
				>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="usuario"
						label="Usuario"
						name="usuario"
						autoFocus
						ref={usuario}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Senha"
						type="password"
						id="password"
						ref={senha}
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="passwordRepeat"
						label="Repetir Senha"
						type="password"
						id="passwordRepeat"
						ref={senhaRepetida}
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="secondary"
						className={classes.submit}
					>
						Criar Conta
          </Button>
				</form>
			</div>
		</Container>
	);
}