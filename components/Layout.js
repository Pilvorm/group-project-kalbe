import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <div className='h-screen'>
            <Navbar />
            {children}
        </div>
    )
}