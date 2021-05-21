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