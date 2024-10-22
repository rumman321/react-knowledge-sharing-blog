
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex items-center justify-between p-4 mx-5 border-b-2 '>
            <h1 className='text-2xl font-bold'>Vite + React</h1>
            <img src={profile} alt="" />

        </header>
    );
};

export default Header;