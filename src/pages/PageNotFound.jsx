import { Link } from 'react-router-dom'

/** Returns the PageNotFound page 
 * 
 * @returns {JSX.Element} JSX Element
 */
const PageNotFound = () => {
    return (
        <>
            <aside className='text-red-900 text-center text-3xl m-12'>
                <h1>Error 404:Page Not Found</h1>
                <Link to={"/"}>
                    <button className='underline mt-5'>
                        Click here to go Back to Home Page
                    </button>
                </Link>
            </aside>
        </>
    )
}

export default PageNotFound