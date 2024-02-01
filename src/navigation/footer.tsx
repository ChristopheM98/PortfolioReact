import {FunctionComponent} from 'react'
import {
    Box,
    Container,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {IoIosMail} from 'react-icons/io'
import {CSSProperties} from 'styled-components'

const footer: CSSProperties = {
    position: 'fixed',
    width: '100%',
    bottom: 0,
}

const Footer: FunctionComponent = () => {
    return (
        <Box
            style={footer}
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    <Text>© 2024 Christophe Mathieu</Text>
                    <Stack direction={'row'} spacing={6}>
                        <a href={'https://www.facebook.com/christophe.mathieu.7583'} target={'_blank'}><FaFacebook/></a>
                        <a href={'https://www.instagram.com/mathieu.c98/'} target={'_blank'}><FaInstagram/></a>
                        <a href={'https://www.linkedin.com/in/christophe-mathieu-183594268/'} target={'_blank'}><FaLinkedin/></a>
                        <a href={'mailto:christophe.mathieu@hotmail.com'}><IoIosMail/></a>
                    </Stack>
                </Container>
            </Box>
        </Box>
    )
}

export default Footer