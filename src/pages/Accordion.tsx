import {createContext, FunctionComponent, PropsWithChildren, useState} from 'react'

interface IAccordionContext {
    currentOpenKey: string | undefined
    toggleOpenKey: (newOpenKey: string | undefined) => void
}

interface AccordionProps{
    defaultOpenKey?: string
}

export const AcciordionContext = createContext<IAccordionContext>({
    currentOpenKey: undefined,
    toggleOpenKey: (): void => {
        console.log('No implementation yet')
    }
})

const Accordion: FunctionComponent<AccordionProps & PropsWithChildren> = ({defaultOpenKey, children}) => {
    const [currentOpenKey, setCurrentOpenKey] = useState<string | undefined>(defaultOpenKey)

    const toggleOpenKey = (newOpenKey: string | undefined) => {
        if (currentOpenKey === newOpenKey){
            setCurrentOpenKey(undefined)
        } else {
            setCurrentOpenKey(newOpenKey)
        }
    }

    return (
        <AcciordionContext.Provider value={{currentOpenKey, toggleOpenKey}}>
            <div className={'accordion'}>
                {children}
            </div>
        </AcciordionContext.Provider>
    )
}

export default Accordion