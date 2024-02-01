import {FunctionComponent} from 'react'
import ImageSlider from './ImageSlider.tsx'
import {Button, Heading, Text} from '@chakra-ui/react'
import {ArrowForwardIcon} from '@chakra-ui/icons'

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    return (
       <div className={'home'}>
           <ImageSlider/>
           <div className={'textblock'}>
               <Heading as='h2' size='2xl' noOfLines={1} lineHeight={'tall'}>
                       Uw partner voor uw volgend IT project!
               </Heading>
               <Text fontSize='2xl' m={25}>Ik ben Christophe Mathieu. 25 jaar oud en wonend te Vosselaar.
                    Ik ben gemotiveerd, leergierig, zelfstandig en heb een hoge verantwoordelijkheidszin.
                    Dankzij met graduaatsopleiding programmeren ben ik thuis in meerdere technologieën.
                    Denk hier aan HTML, CSS, Javascript, React, .NET, ASP.NET, C#,...
                    Vragen, opmerkingen of interesse om samen te werken? Laat een berichtje achter op de contactpagina!</Text>

               <Button mb={55} colorScheme='green' leftIcon={<ArrowForwardIcon/>}>
                   <a href={'/contact'}>
                       Neem mij naar de contactpagina!</a>
               </Button>
           </div>

       </div>
    )
}

export default Home