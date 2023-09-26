import {
  Box,
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  List,
  ListItem,
  OrderedList,
  Text,
} from "@chakra-ui/react";
// import { useTodoContext } from "../provider/TodoProvider";
import React, { useEffect, useState, useContext } from "react";
import { Basketcontext } from "../provider/Basketcontext";
import axios from "axios";

const Products = () => {
  const {setStore} = useContext(Basketcontext)
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
 
  const AddData = async (data) => {
    try {
      await axios
        .post("http://localhost:5000/api/posts", data)
        .then((res) => setStore(res));
    } catch (e) {
      console.log(e);
    }
  };
  const handleSumbit = (event) => {
    event.preventDefault();
    let inputData = {
      author: author,
      title: title,
      content: content,
    };
    AddData(inputData);
  };
  return (
    <Container maxW={1400} p={10}>
      <FormControl as={"form"} onSubmit={handleSumbit}>
        <Input
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="author"
          mt={2}
          required
        />
        <Input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
          my={2}
          required
        />
        <Input
          onChange={(e) => setContent(e.target.value)}
          placeholder="content"
          required
        />
        <Box display={"flex"} justifyContent={"center"} my={5}>
          <Button  w={"150px"} type="sumbit" colorScheme="green">
            Add to Products
          </Button>
        </Box>
      </FormControl>
      
    </Container>
  );
};

export default Products;