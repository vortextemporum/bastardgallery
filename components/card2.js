import LazyLoad from 'react-lazyload';

export default function Card2({ bas }) {
  // console.log(bas)
  return (
    <div className="border-8 flex flex-col justify-around p-2 m-2 bg-red-500" style={{ "width": "300px" }}>


      <div className="flex flex-col justify-center">
        <div className="mx-auto">
          <p className="font-bold text-center bg-yellow-300" style={{ whiteSpace: "pre-wrap" }}>{bas.name}</p>
          <LazyLoad
                height="280px"
                offset={300}
                placeholder={<img src="/loading.gif" style={{"width": "280px","height": "280px"}}/>}
                overflow
                once
              >
          <img src={bas.image} style={{ "width": "280px", "height": "280px" }} />
          </LazyLoad>
          <div className="mx-auto my-auto w-full font-bold">
            <div className="bg-blue-200 p-2 ">
              {/* <span className="text-sm font-bold underline ">HYPE TYPE:</span>  */}
              <p className=" text-center">{bas.type}</p>
            </div>
            <main className="w-full mx-auto bg-pink-200">
            <section className="shadow row">
              <div className="tabs">
                <div className="border-b tab">
                  <div className="border-l-2 border-transparent relative">
                    <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                    <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" htmlFor="chck1">
                      <span className="font-bold">
                        DESCRIPTION
                      </span>
                      <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                        <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                          <polyline points="6 9 12 15 18 9">
                          </polyline>
                        </svg>
                      </div>
                    </header>
                    <div className="tab-content">
                      <div className="text-grey-darkest p-2">
                        <span className="text-sm  text-pink-800" style={{ whiteSpace: "pre-wrap" }}>{bas.description}</span>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

            </section>
          </main>
           

          </div>
         
          {/* <div className="p-2 bg-pinku">

                <span className="text-sm  text-pink-800" style={{whiteSpace: "pre-wrap"}}>{bas.description}</span>
            </div> */}

        </div>

      </div>


      <a target="_blank" href={"https://opensea.io/assets/0x9126b817ccca682beaa9f4eae734948ee1166af1" + "/" + bas.tokenId} className=" ms:  border-2 border-black text-center border-opacity-100 no-underline hover:text-white bg-gradient-to-r from-green-400 to-indigo-500 hover:from-indigo-500 hover:to-blue-800 font-medium text-2xl py-2 px-4   ">View on Opensea</a>
      <a target="_blank" href={"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1" + ":" + bas.tokenId} className=" ms:  border-2 border-black text-center border-opacity-100 no-underline  hover:text-white bg-gradient-to-r hover:from-pink-500  hover:to-yellow-500 from-yellow-500 to-yellow-200 font-medium text-2xl py-2 px-4   ">View on Rarible</a>

    </div>
  )
}