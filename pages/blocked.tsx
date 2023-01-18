import { useRouter } from 'next/router'
import { Box, Img, Stack, useColorModeValue as mode } from '@chakra-ui/react'

const BlockedPage: React.FC = () => {
  const {
    query: { country },
  } = useRouter()

  return ( 
    <div>
      <p>{`You are from ${country}, so you are on team Sarah`}</p>
   <Box bg={mode('gray.50', 'gray.800')} as="section" py={{ base: '12', md: '24' }}>
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
           src="/sarah-by-sarah.jpg"
         />
           <h1>Sarah Drasner</h1>
           <p>Sarah Drasner believes (incorrectly) that burgers taste better when you do weird shit like putting them in the bath.</p>
       </Box>
       <Box maxW="450px" flex="1" m={15} h={{ base: '240px', md: '400px' }} flexShrink={0}>
       <Img
           htmlWidth="450px"
           htmlHeight="500px"
           w="full"
           h="full"
           objectFit="cover"
           src="jason-by-sarah.jpg"
         />
         <h1>Jason Lengstorf</h1>
         <p>Jason Lengstorf knows the best burgers are honest. Simple ingredients, classic flavors, and no bullshit.</p>
       </Box>
     </Stack>
   </Box>
 </Box>
    </div>
    )
}

export default BlockedPage
