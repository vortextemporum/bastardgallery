import SideBar from "../components/sidebar.js"
import Gallery from "../components/gallery.js"
import {useEffect,useState} from "react"
import Background from "../components/bg.js"



export default function Home() {
  const [bastards, setBastards] = useState([]);
  const [bastardnessTypes,setBastardnessTypes] = useState({})
  const [wordCounts,setWordCounts] = useState({})
  const [hypeTypeCounts,setHypeTypeCounts] = useState({})
 
  const [totalSupply,setTotalSupply] = useState({})
  
  const [v1v2, setv1v2] = useState(1);
  // V1
  const [v1Generation, setV1Generation] = useState("ALL");


  const [searchBar, setSearchbar] = useState("")
  // V2
  const [bastardnessFilter, setBastardnessFilter] = useState("ALL")
  const [hypeStatusFilter, setHypeStatusFilter] = useState("ALL")
  const [songWordCountFilter, setSongWordCountFilter] = useState("ALL")
  // CALM AF TRAITS
  const [bastardTypeFilter, setBastardTypeFilter] = useState("ALL")
  const [backgroundFilter, setBackgroundFilter] = useState("ALL")
  const [facingDirectionFilter, setFacingDirectionFilter] = useState("ALL")


  useEffect( 
    async () => {
      await fetch(`https://api.bastardganpunks.club/all`)
      .then(response => response.json())
      .then((data) => {
        setBastards(data);
        let bastardnessdict = {}
        let wordcountdict = {}
        data.map(b => {
          // ikinci[b.attributes[1].value] = false
          if (b.attributes[1].value in bastardnessdict) {
            bastardnessdict[b.attributes[1].value].push(b.tokenId);
          } else
          {
            bastardnessdict[b.attributes[1].value] = [];
            bastardnessdict[b.attributes[1].value].push(b.tokenId)
          }
          if (b.attributes[2].value in wordcountdict) {
            wordcountdict[b.attributes[2].value].push(b.tokenId);
          } else
          {
            wordcountdict[b.attributes[2].value] = [];
            wordcountdict[b.attributes[2].value].push(b.tokenId)
          }
        })
        setBastardnessTypes(bastardnessdict)
        setWordCounts(wordcountdict)

        
        

      })
      // console.log(gallery)
      await fetch(`https://api.bastardganpunks.club/totalSupply`)
      .then(response => response.json())
      .then((data) => {
        setTotalSupply(data.totalSupply);
        })
      // console.log(ikinci)

    }
    ,[])



  return (
    <div className="flex flex-wrap">
          <Background />

      <SideBar 
        bastardnessTypes={bastardnessTypes}
        wordCounts={wordCounts} 
        setv1v2={setv1v2}
        setV1Generation={setV1Generation}
        setBastardnessFilter={setBastardnessFilter}
        setHypeStatusFilter={setHypeStatusFilter}
        setSongWordCountFilter={setSongWordCountFilter}
        setBastardTypeFilter={setBastardTypeFilter}
        setBackgroundFilter={setBackgroundFilter}
        setFacingDirectionFilter={setFacingDirectionFilter}
        setSearchbar={setSearchbar}
        totalSupply={totalSupply}
      />
      <Gallery 
        bastards={bastards}
        v1v2={v1v2}
        v1Generation={v1Generation}
        bastardnessFilter={bastardnessFilter}
        hypeStatusFilter={hypeStatusFilter}
        songWordCountFilter={songWordCountFilter}
        bastardTypeFilter={bastardTypeFilter}
        backgroundFilter={backgroundFilter}
        facingDirectionFilter={facingDirectionFilter}
        searchBar={searchBar}

      />
    </div>
  )
}
