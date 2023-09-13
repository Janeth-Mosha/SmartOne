import logo from '../image/logo.png'
import { Link } from 'react-router-dom';
const Navibar = () => {
    return (
        <div className="flex items-center justify-between px-10">
            <img src={logo} className='w-[150px] homeimage' alt='' />
            <div className="flex items-center flex-row gap-x-3">
            <Link className to="/">Home</Link>
                <Link className to="/about">About</Link>
               
                <div className='bg-green-500 px-3 py-2 text-white font-semibold text-center rounded-md'>
                <Link className to="/login">Login</Link>
                </div>

            </div>
        </div>
    );
}

export default Navibar;