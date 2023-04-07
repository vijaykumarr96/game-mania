import React from 'react'
import { Platform } from '../hooks/useGames'
import { Text } from '@chakra-ui/react';

interface Props {
  platforms: Platform[];
}

function PlatformIconList({platforms}: Props) {
  return (
    <div>{platforms.map((platform) => <Text>{platform.name}</Text>)}</div>
  )
}

export default PlatformIconList