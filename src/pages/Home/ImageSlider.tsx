import {FunctionComponent, useState} from 'react'
import image1 from '../../assets/images/imageSlider/2CH3OLNYOZ.jpg'
import image2 from '../../assets/images/imageSlider/BCD2YSDNWD.jpg'
import image3 from '../../assets/images/imageSlider/meer.png'
import image4 from '../../assets/images/imageSlider/MOQOO2D7YL.jpg'
import image5 from '../../assets/images/imageSlider/mushrooms-forest.jpg'
import image6 from '../../assets/images/imageSlider/QS9YQGBLOQ.jpg'
import image7 from '../../assets/images/imageSlider/vallei.jpg'
import {ArrowLeftIcon, ArrowRightIcon} from '@chakra-ui/icons'
import {FaCircle, FaRegCircle} from 'react-icons/fa'

const images = [image1, image2, image3, image4, image5, image6, image7]

interface ImageSliderProps {

}

const ImageSlider: FunctionComponent<ImageSliderProps> = () => {
    const [activeSlide, setActiveSlide] = useState<number>(0)

    return (
        <div className={'imageSlider'}>
            <>
                <img src={images[activeSlide]} alt={'Carousel image'}/>
            </>
            <ArrowLeftIcon className={'buttonLeft'} color={'white'}
                           onClick={() => setActiveSlide(s => s === 0 ? images.length - 1 : activeSlide - 1)}/>
            <ArrowRightIcon className={'buttonRight'} color={'white'}
                           onClick={() => setActiveSlide(s => (s + 1) % images.length)}/>
            <div className={'circlesCarousel'}>
                {images.map((i, index) =>
                activeSlide === index ? <FaCircle key={i} color={'white'}/> : <FaRegCircle key={i} color={'white'}
                onClick={() => setActiveSlide(index)}/>)}</div>
            <div style={{'display': 'none'}}>
                {images.map(i => <img key={i} src={images[activeSlide]} alt={i}/>)}
            </div>
        </div>
    )
}

export default ImageSlider