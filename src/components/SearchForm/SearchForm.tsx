import { Button, Grid, Paper, TextField } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from "react-hook-form";



const SearchForm = () => {
        const navigate = useNavigate()
        const [query, setQuery] = useState<string>()
        const { handleSubmit } = useForm()

        const handleSubmitForm = () => {
            navigate('/search?q=' + query)
        }

        
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} >
        <Grid container alignItems={'center'} justifyContent={'center'} marginY={4} gap={2}>
            <Grid item elevation={4} component={Paper}  xs={6}>
                <TextField
                onChange={(e) => setQuery(e.target.value)}
                label="Busca algum carro?"
                variant="filled"
                type='text'
                fullWidth />
            </Grid>
            <Grid item xs={1}>
                <Button
                type="submit"
                fullWidth
                variant="contained">
                    <SearchIcon />
                    Buscar
                </Button>
            </Grid>
        </Grid>
    </form>
  )
}

export default SearchForm