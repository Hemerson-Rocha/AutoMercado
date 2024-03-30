import './Contact.css'

import { 
  Typography,
  TextField,
  Button,
  Grid,
  // Box 
} from '@mui/material';

const Contact = () => {
  return (
      <Grid container justifyContent={'center'}>
        <Grid item xs={2}>
          <Typography variant="h5">
            SIGNIN FORM
          </Typography>
            
          <form>
            <TextField
              style={{ width: `100%`, margin: "5px" }}
              type="text"
              label="setgoal"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: `100%`, margin: "5px" }}
              type="text"
              label="goal description"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: `100%`, margin: "5px" }}
              type="text"
              label="Diversity catagory"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: `100%`, margin: "5px" }}
              type="text"
              label="Attribute"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: `100%`, margin: "5px" }}
              type="text"
              label="goal stage"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: `100%`, margin: "5px" }}
              type="number"
              label="job id"
              variant="outlined"
            />
            <br />
            <TextField
              style={{ width: `100%`, margin: "5px" }}
              type="text"
              label="job region"
              variant="outlined"
            />
            <br />
            <Button variant="contained" color="primary">
              save
            </Button>
          </form>
        </Grid>
      </Grid>



    // <section className='ContainerFormContact'>
    //     <h2>Contato</h2>
    //     <form className='FormContact'>
    //         <label>Nome</label>
    //         <input type="text" name="name" placeholder="Digite seu nome" autoCapitalize="off" required />
    //         <label>Email</label>
    //         <input type="email" name="email" placeholder="Digite seu email" autoComplete="off" required />
    //         <label>Mensagem</label>
    //         <textarea name="message" cols="30" rows="10" placeholder="Digite sua mensagem" required></textarea>
    //         <button type="submit">Enviar</button>
    //     </form>
    // </section>
  )
}

export default Contact