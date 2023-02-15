import { useRouter } from 'next/router'
import { Box, Img, SimpleGrid, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'

const AllowedPage: React.FC = () => {
  const {
    query: { country },
  } = useRouter()

  return ( 
     <div>
    <Box bg={mode('gray.50', 'gray.800')} as="section" py={{ base: '12', md: '24' }}>
    <h1>In the {country}, Sous Vide is the best way to cook burgers</h1>
    <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '12', xl: '20' }}
        align="center"
      >
        <Box maxW="450px" flex="1" m={15} h={{ base: '240px', md: '400px' }} flexShrink={0} >
          <Img
            htmlWidth="450px"
            htmlHeight="500px"
            w="full"
            h="full"
            objectFit="cover"
            src="https://cdn.vox-cdn.com/thumbor/rwRvPN3YeTXcX9nUltnfviij38k=/0x0:2048x1363/1200x0/filters:focal(0x0:2048x1363):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19343851/classic_smash_double.jpg"
          />
            <h1>SmashBurgers</h1>
            <p>The smashburger is the original burger. It’s simple, classic, and built for flavor.</p>
        </Box>
      </Stack>
    </Box>
  </Box>
     </div>
     )
  
  
}

export default AllowedPage
