import Card from "./card.js"
import Background from "./bg.js"


export default function Gallery({bastards}) {
    // console.log(bastards)
    return (
      <>
      <Background />

      <div className="charriot overflow-y-auto flex flex-wrap h-screen justify-around  w-3/4 relative inline-block">
          {
              bastards.slice(0,99).map(bastard => {
                // console.log(bastard)
                return <Card bas={bastard} key={bastard.tokenId}/>
               
                
              })

          }
        
      </div>
      </>
    )
  }