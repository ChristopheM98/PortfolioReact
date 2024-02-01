import {FunctionComponent} from 'react'
import {Button, Grid, GridItem, Heading, Input, InputGroup, InputLeftElement} from '@chakra-ui/react'
import {EmailIcon, PhoneIcon} from '@chakra-ui/icons'

const ContactForm: FunctionComponent = () => {
    return (
        <div >
            <Heading as='h2' size='xl' mt={10} mb={25} textAlign={'center'}>
                Contacteer mij!
            </Heading>

            <Grid templateColumns='repeat(2, 1fr)' gap={5} className={'gridContact'}>
                <Input placeholder='Voornaam' size='md' />
                <Input placeholder='Achternaam' size='md' />
                <InputGroup>
                    <InputLeftElement>
                        <EmailIcon color='gray.300'/>
                    </InputLeftElement>
                    <Input type="email" name="email" placeholder="Email" />
                </InputGroup>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <PhoneIcon color='gray.300' />
                    </InputLeftElement>
                    <Input type='tel' placeholder='Telefoonnummer' />
                </InputGroup>
                <GridItem colSpan={2}>
                    <Input type='tel' placeholder='Uw bericht' />
                </GridItem>
            </Grid>
            <div className={'btnContact'}>
                <Button colorScheme='green' variant='solid'>
                    Versturen
                </Button>
            </div>
        </div>
    )
}

export default ContactForm