import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Igame } from '../hooks/useGames';

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
        </CardBody>
    </Card>
  )
}

export default GameCard