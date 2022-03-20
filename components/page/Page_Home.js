const Page_Home = e => {
    return (
        <main className="min-h-screen overflow-y-hidden px-5 lg:px-32 select-none">
            {/* circle 1 */}
            <div className="border border-zinc-500 rounded-full absolute -left-40 -top-64 " style={{ width: '500px', height: "500px" }}></div>
            {/* circle 2 */}
            <div className="border border-zinc-500 border-dashed rounded-full absolute -right-16 top-1/3 -translate-y-1/2" style={{ width: '600px', height: "600px" }}></div>
            {/* circle 2 */}
            <div className="border border-zinc-500 rounded-full absolute right-1/3 top-1/4 " style={{ width: '400px', height: "400px" }}></div>

            {/* content */}
            <div className="absolute bottom-0 pb-24">
                <p className="text-5xl lg:text-6xl" style={{ fontFamily: "\'Gruppo\', cursive" }}>this is still in the making</p>
                <p className="text-5xl lg:text-6xl" style={{ fontFamily: "\'Gruppo\', cursive" }}>please come back in some time</p>
                <p className="text-5xl lg:text-6xl mt-5" >😁</p>
                {/* <p className="text-5xl lg:text-6xl" style={{ fontFamily: "\'Gruppo\', cursive" }}>ui/ux designer</p>
                <p className="text-5xl lg:text-6xl" style={{ fontFamily: "\'Gruppo\', cursive" }}>based in the philippines</p>

                <hr className="my-7 lg:w-[800px] border-slate-500 border-dashed" />

                <p className="font-bold text-lg lg:text-xl" style={{ fontFamily: "\'Gruppo\', cursive" }}>with minimal design,</p>
                <p className="font-bold text-lg lg:text-xl" style={{ fontFamily: "\'Gruppo\', cursive" }}>i can present content with clean and focused delivery - no distractions</p> */}
            </div>
        </main>
    )
}

export default Page_Home