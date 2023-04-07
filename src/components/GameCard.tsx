import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import { Igame, Platform } from '../hooks/useGames';
import { platform } from 'os';
import PlatformIconList from './PlatformIconList';
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
          <PlatformIconList platforms={game.parent_platforms.map(platforms => platforms.platform)} />
        </CardBody>
    </Card>
  )
}

export default GameCard