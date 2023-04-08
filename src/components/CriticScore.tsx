import { Badge } from '@chakra-ui/react'

interface Props{
    score: number
}
function CriticScore({score}:Props) {
    let scoreColor = score > 75 ? "green": score > 60 ? "yellow" : "red" 
  return (
    <Badge colorScheme={scoreColor} fontSize={"sm"} paddingX={2} borderRadius={"md"}>{score}</Badge>
  )
}

export default CriticScore