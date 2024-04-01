import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Card, CardContent, Typography } from "@mui/material";



const DescriptiveParagraph = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        width:' 100%',
        padding: '30px',
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <DirectionsCarIcon
        sx={{ fontSize: '60px', marginTop: '20px', marginLeft: '30px' }}
      />
      <CardContent>
        <Typography 
        textAlign={'center'}
        fontSize={20}
        id="card-description">
          Escolher um carro através do site AutoMercado é uma excelente ideia devido à conveniência, variedade e transparência que ele oferece aos consumidores. Ao utilizar essa plataforma online, os compradores têm acesso a uma ampla gama de veículos de diferentes marcas, modelos e faixas de preço, tudo em um único lugar. Isso permite uma comparação fácil entre diferentes opções, facilitando a tomada de decisão. Além disso, o AutoMercado fornece informações detalhadas sobre cada carro, incluindo especificações técnicas, histórico de manutenção e avaliações de outros usuários, o que ajuda os compradores a fazerem escolhas informadas. A possibilidade de pesquisar e comprar um carro sem sair de casa também economiza tempo e esforço. Com recursos de busca avançada e filtros personalizados, o AutoMercado torna o processo de encontrar o carro perfeito mais eficiente e menos estressante.
        </Typography>
        <Typography
        aria-describedby="card-description" 
        mb={1}>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DescriptiveParagraph