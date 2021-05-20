export default function Card({bas}) {
    // console.log(bas)
    return (
      <div className="border-8 flex flex-col justify-around p-2 m-2 bg-red-500" style={{"width": "300px"}}>
          
          
          <div className="flex flex-col ">
            <div className="mx-auto">
              <p className="font-bold text-center bg-yellow-300" style={{"width": "250px"}}>#{bas.tokenId}</p>
              <img src={bas.image} style={{"width": "250px","height": "250px"}}/>
              <div className="mx-auto my-auto w-full font-bold">
                <div className="bg-blue-200 p-2 ">
                  {/* <span className="text-sm font-bold underline ">HYPE TYPE:</span>  */}
                  <p className="text-sm text-center">{bas.attributes[0].value}</p>
                </div>
                <div className="bg-yellow-200 p-2 ">
                {/* <p className="text-sm underline font-bold">BASTARDNESS:</p>  */}
                <p className="text-sm text-center">{bas.attributes[1].value}</p>
                </div>

              </div>
              <div className="p-2">

                <span className="text-sm " style={{whiteSpace: "pre-wrap"}}>{bas.description}</span>
              </div>

            </div>
            
          </div>
          
          <div className="my-2">
              <p className="text-sm ">TYPE:</p>
              <p className="text-sm ">FACE DIRECTION:</p>
              <p className="text-sm ">SOLID/GLITCH BACKGROUND:</p>
              {/* {
                (bas.attributes[0].value == "CALM AF (STILL)"? {

                }:{

                })


              } */}

          </div>
          {/* <a className="bg-blau  text-xl text-white text-center w-full py-2" target="_blank" href={bas.image}>Show Image on IPFS</a>        */}
          {/* <a className="bg-yellu text-xl text-black text-center w-full py-2" target="_blank" href={bas.imageArweave}>Show Image on Arweave</a> */}

          <a target="_blank" href={"https://opensea.io/assets/0x31385d3520bced94f77aae104b406994d8f2168c" +  "/" + bas.tokenId} className=" ms:  border-2 border-black text-center border-opacity-100 no-underline hover:text-white bg-gradient-to-r from-green-400 to-indigo-500 hover:from-indigo-500 hover:to-blue-800 font-medium text-2xl py-2 px-4   ">View on Opensea</a>
          {/* <a target="_blank" href={"https://app.rarible.com/token/0x31385d3520bced94f77aae104b406994d8f2168c" + ":" + bas.tokenId} className=" ms:  border-2 border-black text-center border-opacity-100 no-underline  hover:text-white bg-gradient-to-r hover:from-pink-500  hover:to-yellow-500 from-yellow-500 to-yellow-200 font-medium text-2xl py-2 px-4   ">View on Rarible</a> */}

      </div>
    )
  }