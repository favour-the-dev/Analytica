import { NavLink } from "react-router-dom";
export default function Login(){
    return(
        <>
            <div className="h-screen w-screen bg-[#191919] flex flex-col items-center justify-center">
               <div className=" bg-white p-16 rounded-md h-fit lg:h-2/3 flex flex-col gap-6 w-72 md:w-fit    ">
                <h1 className="w-1/2 text-center mx-auto mb-4 font-bold text-2xl">Login</h1>
                    <form action="/" className="flex flex-col items-center gap-4 p- w-full">
                        <label htmlFor="name" className="flex flex-col text-xs font-bold border-b-2 border-gray-200 mb-4 p-2">Username
                        <input type="text" name="name" placeholder="Type your username" className="text-lg font-semibold focus:outline-none mt-2"/>
                        </label>
                        <label htmlFor="password" className="flex flex-col text-xs font-bold border-b-2 border-gray-200 mb-4 p-2">Password
                        <input type="password" name="password" placeholder="Type your password" className="text-lg font-semibold focus:outline-none mt-2"/>
                        </label>
                        <NavLink to='/Home' className='w-full'>
                            <button className="bg-[#191919] w-full text-gray-200 rounded-full p-2">submit</button>
                        </NavLink>
                    </form>
                    <div>
                        
                    </div>
               </div>
            </div>
        </>
    );
}