import { useParams } from 'react-router-dom'

import Blogs from '../Blogs'

function Pages() {
    const { pageName } = useParams()
    let Comp = Blogs

    switch (pageName) {
        case 'chuyen-ca-phe-va-tra':
            Comp = Blogs
            break

        default:
            break
    }

    return <Comp />
}

export default Pages
