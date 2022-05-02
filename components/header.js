import React from "react"
import { Box, Text } from "@chakra-ui/react"

const Header = () => {
  return (
    <Box>
      <Text align="center" fontSize={{ sm: "5xl", md: "9xl" }}>
        THINK BROADLY
      </Text>
      <Text
        mt={{ sm: "-4.5rem", md: "-11.25rem" }}
        ml={{ sm: "0.5rem", md: "0.5rem" }}
        color="blackAlpha.500"
        align="center"
        fontSize={{ sm: "5xl", md: "9xl" }}
      >
        THINK BROADLY
      </Text>
    </Box>
  )
}

export default Header
