import { useWidth } from "../../hooks/useWidth"
import './Home.css'
import banner_full from '../../assets/banner_full.jpg'
import banner_mobile from '../../assets/banner_mobile.jpg'
import { useContext } from "react"
import { AuthContext } from '../../contexts/AuthContext'
import { Box, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material"
import GetUserLoged from "../../lib/GetUserLoged"
import DescriptiveParagraph from "./components/DescriptiveParagraph"
import AddIcon from '@mui/icons-material/Add';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Home = () => {

  const { setAuth } = useContext(AuthContext)

  const userLoged = GetUserLoged()

  userLoged && setAuth(userLoged)

  return (
    <>
      <div className="container_banner">
      <img
          src={(useWidth() === 'xs') ? banner_mobile : banner_full}
          loading="lazy"
      />
    </div>
    <Box>
      <Grid container>

        <Grid item xs={9} margin={'70px auto'}>
          <DescriptiveParagraph />
        </Grid>
        <Grid item xs={9} margin={'70px auto'}>
          <Typography variant="h4" component="h2" gutterBottom>
            Existem várias razões para usar o site <span style={{color:'#3113ff'}}> AutoMercado</span> ao procurar um carro:
          </Typography>
        </Grid>

        <Grid item xs={9} margin={'70px auto'}>
          <Card sx={{  }}>
            <CardActionArea>
              <Grid container>
                <Grid xs={3}
                sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <AddIcon
                    sx={{fontSize:'90px'}}/>
                </Grid>
                <Grid xs={8}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Variedade de Opções:
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      O AutoMercado oferece uma ampla gama de veículos, desde carros novos até usados, de diferentes marcas, modelos e faixas de preço. Isso proporciona aos compradores uma grande variedade de opções para encontrar o carro que melhor se adapte às suas necessidades e orçamento.
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={9} margin={'70px auto'}>
          <Card sx={{  }}>
            <CardActionArea>
              <Grid container>
                <Grid xs={8}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Transparência e Informações Detalhadas:
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                     O site fornece informações detalhadas sobre cada carro listado, incluindo especificações técnicas, histórico de manutenção e até mesmo avaliações de outros usuários. Isso ajuda os compradores a fazerem escolhas informadas, permitindo que conheçam melhor o veículo antes de decidir pela compra.
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid xs={3} 
                sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <ContentPasteSearchIcon
                    sx={{fontSize:'90px'}}/>
                </Grid>
              </Grid>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={9} margin={'70px auto'}>
          <Card sx={{  }}>
            <CardActionArea>
              <Grid container>
                <Grid xs={3}
                sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <EmojiEmotionsIcon
                    sx={{fontSize:'90px'}}/>
                </Grid>
                <Grid xs={8}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Conveniência e Facilidade de Uso: 
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    Utilizar o AutoMercado é conveniente e fácil, pois os compradores podem pesquisar e comparar diferentes carros sem sair de casa. Com recursos de busca avançada e filtros personalizados, encontrar o carro ideal é simplificado, economizando tempo e esforço durante o processo de compra.
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </CardActionArea>
          </Card>
        </Grid>


      </Grid>
    </Box>
    </>
  )
}

export default Home