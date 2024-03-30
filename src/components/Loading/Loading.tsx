import { Grid, Skeleton } from '@mui/material'
import './Loading.css'

const Loading = () => {
  return (
    <Grid item xs={7} md={6} lg={4} xl={3} sx={{margin:'auto'}}>
      <Skeleton variant="rounded" width={`100%`} height={450} />
    </Grid>
  )
}

export default Loading