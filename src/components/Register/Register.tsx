import { Avatar, Box, Button, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "../../lib/axios";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { UserType } from "../../models/interfaces/ResultUserApi";
import { GetUsers } from "../../lib/getUsers";
import { CarType } from "../../models/interfaces/ResultApi";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        BA App
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface FormData  {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}

const regex = /^(?=.*[a-z])(?=.*[A-Z]).+$/

const schema = z
    .object({
        name: z.string().min(4, {message: 'Seu nome não pode ter menos de 4 caracters'}),
        email: z.string(),
        password: z.string().min(6, {message: 'A senha deve ter mais de 6 caracters'}),
        confirmPassword: z.string().min(6, {message: 'A senha deve ter mais de 6 caracters'}),
    })
    .refine((fields) => regex.test(fields.password) , {
        path: ['password'],
        message: 'A senha deve ter pelo menos 6 caracteres e conter uma letra maiúscula e uma letra minúscula'
    })
    .refine((fields) => fields.password === fields.confirmPassword, {
        path: ['confirmPassword'],
        message: 'As senhas precisam ser iguais'
    })
type FormProps = z.infer<typeof schema>

const Register = () => {
  const navigate = useNavigate()
  const { handleSubmit, register, formState: { errors } } = useForm<FormProps>({
      mode: 'all',
      reValidateMode: 'onChange',
      resolver: zodResolver(schema)
  })

  const [users, setUsers] = useState<UserType[]>()
  const { getedUsers } = GetUsers()

  useEffect(() => {
    setUsers(getedUsers)
  }, [getedUsers]);


  const isVerifiedUser=(username: string, password: string)=> {
    let usersFind
    users ? ( 
      usersFind = users.find((user)=> user.email === username && user.password === password) 
    ) : (
      usersFind = undefined
    )
    // usersFind && localStorage.setItem('auth', usersFind.id!.toString())
    return usersFind;
  };

  const registerSuccess = ( user: UserType ) => {
    api.post('/users', user)
    navigate('/login')
    toast.success("Cadastro feito, faça login em sua conta")
  }

  const HandleRegister = ( data: FormData ) => {
    const favorite: CarType[] = []
    const user = {
          name: data.name,
          email : data.email,
          password : data.password,
          favoriteCars: favorite
      }
    isVerifiedUser(data.email, data.password) ? (
      toast.warning("Já existe uma conta com esse email")
    ) : ( 
      registerSuccess( user )
    )
    
    
    // console.log(`Opa: ${useAuthExists(data.email, data.password)}`)

    // useAuthExists(data.email, data.password) ? (
    //   console.log('existe conta com ees email')
    //   ) : (
    //   console.log('nao existe conta com ees email')
    // )

    // const user = {
    //     name: data.name,
    //     email : data.email,
    //     password : data.password,
    //     favoriteCars: []
    // }
    // api.post('/users', user) 
    // navigate('/login')
    // toast.success("Cadastro feito, faça login em sua conta")
  };

  return (
    <Grid container component="main" height={'100vh'}>
      <Grid
        margin={'auto'}
        padding={3}
        item
        xs={12}
        sm={8}
        md={5}
        lg={4}
        component={Paper}
        elevation={4}
        square
      >
        <div>
          <Avatar>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registro
          </Typography>
          <form onSubmit={handleSubmit(HandleRegister)}>
            <TextField
            {...register('name')}
            error={!!errors.name?.message}
            helperText={errors.name?.message}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Nome"
            type="text"
            autoFocus
            />
            <TextField
            {...register('email')}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            />
            <TextField
            {...register('password')}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            />
            <TextField
            {...register('confirmPassword')}
            error={!!errors.confirmPassword?.message}
            helperText={errors.confirmPassword?.message}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Confirm password"
            type="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
            >
              Cadastrar
            </Button>
            <Grid container>
              <Grid item>
                <NavLink to='/login'>
                    <Link variant="body2">
                    Já possui conta? Faça login agora!
                    </Link>
                </NavLink>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default Register