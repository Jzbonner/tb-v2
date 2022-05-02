import React, { useRef } from "react"
import {
  Flex,
  Box,
  HStack,
  Button,
  Text,
  Circle,
  Image,
  Center,
  Heading,
  Avatar,
  Stack,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react"
import { AtSignIcon, ChatIcon, CalendarIcon, MoonIcon } from "@chakra-ui/icons"

const Navigation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (
    <Flex p={8} mb={5} ml={5} mr={5} borderBottom="2px" borderColor="grey">
      <Image
        ref={btnRef}
        onClick={onOpen}
        bg="baseTone"
        borderRadius="full"
        p={{ sm: "0.5rem", md: "0.45rem" }}
        w={{ sm: "20%", md: "4rem" }}
        src="https://res.cloudinary.com/dzmc7doja/image/upload/v1651473730/design-assets/design-icon-assets/3d.png"
        alt="site-logo"
        _hover={{
          cursor: "pointer",
          transition: "all 0.2s ease-in-out",
          transform: "translateY(-2px)",
          boxShadow: "lg",
        }}
      />
      <HStack
        visibility={{ sm: "hidden", md: "visible" }}
        ml={{ sm: 2, md: 4 }}
        spacing={{ sm: "10px", md: "20px" }}
      >
        <Text color="blackAlpha.500" fontWeight="bold" fontSize="sm">
          home.
        </Text>
        <Text color="blackAlpha.500" fontWeight="bold" fontSize="sm">
          about.
        </Text>
        <Text color="blackAlpha.500" fontWeight="bold" fontSize="sm">
          motivation.
        </Text>
      </HStack>
      <Spacer />
      <HStack ml={{ sm: -24, md: 0 }} spacing={{ sm: "2rem", md: "2rem" }}>
        <AtSignIcon />
        <ChatIcon />
        <CalendarIcon />
        <MoonIcon />
      </HStack>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Center mt={8} py={6}>
              <Box
                maxW={"270px"}
                w={"full"}
                bg={useColorModeValue("white", "gray.800")}
                boxShadow={"2xl"}
                rounded={"lg"}
                overflow={"hidden"}
              >
                <Image
                  h={"120px"}
                  w={"full"}
                  src={
                    "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                  }
                  objectFit={"cover"}
                />
                <Flex justify={"center"} mt={-12}>
                  <Avatar
                    size={"xl"}
                    src={
                      "https://res.cloudinary.com/dzmc7doja/image/upload/v1623709749/portfolio-site/profile2021.jpg"
                    }
                    alt={"Author"}
                    css={{
                      border: "2px solid white",
                    }}
                  />
                </Flex>

                <Box p={6}>
                  <Stack spacing={0} align={"center"} mb={5}>
                    <Heading
                      fontSize={"2xl"}
                      fontWeight={500}
                      fontFamily={"body"}
                    >
                      Jarrett Bonner
                    </Heading>
                    <Text color={"gray.500"}>Engineering Solutions</Text>
                  </Stack>
                  <Circle h="0.0625rem" mr={4} ml={4} bg="baseTone"></Circle>

                  <Button
                    w={"full"}
                    mt={8}
                    bg={useColorModeValue("#151f21", "gray.900")}
                    color={"white"}
                    rounded={"md"}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                  >
                    Follow
                  </Button>
                  <Button
                    w={"full"}
                    mt={8}
                    bg={useColorModeValue("#151f21", "gray.900")}
                    color={"white"}
                    rounded={"md"}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                  >
                    Follow
                  </Button>
                  <Button
                    w={"full"}
                    mt={8}
                    bg={useColorModeValue("#151f21", "gray.900")}
                    color={"white"}
                    rounded={"md"}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                  >
                    Follow
                  </Button>
                </Box>
              </Box>
            </Center>
          </DrawerBody>

          <DrawerFooter>
            <Flex> Copyright | 2022</Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  )
}

export default Navigation
