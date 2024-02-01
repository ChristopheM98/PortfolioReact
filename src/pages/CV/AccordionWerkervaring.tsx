import {FunctionComponent} from 'react'
import AccordionItem from '../AccordionItem.tsx'
import {Heading, ListItem, UnorderedList} from '@chakra-ui/react'
import Accordion from '../Accordion.tsx'

const AccordionWerkervaring: FunctionComponent = () => {
    return (
        <Accordion>
            <AccordionItem title={'Café Dépôt te Turnhout'} openKey={'Depot'}>
                <Heading as='h5' size='sm'>
                    06-2023 tot heden: Barman flexi
                </Heading>
                <UnorderedList mb={25}>
                    <ListItem>Bediening van klanten</ListItem>
                    <ListItem>Afrekenen</ListItem>
                    <ListItem>Afruimen</ListItem>
                    <ListItem>Dagafsluiting</ListItem>
                    <ListItem>Stocktelling</ListItem>
                </UnorderedList>
            </AccordionItem>
            <AccordionItem title={'Orakel te Retie'} openKey={'Orakel'}>
                <Heading as='h5' size='sm'>
                    09-2022 tot heden: Back end medewerker
                </Heading>
                <UnorderedList mb={25}>
                    <ListItem>Jira</ListItem>
                    <ListItem>Confluence</ListItem>
                    <ListItem>SQL integratie SAP Business One</ListItem>
                    <ListItem>Adobe Illustrator</ListItem>
                    <ListItem>Onderhouden van webshop</ListItem>
                    <ListItem>PIM + CMS</ListItem>
                    <ListItem>Excel</ListItem>
                </UnorderedList>
            </AccordionItem>
            <AccordionItem title={'Cloetta te Turnhout'} openKey={'Cloetta'}>
                <Heading as='h5' size='sm'>
                    01-2019 tot 09-2022: Supply Chain medewerker
                </Heading>
                <UnorderedList mb={25}>
                    <ListItem>Laden en lossen van vrachtwagens</ListItem>
                    <ListItem>Inpak voorzien van verpakkingsmateriaal</ListItem>
                    <ListItem>Maken van transportplanning</ListItem>
                    <ListItem>Coderen van facturen</ListItem>
                    <ListItem>Afroepen van goederen in extern magazijn</ListItem>
                    <ListItem>Op-en afboeken van goederen naar verschillende Cloetta sites</ListItem>
                    <ListItem>Key user logistics ERP-programma Infor M3</ListItem>
                    <ListItem>Werken volgens de Lean methode</ListItem>
                </UnorderedList>
                <Heading as='h5' size='sm'>
                    07-2017 tot 09-2018: Jobstudent magazijn
                </Heading>
                <UnorderedList mb={25}>
                    <ListItem>Laden en lossen van vrachtwagens</ListItem>
                    <ListItem>Inpak voorzien van verpakkingsmateriaal</ListItem>
                </UnorderedList>
            </AccordionItem>
            <AccordionItem title={'Glacio te Beerse'} openKey={'Glacio'}>
                <Heading as='h5' size='sm'>
                    06-2015 tot 04-2017: Jobstudent laborant
                </Heading>
                <UnorderedList mb={25}>
                    <ListItem>Mixen testen op kleur, smaak, vetten, droge stof,...</ListItem>
                    <ListItem>Kwaliteitscontrole in productie</ListItem>
                    <ListItem>Microbiologische analyses</ListItem>
                    <ListItem>Data ingeven in de computer</ListItem>
                </UnorderedList>
                <Heading as='h5' size='sm'>
                    06-2014 tot 08-2016: Jobstudent productiemedewerker
                </Heading>
                <UnorderedList mb={25}>
                    <ListItem>Kwaliteitscontrole</ListItem>
                    <ListItem>Inpakken</ListItem>
                </UnorderedList>
            </AccordionItem>
        </Accordion>
    )
}

export default AccordionWerkervaring