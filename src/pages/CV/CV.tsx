import {FunctionComponent} from 'react'
import {
    Heading, ListItem,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs, UnorderedList, Text, Progress, Table, Tbody, Tr, Th, Td, TableContainer
} from '@chakra-ui/react'
import TablePersGegevens from './TablePersGegevens.tsx'
import AccordionWerkervaring from './AccordionWerkervaring.tsx'

interface CvProps {

}

const CV: FunctionComponent<CvProps> = () => {
    return (
        <>
            <Heading as='h2' size='xl' mt={5} mb={25} textAlign={'center'}>
                Curriculum Vitae
            </Heading>
            <Tabs variant='soft-rounded' colorScheme='green'>
                <TabList>
                    <Tab>Persoonlijke gegevens</Tab>
                    <Tab>Werkervaring</Tab>
                    <Tab>Opleidingen</Tab>
                    <Tab>Cursussen</Tab>
                    <Tab>Talen</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <TablePersGegevens/>
                    </TabPanel>
                    <TabPanel>
                        <AccordionWerkervaring/>
                    </TabPanel>
                    <TabPanel>
                        <UnorderedList >
                            <ListItem><Text as='b'>2021 - heden:</Text> Graduaat programmeren - Thomas More hogeschool, Geel</ListItem>
                            <ListItem><Text as='b'>2017 - 2018:</Text> Informatica HBO5 - CVO HIK, Geel</ListItem>
                            <ListItem><Text as='b'>2016 - 2017:</Text> Logistiek - Stedelijke Handelsschool, Turnhout</ListItem>
                            <ListItem><Text as='b'>2010 - 2016:</Text> Handel-ICT - Stedelijke Handelsschool, Turnhout</ListItem>
                        </UnorderedList>
                    </TabPanel>
                    <TabPanel>
                        <UnorderedList>
                            <ListItem>2016 - Attest hef- en reachtruckbestuurder/ NOA Trainings Turnhout</ListItem>
                            <ListItem>2021 - Elektriciteit 1 / CVO EduKempen Turnhout</ListItem>
                        </UnorderedList>
                    </TabPanel>
                    <TabPanel>
                        <TableContainer>
                            <Table variant='simple'>
                                <Tbody>
                                    <Tr>
                                        <Th width={'20%'}>Nederlands</Th>
                                        <Td><Progress colorScheme={'green'} hasStripe={true} value={100}/></Td>
                                    </Tr>
                                    <Tr>
                                        <Th width={50}>Engels</Th>
                                        <Td><Progress colorScheme={'green'} hasStripe={true} value={85}/></Td>
                                    </Tr>
                                    <Tr>
                                        <Th width={50}>Frans</Th>
                                        <Td><Progress colorScheme={'green'} hasStripe={true} value={60}/></Td>
                                    </Tr>
                                    <Tr>
                                        <Th width={50}>Italiaans</Th>
                                        <Td><Progress colorScheme={'green'} hasStripe={true} value={25}/></Td>
                                    </Tr>
                                    <Tr>
                                        <Th width={50}>Spaans</Th>
                                        <Td><Progress colorScheme={'green'} hasStripe={true} value={25}/></Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default CV