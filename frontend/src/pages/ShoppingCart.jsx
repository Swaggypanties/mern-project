import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const ShoppingCart = () => {
  return (
    <Container>
        <Box w={"full"} bg={useColorModeValue("white", "gray.800")} p={6} rounded={"lg"} shadow={"md"}  >

        </Box>
    </Container>
  )
}

export default ShoppingCart
