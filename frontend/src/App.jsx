import { Box, useColorModeValue } from "@chakra-ui/react" 
import {Route, Routes} from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ShoppingCart from "./pages/ShoppingCart";
import React from "react";

function App() {
    return (
        <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/create" element={<CreatePage/>} />
            <Route path="/cart" element={<ShoppingCart/>} />
        </Routes>
        </Box>
        
    );
}

export default App;