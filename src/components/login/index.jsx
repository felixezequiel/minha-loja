import { useStyles } from './style'
import { 
	Avatar, Button, Container, 
	CssBaseline, Grid, Link, 
	TextField, Typography 
} from '@material-ui/core'
import { useContext  } from 'react';
import { useHistory } from 'react-router';
import { reqLogin } from '../../API';
import { Auth } from '../../Provider/auth';

export const Login = () => {
	const [, setAuthorization] = useContext(Auth)
	const history = useHistory()
	const classes = useStyles();

  const cachedLogin = login => localStorage.setItem('login', JSON.stringify(login))
  
	const handleSubmit = async evento => {
		evento.preventDefault()
		await reqLogin(
			evento.target.usuario.value,
			evento.target.senha.value
		)
		.then(resp => {
      setAuthorization({
        user: evento.target.usuario.value,
        password: evento.target.senha.value,
        auth: true
      })
      cachedLogin(resp.data)
      history.push('/home')
    })
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
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link 
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