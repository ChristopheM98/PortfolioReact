import {FunctionComponent, PropsWithChildren, useContext} from 'react'
import {AcciordionContext} from './Accordion.tsx'
import {FaChevronDown, FaChevronRight} from 'react-icons/fa'
import {Heading} from '@chakra-ui/react'

interface AccordionItemProps extends PropsWithChildren{
    title: string,
    openKey: string,
}

const AccordionItem: FunctionComponent<AccordionItemProps> = ({title, openKey, children}) => {
    const {currentOpenKey, toggleOpenKey} = useContext(AcciordionContext)
    const isOpen = openKey === currentOpenKey

    return (
        <div className={'accordion-item'}>
            <Heading as='h4' size='md'>{title}</Heading>
            <div className={'chevron'} onClick={() => toggleOpenKey(openKey)}>
                {isOpen ? <FaChevronRight/> : <FaChevronDown/>}
            </div>
            <div className={'content'}>
                {isOpen && children}
            </div>
        </div>
    )
}

export default AccordionItem