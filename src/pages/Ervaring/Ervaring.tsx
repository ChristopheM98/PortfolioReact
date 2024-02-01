import {FunctionComponent, useState} from 'react'
import {Heading, Table, TableContainer, Tbody, Td, Tr} from '@chakra-ui/react'
import {CheckIcon} from '@chakra-ui/icons'

const Ervaring: FunctionComponent = () => {
    const [react, setReact] = useState<boolean>(true)
    const [javascript, setJavascript] = useState<boolean>(true)
    const [net, setNET] = useState<boolean>(true)
    const [aspNET, setASPNET] = useState<boolean>(true)

    return (
        <>
            <Heading as='h2' size='xl' mt={5} mb={25} textAlign={'center'}>
                Werkervaring
            </Heading>

            <div className={'checksErvaring'}>
                <p onClick={() => setReact(x => !x)}>React &nbsp;{react ? <CheckIcon/> : ''}</p>
                <p onClick={() => setJavascript(x => !x)}>Javascript&nbsp;{javascript ? <CheckIcon/> : ''}</p>
                <p onClick={() => setNET(x => !x)}>.NET&nbsp;{net ? <CheckIcon/> : ''}</p>
                <p onClick={() => setASPNET(x => !x)}>ASP .NET&nbsp;{aspNET ? <CheckIcon/> : ''}</p>
            </div>

            <TableContainer >
                <Table variant='simple'>
                    <Tbody>
                        <Tr color={react || javascript ? 'green' : 'lightgrey'}>
                            <Td>2023</Td>
                            <Td>
                                <a href={'https://github.com/it-graduaten/permanente-evaluatieopdracht-avondopleiding-ChristopheM98'} target={'_blank'}>
                                    React portfolio website</a>
                            </Td>
                            <Td>React, Javascript</Td>
                            <Td color={'lightgrey'}>Ongoing</Td>
                        </Tr>
                        <Tr color={javascript ? 'green' : 'lightgrey'}>
                            <Td>2023</Td>
                            <Td>
                                <a href={'https://github.com/it-graduaten/puppeteer-gti-gpr-a3-1-ChristopheM98'} target={'_blank'}>
                                    Puppeteer web scraper</a>
                            </Td>
                            <Td>Javascript</Td>
                            <Td></Td>
                        </Tr>
                        <Tr color={net ? 'green' : 'lightgrey'}>
                            <Td>2023</Td>
                            <Td>
                                <a href={'https://github.com/ChristopheM98/SignalR_Webapp'} target={'_blank'}>
                                    SignalR research</a>
                            </Td>
                            <Td>.NET</Td>
                            <Td></Td>
                        </Tr>
                        <Tr color={net ? 'green' : 'lightgrey'}>
                            <Td>2023</Td>
                            <Td>
                                <a href={'https://github.com/ChristopheM98/BlazorPagesITC3'} target={'_blank'}>
                                    Blazor webapplicatie</a>
                            </Td>
                            <Td>.NET</Td>
                            <Td color={'lightgrey'}>Ongoing</Td>
                        </Tr>
                        <Tr color={aspNET ? 'green' : 'lightgrey'}>
                            <Td>2023</Td>
                            <Td>
                                <a href={'https://github.com/ChristopheM98/Boekingssysteem'} target={'_blank'}>
                                    Thomas More Lier boekingssysteem</a>
                            </Td>
                            <Td>ASP.NET</Td>
                            <Td></Td>
                        </Tr>
                        <Tr color={net ? 'green' : 'lightgrey'}>
                            <Td>2023</Td>
                            <Td>
                                <a href={'https://github.com/ChristopheM98/Boekingssysteem-mobiel-app'} target={'_blank'}>
                                    Boekingssysteem mobiele app</a>
                            </Td>
                            <Td>.NET</Td>
                            <Td></Td>
                        </Tr>
                        <Tr color={net ? 'green' : 'lightgrey'}>
                            <Td>2023</Td>
                            <Td>
                                <a href={'https://github.com/ChristopheM98/CM_CS_Console'} target={'_blank'}>
                                    Patiëntenregistratie consoleapp</a>
                            </Td>
                            <Td>.NET</Td>
                            <Td></Td>
                        </Tr>
                        <Tr color={net ? 'green' : 'lightgrey'}>
                            <Td>2022</Td>
                            <Td>
                                <a href={'https://github.com/ChristopheM98/MathieuChristophe_GTIGPRa2.1_DMP_Project'} target={'_blank'}>
                                    .NET projectwebsite</a>
                            </Td>
                            <Td>.NET</Td>
                            <Td></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Ervaring