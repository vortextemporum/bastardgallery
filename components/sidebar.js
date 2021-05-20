export default function SideBar({bastardnessTypes}) {
    console.log(bastardnessTypes)
    return (
        <div className="flex flex-col w-1/4 max-h-screen charriot overflow-y-auto relative inline-block bg-pink-600 bg-opacity-90 border-red-500">

            <p className="text-4xl text-center py-8 text-pink-200">FILTER BY:</p>

            <main className="w-full mx-auto bg-red-500">
                <section className="shadow row">
                    <div className="tabs">
                        <div className="border-b tab">
                            <div className="border-l-2 border-transparent relative">
                                <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                                <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                                    <span className="text-grey-darkest font-thin text-xl">
                                        BASTARDNESS
                                    </span>
                                    <div className="rounded-full border border-black w-7 h-7 flex items-center justify-center test">
                                        <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>
                                    </div>
                                </header>
                                <div className="tab-content">
                                    <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                        {
                                            Object.keys(bastardnessTypes).sort().map( (type)=> {

                                                return(
                                                    <div key={type}>
                                                        <input type="checkbox" id={type} name={type} value={type}/>
                                                        <label htmlFor={type}> {type} ({bastardnessTypes[type].length})</label><br />

                                                    </div>


                                                )


                                            })



                                        }
                                       
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </section>
            </main>
            <main className="w-full mx-auto bg-blue-500">
                <section className="shadow row">
                    <div className="tabs">
                        <div className="border-b tab">
                            <div className="border-l-2 border-transparent relative">
                                <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                                <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                                    <span className="text-grey-darkest font-thin text-xl">
                                        HYPE TYPE
                                </span>
                                    <div className="rounded-full border border-black w-7 h-7 flex items-center justify-center test">
                                        <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>
                                    </div>
                                </header>
                                <div className="tab-content">
                                    <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                        
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                        <label htmlFor="vehicle1"> CALM AF</label><br />
                                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                        <label htmlFor="vehicle2"> HYPED AF</label><br/>
                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </section>
            </main>

            

            <p className="text-2xl text-center  font-boldest bg-green-300 py-4">CALM AF TRAITS:</p>


            <main className="w-full mx-auto bg-yellow-200">
                <section className="shadow row">
                    <div className="tabs">
                        <div className="border-b tab">
                            <div className="border-l-2 border-transparent relative">
                                <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                                <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                                    <span className="text-grey-darkest font-thin text-xl">
                                        BASTARD TYPE
                                </span>
                                    <div className="rounded-full border border-black w-7 h-7 flex items-center justify-center test">
                                        <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>
                                    </div>
                                </header>
                                <div className="tab-content">
                                    <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                        
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                        <label htmlFor="vehicle1"> CALM AF</label><br />
                                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                        <label htmlFor="vehicle2"> HYPED AF</label><br/>
                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </section>
            </main>

            <main className="w-full mx-auto bg-indigo-200">
                <section className="shadow row">
                    <div className="tabs">
                        <div className="border-b tab">
                            <div className="border-l-2 border-transparent relative">
                                <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                                <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                                    <span className="text-grey-darkest font-thin text-xl">
                                        SOLID/GLITCH
                                </span>
                                    <div className="rounded-full border border-black w-7 h-7 flex items-center justify-center test">
                                        <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>
                                    </div>
                                </header>
                                <div className="tab-content">
                                    <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                        
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                        <label htmlFor="vehicle1"> CALM AF</label><br />
                                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                        <label htmlFor="vehicle2"> HYPED AF</label><br/>
                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </section>
            </main>

            <main className="w-full mx-auto bg-pink-200">
                <section className="shadow row">
                    <div className="tabs">
                        <div className="border-b tab">
                            <div className="border-l-2 border-transparent relative">
                                <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                                <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                                    <span className="text-grey-darkest font-thin text-xl">
                                        DIRECTION FACING
                                </span>
                                    <div className="rounded-full border border-black w-7 h-7 flex items-center justify-center test">
                                        <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>
                                    </div>
                                </header>
                                <div className="tab-content">
                                    <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                        
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                        <label htmlFor="vehicle1"> CALM AF</label><br />
                                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                        <label htmlFor="vehicle2"> HYPED AF</label><br/>
                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </section>
            </main>
            <p className="text-2xl text-center  font-boldest bg-green-300 py-4">HYPED AF TRAITS:</p>


            <main className="w-full mx-auto bg-yellow-200">
                <section className="shadow row">
                    <div className="tabs">
                        <div className="border-b tab">
                            <div className="border-l-2 border-transparent relative">
                                <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                                <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                                    <span className="text-grey-darkest font-thin text-xl">
                                        FRAME AMOUNT
                                </span>
                                    <div className="rounded-full border border-black w-7 h-7 flex items-center justify-center test">
                                        <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>
                                    </div>
                                </header>
                                <div className="tab-content">
                                    <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                        
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                        <label htmlFor="vehicle1"> CALM AF</label><br />
                                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                        <label htmlFor="vehicle2"> HYPED AF</label><br/>
                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </section>
            </main>

            <main className="w-full mx-auto bg-indigo-200">
                <section className="shadow row">
                    <div className="tabs">
                        <div className="border-b tab">
                            <div className="border-l-2 border-transparent relative">
                                <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                                <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                                    <span className="text-grey-darkest font-thin text-xl">
                                        FPS
                                </span>
                                    <div className="rounded-full border border-black w-7 h-7 flex items-center justify-center test">
                                        <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>
                                    </div>
                                </header>
                                <div className="tab-content">
                                    <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                        
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                        <label htmlFor="vehicle1"> CALM AF</label><br />
                                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                        <label htmlFor="vehicle2"> HYPED AF</label><br/>
                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </section>
            </main>

            <main className="w-full mx-auto bg-pink-200">
                <section className="shadow row">
                    <div className="tabs">
                        <div className="border-b tab">
                            <div className="border-l-2 border-transparent relative">
                                <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                                <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                                    <span className="text-grey-darkest font-thin text-xl">
                                        FACE DIRECTION CHANGES
                                </span>
                                    <div className="rounded-full border border-black w-7 h-7 flex items-center justify-center test">
                                        <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>
                                    </div>
                                </header>
                                <div className="tab-content">
                                    <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                        
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                        <label htmlFor="vehicle1"> CALM AF</label><br />
                                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                        <label htmlFor="vehicle2"> HYPED AF</label><br/>
                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </section>
            </main>
            <main className="w-full mx-auto bg-pink-200">
                <section className="shadow row">
                    <div className="tabs">
                        <div className="border-b tab">
                            <div className="border-l-2 border-transparent relative">
                                <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                                <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                                    <span className="text-grey-darkest font-thin text-xl">
                                        BACKGROUND COMPLEXITY
                                </span>
                                    <div className="rounded-full border border-black w-7 h-7 flex items-center justify-center test">
                                        <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="6 9 12 15 18 9">
                                            </polyline>
                                        </svg>
                                    </div>
                                </header>
                                <div className="tab-content">
                                    <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                        
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                        <label htmlFor="vehicle1"> CALM AF</label><br />
                                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                        <label htmlFor="vehicle2"> HYPED AF</label><br/>
                                       
                                       
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </section>
            </main>



        </div>
    )
}