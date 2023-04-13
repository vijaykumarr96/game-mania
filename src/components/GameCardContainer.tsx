import { Box, Card } from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}
function GameCardContainer({ children }: Props) {
  return (
    <Card borderRadius={"2xl"} overflow="hidden">
      {children}
    </Card>
  );
}

export default GameCardContainer;
