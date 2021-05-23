export default function SideBar({ 
    bastardnessTypes, 
    wordCounts, 
    hypeTypeCounts,
    bastardTypeCounts,
    backgroundCounts,
    facingDirectionCounts,


    setv1v2, 
    setV1Generation,
    setBastardnessFilter, 
    setHypeStatusFilter,
    setSongWordCountFilter,
    setBastardTypeFilter,
    setBackgroundFilter,
    setFacingDirectionFilter,
    setSearchbar,
    totalSupply

}) {
    return (
        <div className="flex flex-col  w-full sm:w-1/4 max-h-screen charriot overflow-y-auto relative inline-block bg-pink-600 bg-opacity-90 border-red-500">

            <p className="text-4xl text-center py-8 text-pink-200 underline">FILTER BASTARDS BY:</p>
            
            <div className="flex items-center justify-center w-full mb-12">

                <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                    <div className="mr-4 text-gray-700 font-medium text-2xl">
                            V1
                        </div>
                    <div className="relative">
                        <input type="checkbox" id="toggleB" className="sr-only" defaultChecked={1}  onChange={(e) => setv1v2(e.target.checked)}/>
                            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
                        </div>
                        <div className="ml-4 text-gray-700 font-medium text-2xl">
                        V2
                        </div>
                </label>

            </div>

                <p className="text-3xl text-center text-white  underline bg-green-700 py-4">BGANPUNKS V1:</p>
                <div className="pl-8 pr-8 pb-5 text-white bg-green-700" onChange={(e) => setV1Generation(e.target.value)}>
                    <input type="radio" id="ALL" name="V1GEN" value="ALL" defaultChecked/>
                    <label htmlFor="ALL"> ALL</label><br />
                    <input type="radio" id="GEN #1 BASTARD" name="V1GEN" value="GEN #1 BASTARD" />
                    <label htmlFor="GEN #1 BASTARD"> GEN #1 BASTARDS</label><br />
                    <input type="radio" id="GEN #2 CØLØRED B·G·A·N·P·U·N·K" name="V1GEN" value="GEN #2 CØLØRED B·G·A·N·P·U·N·K" />
                    <label htmlFor="GEN #2 CØLØRED B·G·A·N·P·U·N·K"> GEN #2: CØLØRED B·G·A·N·P·U·N·K·S</label><br />
                    <input type="radio" id="DØØMΞD DΞGΞN" name="V1GEN" value="DØØMΞD DΞGΞN" />
                    <label htmlFor="DØØMΞD DΞGΞN"> DØØMΞD DΞGΞNS </label><br />

                </div>
               

                <p className="text-3xl my-6 text-center  font-bold underline bg-blue-500 py-4">BGANPUNKS V2:</p>
                {/* SEARCH BAR */}
                <input className="w-full  py-4 px-4 rounded  focus:outline-none focus:shadow-outline text-2xl shadow-lg" type="number" min={0} max={totalSupply} placeholder="BGANPUNKSV2 TOKEN ID" onChange={e => setSearchbar(e.target.value)} />

                <main className="w-full mx-auto bg-blue-400 mt-6">
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
                                        <div className="pl-8 pr-8 pb-5 text-grey-darkest" onChange={e => setBastardnessFilter(e.target.value)}>
                                        <input type="radio" id="ALL" name="BASTARDNESS" value="ALL" defaultChecked/>
                                        <label htmlFor="ALL"> ALL</label><br />
                                            {
                                                Object.keys(bastardnessTypes).sort().map((type) => {

                                                    return (
                                                        <div key={type}>
                                                            <input type="radio" id={type} name="BASTARDNESS" value={type} />
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
                                        <div className="pl-8 pr-8 pb-5 text-grey-darkest" onChange={(e) => setHypeStatusFilter(e.target.value)}>

                                            <input type="radio" id="ALL" name="HYPE TYPE" value="ALL" defaultChecked />
                                            <label htmlFor="ALL"> ALL</label><br />
                                            <input type="radio" id="CALM AF" name="HYPE TYPE" value="CALM AF (STILL)" />
                                            <label htmlFor="CALM AF"> CALM AF</label><br />
                                            <input type="radio" id="HYPED AF" name="HYPE TYPE" value="HYPED AF (ANIMATED)" />
                                            <label htmlFor="HYPED AF"> HYPED AF</label><br />
                                            {
                                                Object.keys(hypeTypeCounts).sort(function(a,b){return a-b}).map((type) => {

                                                    return (
                                                        <div key={type}>
                                                            <input type="radio" id={type} name="HYPE TYPE" value={type} />
                                                            <label htmlFor={type}> {type} ({hypeTypeCounts[type].length})</label><br />

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
                <main className="w-full mx-auto bg-blue-200 ">
                    <section className="shadow row">
                        <div className="tabs">
                            <div className="border-b tab">
                                <div className="border-l-2 border-transparent relative">
                                    <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                                    <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                                        <span className="text-grey-darkest font-thin text-xl">
                                            SONG WORD COUNT
                                    </span>
                                        <div className="rounded-full border border-black w-7 h-7 flex items-center justify-center test">
                                            <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                <polyline points="6 9 12 15 18 9">
                                                </polyline>
                                            </svg>
                                        </div>
                                    </header>
                                    <div className="tab-content">
                                        <div className="pl-8 pr-8 pb-5 text-grey-darkest" onChange={e => setSongWordCountFilter(Number(e.target.value))}>
                                            <input type="radio" id="ALL" name="wordCount" value="ALL" defaultChecked />
                                            <label htmlFor="ALL"> "ALL"</label><br />
                                            {

                                                Object.keys(wordCounts).sort(function(a,b){return a-b}).map((type) => {

                                                    return (
                                                        <div key={type}>
                                                            <input type="radio" id={type} name="wordCount" value={type} />
                                                            <label htmlFor={type}> {type} ({wordCounts[type].length})</label><br />
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



                <p className="text-2xl text-center text-grey-darkest font-bold underline bg-orange py-4">CALM AF TRAITS:</p>


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
                                        <div className="pl-8 pr-8 pb-5 text-grey-darkest" onChange={e => setBastardTypeFilter(e.target.value)}>

                                            <input type="radio" id="ALL" name="bastardtype" value="ALL" defaultChecked />
                                            <label htmlFor="ALL"> ALL</label><br />
                                            <input type="radio" id="ALIEN" name="bastardtype" value="ALIEN" />
                                            <label htmlFor="ALIEN"> ALIEN</label><br />
                                            <input type="radio" id="ALIEN APE HYBRID" name="bastardtype" value="ALIEN APE HYBRID" />
                                            <label htmlFor="ALIEN APE HYBRID"> ALIEN APE HYBRID</label><br />
                                            <input type="radio" id="ALIEN HUMAN HYBRID" name="bastardtype" value="ALIEN HUMAN HYBRID" />
                                            <label htmlFor="ALIEN HUMAN HYBRID"> ALIEN HUMAN HYBRID</label><br />
                                            <input type="radio" id="ALIEN ZOMBIE HYBRID" name="bastardtype" value="ALIEN ZOMBIE HYBRID" />
                                            <label htmlFor="ALIEN ZOMBIE HYBRID"> ALIEN ZOMBIE HYBRID</label><br />
                                            <input type="radio" id="LARGE" name="bastardtype" value="LARGE" />
                                            <label htmlFor="LARGE"> LARGE</label><br />
                                            <input type="radio" id="PETITE" name="bastardtype" value="PETITE" />
                                            <label htmlFor="PETITE"> PETITE</label><br />
                                            <input type="radio" id="X BASTARD" name="bastardtype" value="X BASTARD" />
                                            <label htmlFor="X BASTARD"> X BASTARD</label><br />
                                            <input type="radio" id="ZOMBIE" name="bastardtype" value="ZOMBIE" />
                                            <label htmlFor="ZOMBIE"> ZOMBIE</label><br />


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
                                            BACKGROUND
                                </span>
                                        <div className="rounded-full border border-black w-7 h-7 flex items-center justify-center test">
                                            <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                                <polyline points="6 9 12 15 18 9">
                                                </polyline>
                                            </svg>
                                        </div>
                                    </header>
                                    <div className="tab-content">
                                        <div className="pl-8 pr-8 pb-5 text-grey-darkest" onChange={(e) => setBackgroundFilter(e.target.value)}>

                                            <input type="radio" id="ALL" name="background" value="ALL" defaultChecked />
                                            <label htmlFor="ALL"> ALL</label><br />
                                            <input type="radio" id="SOLID AF" name="background" value="SOLID AF" />
                                            <label htmlFor="SOLID AF"> SOLID AF</label><br />
                                            <input type="radio" id="GLITCHY AF" name="background" value="GLITCHY AF" />
                                            <label htmlFor="GLITCHY AF"> GLITCHY AF</label><br />


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
                                        <div className="pl-8 pr-8 pb-5 text-grey-darkest" onChange={(e) => setFacingDirectionFilter(e.target.value)}>

                                            <input type="radio" id="ALL" name="facingdirection" value="ALL" defaultChecked />
                                            <label htmlFor="ALL"> ALL</label><br />
                                            <input type="radio" id="LEFT" name="facingdirection" value="LEFT" />
                                            <label htmlFor="LEFT"> LEFT</label><br />
                                            <input type="radio" id="RIGHT" name="facingdirection" value="RIGHT" />
                                            <label htmlFor="RIGHT"> RIGHT</label><br />
                                            <input type="radio" id="FRONT" name="facingdirection" value="FRONT" />
                                            <label htmlFor="FRONT"> FRONT</label><br />

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