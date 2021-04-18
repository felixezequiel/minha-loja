import swal from 'sweetalert'

export const msgSenhaDiferente = () => swal('As senhas precisam ser as mesmas', 'Tente novamente!', 'warning')

export const msgUserExists = () => swal('Este usuario já esta sendo utilizado', 'Tente novamente!', 'error')

export const msgRegistredSucessful = () => swal('Cadastro realizado com sucesso', 'Você sera redirecionado para a tela de login', 'success')