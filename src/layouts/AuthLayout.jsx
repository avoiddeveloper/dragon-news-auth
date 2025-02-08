import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <div className='font-poppins bg-[#f3f3f3]'>
            <div className='container mx-auto'>
                <header className='py-3'>
                    <Navbar></Navbar>
                </header>
                <main className='min-h-screen flex justify-center items-center'>
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
};

export default AuthLayout;