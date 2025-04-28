import React from "react";
import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // For the darkmode/lightmode

  return (
    <div>
      <Container maxW={"1140px"} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{ base: "column", sm: "row" }}
        >
          <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient={"linear(to-l, #7928CA, #FF0080)"}
            bgClip={"text"}
          >
            <Link to={"/"}>Sari-Sari Store 🛒</Link>
          </Text>

          <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
              <Button>
                <PlusSquareIcon fontSize={20} />
              </Button>
            </Link>
            <Button onClick={toggleColorMode}>
              {" "}
              {/* Here you can now toggle light or dark mode*/}
              {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
            </Button>
            <Link to={"/cart"}>
              <Button _hover={{ bg: "green.400" }}>🛒</Button>
            </Link>
          </HStack>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;
