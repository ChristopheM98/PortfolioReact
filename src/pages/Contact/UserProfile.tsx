import {FunctionComponent} from 'react'
import image from '../../assets/images/contact.jpg'
import {
    Badge,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import {
    EmailIcon, PhoneIcon, SearchIcon,
} from '@chakra-ui/icons'

interface UserProfileProps {

}

const UserProfile: FunctionComponent<UserProfileProps> = () => {
    return (
        <Center py={6}>
            <Stack
                borderWidth="2px"
                borderRadius="lg"
                w={{ sm: '100%', md: '640px' }}
                height={{ sm: '476px', md: '24rem' }}
                direction={{ base: 'column', md: 'row' }}

                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                padding={4}>
                <Flex flex={1} bg="blue.200">
                    <Image
                        objectFit="cover"
                        boxSize="100%"
                        src={image}
                        alt="Christophe"
                    />
                </Flex>
                <Stack
                    flex={1}
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    p={1}
                    pt={2}>
                    <Heading fontSize={'3xl'} fontFamily={'body'}>
                        Christophe Mathieu
                    </Heading>
                    <Text
                        textAlign={'center'}
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        color={useColorModeValue('gray.700', 'gray.400')}
                        px={3}
                        py={6}>
                        Jong en gedreven met een passie voor IT. Vragen, opmerkingen,...? Contacteer mij!
                    </Text>
                    <Stack align={'center'} justify={'center'} direction={'row'} mt={1}>
                        <Badge
                            px={2}
                            py={1}
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            #programming
                        </Badge>
                        <Badge
                            px={2}
                            py={1}
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            #.NET
                        </Badge>
                        <Badge
                            px={2}
                            py={1}
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            bg={useColorModeValue('gray.50', 'gray.800')}
                            fontWeight={'400'}>
                            #Javascript
                        </Badge>
                    </Stack>
                    <Stack align={'center'} justify={'center'} direction={'row'} mt={5}>
                        <EmailIcon/><a href="mailto:christophe.mathieu@hotmail.com">christophe.mathieu@hotmail.com</a>
                    </Stack>
                    <Stack align={'center'} justify={'center'} direction={'row'} mt={1}>
                        <PhoneIcon/><a href="tel:+32476791411">+32476791411</a>
                    </Stack>
                    <Stack align={'center'} justify={'center'} direction={'row'} mt={1}>
                        <SearchIcon/><p>Eggestraat 19, 2350 Vosselaar, BE</p>
                    </Stack>
                </Stack>
            </Stack>
        </Center>
    )
}

export default UserProfile