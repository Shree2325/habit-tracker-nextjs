import logo from '@/public/assets/images/logo.png' 
import { abril_fatface } from '../ui/font';

export default function Header() {
 
 return (
 <>
        <header className="bg-white shadow-md-3">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <div className="flex items-center">
                    <img src={logo.src} alt="Logo" className="w-10 h-10 mr-2" />
                    <h1 className={abril_fatface.className + " text-xl font-bold text-gray-800 hover:text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-lg"}>Habit Tracker</h1>
                </div>
                <button className="flex items-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 py-2 px-4 rounded-lg">
    <span className="mr-2">Logout</span>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H3"></path>
    </svg>
</button>

            </div>
        </header>
    </>

    );
}