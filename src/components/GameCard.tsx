import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { Igame } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import { getCroppedImageUrl } from '../services/image-url';
interface Props{
  game: Igame
}

function GameCard({game}:Props) {
  return (
    <Card width={"300px"} borderRadius={"2xl"} overflow={"hidden"}>
        <Image src={getCroppedImageUrl(game.background_image)}/> 
        <CardBody>
          <Heading fontSize={{sm:"sm", md:"md", lg:"lg"}}>
            {game.name}
          </Heading>
          <HStack justifyContent={"space-between"}>
          <PlatformIconList platforms={game.parent_platforms.map(platforms => platforms.platform)} />
          <CriticScore score={game.metacritic}/>
          </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard