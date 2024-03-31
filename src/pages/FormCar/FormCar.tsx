import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import { api } from "../../lib/axios";
import { useNavigate } from "react-router-dom";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         BA App
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

interface FormData {
  brand: string;
  model: string;
  year: string;
  mileage: string;
  value: string;
  description: string;
  image: string;
}

const schema = z.object({
  brand: z.string(),
  model: z.string(),
  year: z.string(),
  mileage: z.string(),
  value: z.string(),
  description: z.string(),
  image: z.string(),
})
.refine((fields) => Number(fields.year) > 1980 || Number(fields.year) < 2024, {
    path: ['year'],
    message: 'Digite um ano válido.'
})
type FormProps = z.infer<typeof schema>;

const FormCar = () => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "all",
    reValidateMode: "onChange",
    resolver: zodResolver(schema),
  });

  const handleRegister = (data: FormData) => {
    const car = {
      brand: data.brand,
      model: data.model,
      year: data.year,
      mileage: data.mileage,
      value: data.value,
      description: data.description,
      img: data.image,
    };
    // console.log("registro");
    
    // console.log({ car });

    api.post('/cars', car)
    navigate('/cards')
  };

  return (
    // <Grid container component="main" height={'100vh'}>
    //     <h1>Form de CARRO meu nobre</h1>
    //   <Grid
    //     margin={'auto'}
    //     padding={3}
    //     item
    //     xs={12}
    //     sm={8}
    //     md={5}
    //     lg={4}
    //     component={Paper}
    //     elevation={4}
    //     square
    //   >
    //     <div>
    //       <Avatar>
    //         <LockOutlined />
    //       </Avatar>
    //       <Typography component="h1" variant="h5">
    //         Register
    //       </Typography>
    //       <form onSubmit={handleSubmit(handleRegister)}>
    //         <TextField
    //         {...register('name')}
    //         error={!!errors.name?.message}
    //         helperText={errors.name?.message}
    //         variant="outlined"
    //         margin="normal"
    //         required
    //         fullWidth
    //         label="Nome"
    //         type="text"
    //         autoFocus
    //         />
    //         <TextField
    //         {...register('email')}
    //         variant="outlined"
    //         margin="normal"
    //         required
    //         fullWidth
    //         label="Email"
    //         type="email"
    //         />
    //         <TextField
    //         {...register('password')}
    //         error={!!errors.password?.message}
    //         helperText={errors.password?.message}
    //         variant="outlined"
    //         margin="normal"
    //         required
    //         fullWidth
    //         label="Password"
    //         type="password"
    //         />
    //         <TextField
    //         {...register('confirmPassword')}
    //         error={!!errors.confirmPassword?.message}
    //         helperText={errors.confirmPassword?.message}
    //         variant="outlined"
    //         margin="normal"
    //         required
    //         fullWidth
    //         label="Confirm password"
    //         type="password"
    //         />
    //         {/* <FormControlLabel
    //           control={<Checkbox value="remember" />}
    //           label="Remember me"
    //         /> */}
    //         <Button
    //           type="submit"
    //           fullWidth
    //           variant="contained"
    //         >
    //           Sign In
    //         </Button>
    //         <Grid container>
    //           <Grid item>
    //             <NavLink to='/login'>
    //                 <Link variant="body2">
    //                 Já possui conta? Faça login agora!
    //                 </Link>
    //             </NavLink>
    //           </Grid>
    //         </Grid>
    //         <Box mt={5}>
    //           <Copyright />
    //         </Box>
    //       </form>
    //     </div>
    //   </Grid>
    // </Grid>

    <Card
      variant="outlined"
      sx={{
        maxHeight: "max-content",
        maxWidth: "80%",
        my: "50px",
        mx: "auto",
        padding: "15px",
        // to make the demo resizable
        overflow: "auto",
        resize: "horizontal",
      }}
    >
      <Typography
        variant="h4"
        display={"flex"}
        alignItems={"center"}
        marginY={2}
        gap={1}
      >
        <InfoOutlined fontSize="large" />
        Adicione um novo carro
      </Typography>
      <Divider />
      <form onSubmit={handleSubmit(handleRegister)}>
        <CardContent
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(80px, 1fr))",
            gap: 1.5,
          }}
        >
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormLabel>Marca</FormLabel>
            <Input 
              required {...register("brand")} />
          </FormControl>
          <FormControl>
            <FormLabel>Modelo</FormLabel>
            <Input 
              required {...register('model')}/>
          </FormControl>

          <FormControl>
            <FormLabel>Ano</FormLabel>

            {/* <TextField
            {...register('year')}
            error={!!errors.year?.message}
            helperText={errors.year?.message}
            variant='standard'
            margin="normal"
            required
            // fullWidth
            label=""
            type='number'
            /> */}

            <Input 
              type="number"
              
              required {...register('year')}
              error={!!errors.year?.message}
              
              // helperText={errors.year?.message}
              />
          </FormControl>

          <FormControl>
            <FormLabel>Quilometragem</FormLabel>
            <Input 
              required {...register('mileage')} />
          </FormControl>
          <FormControl>
            <FormLabel>Valor</FormLabel>
            <Input 
              required {...register('value')} />
          </FormControl>
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormControl>
              <FormLabel>Imagem</FormLabel>
              <Input 
                required {...register('image')} placeholder="Insira a url da imagem" />
            </FormControl>
          </FormControl>
          <FormControl sx={{ gridColumn: "1/-1" }}>
            <FormLabel>Descrição</FormLabel>
            <Input 
              required {...register('description')} />
          </FormControl>
          <CardActions sx={{ gridColumn: "1/-1" }}>
          <Button
              type="submit"
              fullWidth
              variant="contained"
            >
              Sign In
            </Button>
          </CardActions>
        </CardContent>
      </form>
    </Card>
  );
};

export default FormCar;
