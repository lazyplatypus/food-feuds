import { Button, Box, Img, Stack, useColorModeValue as mode, Center } from '@chakra-ui/react'
import Link from 'next/link'

const IndexPage: React.FC = () => {
  return ( 
     <div>
    <Box bg={mode('gray.50', 'gray.800')} as="section" py={{ base: '12', md: '24' }}>
    <h1>This is Truth to Burgers - the site that tells you what the best way to cook burgers is</h1>
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
        <Box maxW="450px" flex="1" m={15} h={{ base: '240px', md: '400px' }} flexShrink={0}>
        <Img
            htmlWidth="450px"
            htmlHeight="500px"
            w="full"
            h="full"
            objectFit="cover"
            src="https://www.seriouseats.com/thmb/EAcPG2oxKQ-jLlp8UIa6clPRZWQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__07__20150702-sous-vide-hamburger-anova-primary-bf5eefff4505446f9cbf33f5f2d9b2e6.jpg"
          />
          <h1>Sous Vide Burgers</h1>
          <p>Cooking burgers sous vide allows for unparalleled control over cooking temperature and, therefore, level of juiciness.</p>
        </Box>
      </Stack>
        <Center>     <Link href="/answers"><Button>Find out the real winner</Button></Link></Center>
    </Box>
  </Box>
     </div>
     )
  
  
}

export default IndexPage
