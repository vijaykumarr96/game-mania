import { Box, Card } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}
function GameCardContainer({ children }: Props) {
  return (
    <Box>
      <Card width={"300px"} borderRadius={"2xl"} overflow={"hidden"}>
        {children}
      </Card>
    </Box>
  );
}

export default GameCardContainer;
