import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
 <Container maxW={1400}>
<Box display={'flex'} alignItems={'center'}justifyContent={'space-between'}p={10} >
   <Link to={'/'}>
   <Heading>Basket</Heading>
   </Link>
   
<Link to={'/products'}>
<Heading> Products</Heading>
</Link>
</Box>
 </Container>
  )
}

export default Header