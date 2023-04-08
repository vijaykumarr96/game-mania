import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { Igame, Platform } from '../hooks/useGames';
import { platform } from 'os';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
interface Props{
  game: Igame
}

function GameCard({game}:Props) {
  return (
    <Card borderRadius={"2xl"} overflow={"hidden"}>
        <Image src={game.background_image}/> 
        <CardBody>
          <Heading fontSize={{sm:"sm", md:"md", lg:"lg"}}>
            {game.name}
          </Heading>
          <HStack justifyContent={"space-between"} color={}>
          <PlatformIconList platforms={game.parent_platforms.map(platforms => platforms.platform)} />
          <CriticScore score={game.metacritic}/>
          </HStack>
        </CardBody>
    </Card>
  )
}

export default GameCard