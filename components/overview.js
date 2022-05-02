import React from "react"
import { Box, VStack, SimpleGrid, Text } from "@chakra-ui/react"

const Overview = () => {
  return (
    <Box p={2} ml={8} mr={8}>
      <SimpleGrid spacing="20px" columns={{ sm: 1, md: 2 }}>
        <VStack align="left" border="2px" p={2}>
          <Text fontWeight="bold" fontSize="lg">
            tech news.
          </Text>
          <Text>Column Data</Text>
        </VStack>
        <VStack align="left" border="2px" p={2}>
          <Text fontWeight="bold" fontSize="lg">
            fin news.
          </Text>
          <Text>Column Data</Text>
        </VStack>
      </SimpleGrid>
    </Box>
  )
}

export default Overview
