import Head from 'next/head'

import SideBar from "../components/sidebar.js"
import Gallery from "../components/gallery.js"
import {useEffect,useState} from "react"
import Background from "../components/bg.js"



export default function Home() {
  


  const [bastards, setBastards] = useState([]);
  const [bastardnessTypes,setBastardnessTypes] = useState({})
  const [wordCounts,setWordCounts] = useState({})
  const [hypeTypeCounts,setHypeTypeCounts] = useState({})
  const [bastardTypeCounts,setBastardTypeCounts] = useState({})
  const [backgroundCounts,setBackgroundCounts] = useState({})
  const [facingDirectionCounts,setFacingDirectionCounts] = useState({})

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

  const [indices, setIndices] = useState([]);

  useEffect( 
    async () => {
      await fetch(`https://api.bastardganpunks.club/all`)
      .then(response => response.json())
      .then((data) => {
        setBastards(data);
        setIndices(data)
        let hypetypecountdict = {}
        let bastardnessdict = {}
        let wordcountdict = {}
        let bastardtypecountdict = {}
        let backgroundcountdict = {}
        let facingdirectiondict = {}
        data.map(b => {
          if (b.attributes[0].value in hypetypecountdict) {
            hypetypecountdict[b.attributes[0].value].push(b.tokenId);
          } else
          {
            hypetypecountdict[b.attributes[0].value] = [];
            hypetypecountdict[b.attributes[0].value].push(b.tokenId)
          }
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
          if( b.attributes[0].value == "CALM AF (STILL)") {
            if (b.attributes[3].value in bastardtypecountdict) {
              bastardtypecountdict[b.attributes[3].value].push(b.tokenId);
            } else
            {
              bastardtypecountdict[b.attributes[3].value] = [];
              bastardtypecountdict[b.attributes[3].value].push(b.tokenId)
            }
          
            if (b.attributes[4].value in backgroundcountdict) {
              backgroundcountdict[b.attributes[4].value].push(b.tokenId);
            } else
            {
              backgroundcountdict[b.attributes[4].value] = [];
              backgroundcountdict[b.attributes[4].value].push(b.tokenId)
            }
            if (b.attributes[5].value in facingdirectiondict) {
              facingdirectiondict[b.attributes[5].value].push(b.tokenId);
            } else
            {
              facingdirectiondict[b.attributes[5].value] = [];
              facingdirectiondict[b.attributes[5].value].push(b.tokenId)
            }
          }
        })
        setHypeTypeCounts(hypetypecountdict)
        setBastardnessTypes(bastardnessdict)
        setWordCounts(wordcountdict)
        setBastardTypeCounts(bastardtypecountdict)
        setBackgroundCounts(backgroundcountdict)
        setFacingDirectionCounts(facingdirectiondict)

        
        

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

    useEffect( 
      async () => {
        let hypetypecountdict = {}
        let bastardnessdict = {}
        let wordcountdict = {}
        let bastardtypecountdict = {}
        let backgroundcountdict = {}
        let facingdirectiondict = {}
        indices.map(b => {
          if (b.attributes[0].value in hypetypecountdict) {
            hypetypecountdict[b.attributes[0].value].push(b.tokenId);
          } else
          {
            hypetypecountdict[b.attributes[0].value] = [];
            hypetypecountdict[b.attributes[0].value].push(b.tokenId)
          }
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
          if( b.attributes[0].value === "CALM AF (STILL)") {
            if (b.attributes[3].value in bastardtypecountdict) {
              bastardtypecountdict[b.attributes[3].value].push(b.tokenId);
            } else
            {
              bastardtypecountdict[b.attributes[3].value] = [];
              bastardtypecountdict[b.attributes[3].value].push(b.tokenId)
            }
          
            if (b.attributes[4].value in backgroundcountdict) {
              backgroundcountdict[b.attributes[4].value].push(b.tokenId);
            } else
            {
              backgroundcountdict[b.attributes[4].value] = [];
              backgroundcountdict[b.attributes[4].value].push(b.tokenId)
            }
            if (b.attributes[5].value in facingdirectiondict) {
              facingdirectiondict[b.attributes[5].value].push(b.tokenId);
            } else
            {
              facingdirectiondict[b.attributes[5].value] = [];
              facingdirectiondict[b.attributes[5].value].push(b.tokenId)
            }
          }
        })
        setHypeTypeCounts(hypetypecountdict)
        setBastardnessTypes(bastardnessdict)
        setWordCounts(wordcountdict)
        setBastardTypeCounts(bastardtypecountdict)
        setBackgroundCounts(backgroundcountdict)
        setFacingDirectionCounts(facingdirectiondict)
  
      }
      ,[indices])  

  return (
    <div className="flex flex-wrap">
      <Head>
        <title>BASTARD GAN PUNKS GALLERY</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"></meta>

      </Head>

          <Background />

      <SideBar 
        bastardnessTypes={bastardnessTypes}
        wordCounts={wordCounts} 
        hypeTypeCounts={hypeTypeCounts}
        bastardTypeCounts={bastardTypeCounts}
        backgroundCounts={backgroundCounts}
        facingDirectionCounts={facingDirectionCounts}
        setv1v2={setv1v2}
        setV1Generation={setV1Generation}
        setBastardnessFilter={setBastardnessFilter}
        setHypeStatusFilter={setHypeStatusFilter}
        setSongWordCountFilter={setSongWordCountFilter}
        setBastardTypeFilter={setBastardTypeFilter}
        setBackgroundFilter={setBackgroundFilter}
        setFacingDirectionFilter={setFacingDirectionFilter}

        bastardnessFilter={bastardnessFilter}
        hypeStatusFilter={hypeStatusFilter}
        songWordCountFilter={songWordCountFilter}
        bastardTypeFilter={bastardTypeFilter}
        backgroundFilter={backgroundFilter}
        facingDirectionFilter={facingDirectionFilter}

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
        indices={indices}
        setIndices={setIndices}
      />
    </div>
  )
}
