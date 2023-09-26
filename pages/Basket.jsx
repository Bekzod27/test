import { Box, Container, ListItem, OrderedList, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { Basketcontext } from "../provider/Basketcontext";
const Basket = () => {
  const { store } = useContext(Basketcontext);
      
  console.log(store);
  return (
    <Container maxW={1400} p={10}>
      <Box>
        <OrderedList>
          {store.map((item) => (
            <ListItem key={item.id} border={"1px solid gray"} p={"10px"}>
              <Text>Author:{item.author}</Text>
              <Text>Title:{item.title}</Text>
              <Text>Content:{item.content}</Text>
            </ListItem>
          ))}
        </OrderedList>
      </Box>
    </Container>
  );
};

export default Basket
