import {FunctionComponent} from 'react'
import {Table, TableContainer, Tbody, Td, Th, Tr} from '@chakra-ui/react'

const TablePersGegevens: FunctionComponent = () => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <Tbody>
                    <Tr>
                        <Th>Naam</Th>
                        <Td>Christophe Mathieu</Td>
                    </Tr>
                    <Tr>
                        <Th>Adres</Th>
                        <Td>Eggestraat 19, 2350 Vosselaar</Td>
                    </Tr>
                    <Tr>
                        <Th>Mobiel</Th>
                        <Td>0476/791411</Td>
                    </Tr>
                    <Tr>
                        <Th>E-mail</Th>
                        <Td>christophe.mathieu@hotmail.com</Td>
                    </Tr>
                    <Tr>
                        <Th>Geboortedatum</Th>
                        <Td>15 maart 1998</Td>
                    </Tr>
                    <Tr>
                        <Th>Nationaliteit</Th>
                        <Td>Belg</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default TablePersGegevens