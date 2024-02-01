import {FunctionComponent} from 'react'
import {Navigate} from 'react-router-dom'

interface PageNotFoundProps {

}

const PageNotFound: FunctionComponent<PageNotFoundProps> = () => {
    return (
        <Navigate to={'/'}/>
    )
}

export default PageNotFound