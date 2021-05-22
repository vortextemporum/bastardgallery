import SideBar from "../components/sidebar.js"
import Gallery from "../components/gallery.js"
import {useEffect,useState} from "react"


export default function Home() {
  const [bastards, setBastards] = useState([]);
  const [bastardnessTypes,setBastardnessTypes] = useState({})
  const [wordCounts,setWordCounts] = useState({})
 
  // const [bastardnessFilter, setBastardnessFilter] = useState({
  //     "GOD BASTARD": false,
  //     "INGLOURIOUS BASTARD": false,
  //     "ONE OF A KIND BASTARD": false,
  //     "NOT A BASTARD": false,
  //     "$UGARWHALE BASTARD": false,
  //     "CD456 BASTARD": false,
  //     "EMO BASTARD": false,
  //     "NECROMANCER BASTARD": false,
  //     "L4M3R BASTARD": false,
  //     "SIMP BASTARD": false,
  //     "MAXIE BASTARD": false,
  //     "GAMER BASTARD": false,
  //     "ZOOMER BASTARD": false,
  //     "POOR BASTARD": false,
  //     "PERSONA NON GRATA BASTARD": false,
  //     "PARASITE BASTARD": false,
  //     "SNOOB BASTARD": false,
  //     "W4NK3R BASTARD": false,
  //     "LOW POLY BASTARD": false,
  //     "HORNY BASTARD": false,
  //     "PEACH BASTARD": false,
  //     "CHAD BASTARD": false,
  //     "DOOMER BASTARD": false,
  //     "DUMPSTER BASTARD": false,
  //     "CONFORMIST BASTARD": false,
  //     "SMOL BASTARD": false,
  //     "PUMPER BASTARD": false,
  //     "THETA BASTARD": false,
  //     "GENTLE BASTARD": false,
  //     "PIMP BASTARD": false,
  //     "ROMANTIQUE BASTARD": false,
  //     "OMEGA BASTARD": false,
  //     "ALPHA BASTARD": false,
  //     "DIABOLIQUE BASTARD": false,
  //     "DUMBA$$ BASTARD": false,
  //     "5HEAD BASTARD": false,
  //     "WEEB BASTARD": false,
  //     "FAKE BASTARD": false,
  //     "DOUCHE BASTARD": false,
  //     "DΞGΞN BASTARD": false,
  //     "DEALER BASTARD": false,
  //     "SORCERER BASTARD": false,
  //     "ANGEL BASTARD": false,
  //     "UGLY BASTARD": false,
  //     "DANK BASTARD": false,
  //     "REKT BASTARD": false,
  //     "DUMMKOPF BASTARD": false,
  //     "BLUPIL BASTARD": false,
  //     "WAIFU BASTARD": false,
  //     "NYANCAT BASTARD": false,
  //     "MOONBOI BASTARD": false,
  //     "STINKY BASTARD": false,
  //     "HIPPIE BASTARD": false,
  //     "PRANKER BASTARD": false,
  //     "STONER BASTARD": false,
  //     "HODLER BASTARD": false,
  //     "SEMI BASTARD": false,
  //     "SEXMACHINA BASTARD": false,
  //     "PEPEGA BASTARD": false,
  //     "BOMBSHELL BASTARD": false,
  //     "SAFU BASTARD": false,
  //     "0HEAD BASTARD": false,
  //     "EVANGELIST BASTARD": false,
  //     "BIG TIDDY GOTH BASTARD": false,
  //     "WHALE WANNABE BASTARD": false,
  //     "FUTURIST BASTARD": false,
  //     "RADPIL BASTARD": false,
  //     "JOKER BASTARD": false,
  //     "VEGAN BASTARD": false,
  //     "2HEAD BASTARD": false,
  //     "BOOMER BASTARD": false,
  //     "TROLL BASTARD": false,
  //     "SMUG BASTARD": false,
  //     "ROGUE BASTARD": false,
  //     "3HEAD BASTARD": false,
  //     "HALAL BASTARD": false,
  //     "BLACKPIL BASTARD": false,
  //     "AB123 BASTARD": false,
  //     "NOOB BASTARD": false,
  //     "GLOOMER BASTARD": false,
  //     "NERD BASTARD": false,
  //     "FEELSGOOD BASTARD": false,
  //     "MELON USK BASTARD": false,
  //     "MINNIE BASTARD": false,
  //     "ANON BASTARD": false,
  //     "1HEAD BASTARD": false,
  //     "0.0001 IQ BASTARD": false,
  //     "FLIPPER BASTARD": false,
  //     "BLOOMER BASTARD": false,
  //     "JUST A PLAIN BASTARD": false,
  //     "NOCOINER BASTARD": false,
  //     "4HEAD BASTARD": false,
  //     "REAL DEAL BASTARD": false,
  //     "BETA BASTARD": false,
  //     "SER BASTARD": false,
  //     "500 IQ BASTARD": false,
  //     "TANKIE BASTARD": false,
  //     "6HEAD BASTARD": false,
  //     "BARBARIAN BASTARD": false,
  //     "ETHEREUM KILLA BASTARD": false,
  //     "BADA$$ BASTARD": false,
  //     "COOMER BASTARD": false,
  //     "BOURGEOIS BASTARD": false,
  //     "FREN BASTARD": false,
  //     "EVIL BASTARD": false,
  //     "NIFTYMANIAC BASTARD": false,
  //     "WHITEPIL BASTARD": false,
  //     "FOMBOI BASTARD": false,
  //     "C00LIO BASTARD": false,
  //     "DUMPER BASTARD": false,
  //     "EGGPLANT BASTARD": false,
  //     "VIRGIN BASTARD": false,
  //     "BLACKSMITH BASTARD": false,
  //     "RUGPULLER BASTARD": false,
  //     "EF789 BASTARD": false,
  //     "JACK OF ALL TRADES BASTARD": false,
  //     "BIGBRAIN BASTARD": false,
  //     "C̣ͦͧU̺̱̫RͨͣͫŠ͎͞E᷿ͯ͂Dͩ͢ BASTARD": false,
  //     "ZERO DIVIDER BASTARD": false,
  //     "DEF NOT A BASTARD": false
  // })

  const [v1v2, setv1v2] = useState(0);
  // V1
  const [v1Generation, setV1Generation] = useState("ALL");

  // V2
  const [bastardnessFilter, setBastardnessFilter] = useState("ALL")
  const [hypeStatusFilter, setHypeStatusFilter] = useState("ALL")
  const [songWordCountFilter, setSongWordCountFilter] = useState("ALL")
  // CALM AF TRAITS
  const [bastardTypeFilter, setBastardTypeFilter] = useState("ALL")
  const [backgroundFilter, setBackgroundFilter] = useState("ALL")
  const [facingDirectionFilter, setFacingDirectionFilter] = useState("ALL")

  function v1v2change(e){ e.preventDefault; setv1v2(e); console.log(e) };

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
      
      // console.log(ikinci)

    }
    ,[])



  return (
    <div className="flex flex-wrap">
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

      />
    </div>
  )
}
