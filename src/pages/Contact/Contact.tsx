import {FunctionComponent} from 'react'
import './ContactStyle.css'
import UserProfile from './UserProfile.tsx'
import ContactForm from './ContactForm.tsx'

interface ContactProps {

}

const Contact: FunctionComponent<ContactProps> = () => {


    return (
        <div>
            <UserProfile/>
            <ContactForm/>
        </div>
    )
}

export default Contact