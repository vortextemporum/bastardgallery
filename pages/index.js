import SideBar from "../components/sidebar.js"
import Gallery from "../components/gallery.js"
import {useEffect,useState} from "react"


export default function Home() {
  const [bastards, setBastards] = useState([]);
  const [bastardnessTypes,setBastardnessTypes] = useState({})
  useEffect( 
    async () => {
      await fetch(`https://api.bastardganpunks.club/all`)
      .then(response => response.json())
      .then((data) => {
        setBastards(data);
        let bastardnessdict = {}
        data.map(b => {
          if (b.attributes[1].value in bastardnessdict) {
            bastardnessdict[b.attributes[1].value].push(b.tokenId);
          } else
          {
            bastardnessdict[b.attributes[1].value] = [];
            bastardnessdict[b.attributes[1].value].push(b.tokenId)

          }
        })
        setBastardnessTypes(bastardnessdict)


      })
      // console.log(gallery)
      

    }
    ,[])



  return (
    <div className="flex flex-wrap">
      <SideBar bastardnessTypes={bastardnessTypes}/>
      <Gallery bastards={bastards}/>
    </div>
  )
}
