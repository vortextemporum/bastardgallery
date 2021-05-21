export default function SideBar({ bastardnessTypes, v1v2change,v1orv2 }) {
    console.log(bastardnessTypes)
    return (
        <div className="flex flex-col  w-full sm:w-1/4 max-h-screen charriot overflow-y-auto relative inline-block bg-pink-600 bg-opacity-90 border-red-500">




            <p className="text-4xl text-center py-8 text-pink-200 underline">FILTER BASTARDS BY:</p>

            <div class="flex items-center justify-center w-full mb-12">

                <label for="toggleB" class="flex items-center cursor-pointer">
                    <div class="mr-3 text-gray-700 font-medium text-2xl">
                            V1
                        </div>
                    <div class="relative">
                        <input type="checkbox" id="toggleB" class="sr-only" defaultChecked={0} checked={v1orv2} onChange={(e) => v1v2change(e.target.checked)}/>
                            <div class="block bg-gray-600 w-14 h-8 rounded-full"></div>
                            <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                        </div>
                        <div class="ml-3 text-gray-700 font-medium text-2xl">
                        V2
                        </div>
                </label>

            </div>

                <p className="text-2xl text-center text-white  underline bg-green-700 py-4">BGANPUNKS V1:</p>
                <div className="pl-8 pr-8 pb-5 text-white bg-green-700">
                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <label htmlFor="vehicle1"> GEN #1 BASTARDS</label><br />
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                    <label htmlFor="vehicle2"> GEN #2: CØLØRED B·G·A·N·P·U·N·K·S</label><br />
                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                    <label htmlFor="vehicle2"> DØØMΞD DΞGΞNS </label><br />

                </div>
               

                <p className="text-2xl text-center  font-bold underline bg-blue-500 py-4">BGANPUNKS V2:</p>

                <main className="w-full mx-auto bg-blue-400 ">
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
                                                Object.keys(bastardnessTypes).sort().map((type) => {

                                                    return (
                                                        <div key={type}>
                                                            <input type="checkbox" id={type} name={type} value={type} />
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
                <main className="w-full mx-auto bg-blue-300">
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

                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label htmlFor="vehicle1"> CALM AF</label><br />
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label htmlFor="vehicle2"> HYPED AF</label><br />


                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </section>
                </main>



                <p className="text-2xl text-center  font-bold underline bg-green-300 py-4">CALM AF TRAITS:</p>


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

                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label htmlFor="vehicle1"> ALIEN</label><br />
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label htmlFor="vehicle2"> ALIEN APE HYBRID</label><br />
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label htmlFor="vehicle1"> ALIEN HUMAN HYBRID</label><br />
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label htmlFor="vehicle2"> ALIEN ZOMBIE HYBRID</label><br />
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label htmlFor="vehicle1"> LARGE</label><br />
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label htmlFor="vehicle2"> PETITE</label><br />
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label htmlFor="vehicle1"> X BASTARD</label><br />
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label htmlFor="vehicle2"> ZOMBIE</label><br />


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
                                            SOLID/GLITCH BACKGROUND
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

                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label htmlFor="vehicle1"> SOLID AF</label><br />
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label htmlFor="vehicle2"> GLITCHED AF</label><br />


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
                                            FACING DIRECTION
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

                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label htmlFor="vehicle1"> LEFT</label><br />
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label htmlFor="vehicle2"> RIGHT</label><br />
                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label htmlFor="vehicle1"> FRONT</label><br />

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </section>
                </main>
                {/* <p className="text-2xl text-center  font-bold underline bg-green-300 py-4">HYPED AF TRAITS:</p>


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

                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label htmlFor="vehicle1"> CALM AF</label><br />
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label htmlFor="vehicle2"> HYPED AF</label><br />


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

                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label htmlFor="vehicle1"> CALM AF</label><br />
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label htmlFor="vehicle2"> HYPED AF</label><br />


                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </section>
                </main>

                <main className="w-full mx-auto bg-blue-300">
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

                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label htmlFor="vehicle1"> CALM AF</label><br />
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label htmlFor="vehicle2"> HYPED AF</label><br />


                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </section>
                </main>
                <main className="w-full mx-auto bg-red-400">
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

                                            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                            <label htmlFor="vehicle1"> CALM AF</label><br />
                                            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                                            <label htmlFor="vehicle2"> HYPED AF</label><br />


                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </section>
                </main> */}



            </div>
    )
}