import { useStyles } from './style'
import { 
	Avatar, Button, Container, 
	CssBaseline, Grid, Link, 
	TextField, Typography 
} from '@material-ui/core'
import { useRef } from 'react';
import { useHistory } from 'react-router';
import { reqLogin } from '../../API';
import { Beforeunload } from 'react-beforeunload'

export const Login = () => {
	
	const history = useHistory()
	const classes = useStyles();
	const usuario = useRef(null)
	const senha = useRef(null)

	Beforeunload(evento => evento.preventDefault())

	const handleSubmit = async evento => {
		evento.preventDefault()
		await reqLogin(
			evento.target.usuario.value,
			evento.target.senha.value
		)
		.then(resp => console.log(resp.data))
	}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          
        </Avatar>
        <Typography component="h1" variant="h5">
          Entrar
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
            name="senha"
            label="Senha"
            type="password"
            id="senha"
            autoComplete="current-password"
						ref={senha}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link 
								href="#" 
								variant="body2"
								onClick={() => history.push('/cadastro-usuario')}
							>
                {"Não tem uma conta? Crie agora."}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}