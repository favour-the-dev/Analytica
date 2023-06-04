function Wrapper({children}) {
    return ( 
        <>
            <div className=" w-4/5 ml-[20%] sm:w-11/12 sm:ml-[10%] lg:w-3/4 h-full lg:rounded-md lg:ml-52 xl:ml-72 bg-white">
                {children}
            </div>
        </>
    );
}

export default Wrapper;