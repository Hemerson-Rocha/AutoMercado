import { useEffect, useState } from "react";
import { Avatar, Box, Button, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { UserType } from "../../models/interfaces/ResultUserApi"
import { GetUsers } from "../../lib/getUsers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

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

const schema = z
    .object({
        email: z.string(),
        password: z.string().min(6, {message: 'A senha deve ter mais de 6 caracters'}),
    })

type FormProps = z.infer<typeof schema>

export default function Login() {
  const navigate = useNavigate()
  const [users, setUsers] = useState<UserType[]>()
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>()
  const { handleSubmit, register, formState: { errors } } = useForm<FormProps>({
      mode: 'all',
      reValidateMode: 'onChange',
      resolver: zodResolver(schema)
  })
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
    usersFind && localStorage.setItem('auth', usersFind.id!)
    return usersFind;
  };

  const loginSucess = () => {
    navigate('/')
    toast.success("Bem vindo de volta")
  }

  const handleLogin = () => {
    (username && password) &&
      (isVerifiedUser(username, password)) ? (
        loginSucess()
      ) : ( 
        toast.error("Email ou senha incorretos")
      )  
    
    
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
            Sign in
          </Typography>
          <form onSubmit={handleSubmit(handleLogin)}>
            <TextField
            {...register('email')}
            onChange={(e)=>setUsername(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            type="email"
            autoFocus
            />
            <TextField
            {...register('password')}
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            onChange={(e)=> setPassword(e.target.value)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
            >
              Entrar
            </Button>
            <Grid container>
              <Grid item>
              <NavLink to='/register'>
                    <Link variant="body2">
                    {"Ainda não tem uma conta? Crie uma agora!"}
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