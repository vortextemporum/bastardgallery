import {useState, useEffect} from "react"
import Card from "./card.js"
import Card2 from "./card2.js"
import LazyLoad from 'react-lazyload';
import InfiniteScroll from 'react-infinite-scroll-component';


const allV1 = [{"type": "GEN #1 BASTARD", "name":"GΞNΞSIS BGANPUNK #00","image":"https://ipfs.io/ipfs/QmaNa9fQwmtu6dKAKzwm2knpvGyLwr3NZJf5DmyRbFgB2p","tokenId":"5389"},{"type": "GEN #1 BASTARD", "name":"BGANPUNK #01","image":"https://ipfs.io/ipfs/QmUheQabszWxSthEfnkoN2r3ynxtaEuLx4dg2QTKTodtLY","tokenId":"10001"},{"type": "GEN #1 BASTARD", "name":"BGANPUNK #02","image":"https://ipfs.io/ipfs/Qmd3gtQacgAyBMA3H913JRsynjSwAbSjz6gxFwkKouRXq4","tokenId":"10003"},{"type": "GEN #1 BASTARD", "name":"BGANPUNK #03","image":"https://ipfs.io/ipfs/QmTcRiTg8ZrodQAEkeQSKM93QyYSpupWhrwz9fgTPpVh4L","tokenId":"10004"},{"type": "GEN #1 BASTARD", "name":"BGANPUNK #04","image":"https://ipfs.io/ipfs/Qmf6UhjrjtopshtCPGwTfsLNCrRDCUNYmQGhfs5WE9qDSt","tokenId":"10005"},{"type": "GEN #1 BASTARD", "name":"BGANCCCYYYBBBOOORRRGGGANTIPUNK #05","image":"https://ipfs.io/ipfs/QmcggjiSdpGyvsbiGCcErsyog7tkj5gD4e9hD8YNLmiHY1","tokenId":"10006"},{"type": "GEN #1 BASTARD", "name":"BGANPUNK #06","image":"https://ipfs.io/ipfs/QmTJLDtGYSyaXHZqou8XcNbBdK7yr9hzihbAfDzs9EdEBJ","tokenId":"10007"},{"type": "GEN #1 BASTARD", "name":"BGANPUNK #07","image":"https://ipfs.io/ipfs/QmYAL1oeHUXkQrz3dS19jsaPuAQbwkZaKYCNQxvhCjsN94","tokenId":"10008"},{"type": "GEN #1 BASTARD", "name":"BGANPUNK #08","image":"https://ipfs.io/ipfs/QmRffppBDyEH3HQMhsu2xwbM1ynWkcpt1rafx4oZ4aKD21","tokenId":"10009"},{"type": "GEN #1 BASTARD", "name":"♔ THE CHESS HUSTLER ♚ - BGANPUNK #09","image":"https://ipfs.io/ipfs/QmS9SV27dsTzPQu7XvnfReB8D1mdQhtcpcpMnD2x8Bm3B2","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10012","tokenId":"10012"},{"type": "GEN #1 BASTARD", "name":" R3S3RV3D BGANPUNK #10","image":"https://ipfs.io/ipfs/QmNrrxctTqeA5WTnb3UT9BYS913Usg2TBexmTvu5ZJ9kNs","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10013","tokenId":"10013"}, {"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"CØLØRED B·G·A·N CRYPTOPUNK[S] GENESIS #00 - #69","image":"https://ipfs.io/ipfs/Qmf4B3qJh3mxkmM2d21WtbpgaHEBocJFBMZydXfjB4DCQC","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10015","tokenId":"10015"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#70 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmThaVh692Ej8pgC8ktBk4gf6MSKHJL1AVf8yqkaBR5Jrc","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10016","tokenId":"10016"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#71 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmRTw68wuDVSCvoyypN4VSn7mJhkk3uuLrrE54oBCrtjFv","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10017","tokenId":"10017"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#72 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmUzV5niHWnQUkzN5FP5nbLtXLa9jNxzbpMQ9YpLULBfC6","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10018","tokenId":"10018"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#73 - CØLØRMØSHED B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmNM2mUixefnPWbaebojL4MgZgGnJq8v3xuNkiLSpypoej","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10019","tokenId":"10019"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#74 - DØØMED B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmaCpsfBLHB3yUNSYVmTek2JUwrfC8xuh4rrdCGDdyAFvm","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10020","tokenId":"10020"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#75 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmYVWPRbcM4YGhSB5aEN5PAFnu8oJ1wCD25UXDNDy7M9LD","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10021","tokenId":"10021"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#76 - CØLØRMØSHED B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmfSysi32h7PnSw3DtaMuPULGFpxBTDsSrfwhxNZHSSd8V","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10022","tokenId":"10022"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#77 - HANGØVΞR B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmS9VvvzET69BRj8iRzLoTcQ6jyeVrb6X7Y6AyM1Ys1ddX","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10023","tokenId":"10023"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#78 -  LEMØNHA-Z-Z-Z-Y B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmaPSvU2wbc45xj4wGxygd2njJ3WTtXWkprYexsM4KBN3V","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10024","tokenId":"10024"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"CYBERPUNK #2077 ","image":"https://ipfs.io/ipfs/QmaUjjkjCfRreWCZw1p8UTGnM5QZ79qV2PCiFW2yfyqNgh","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10026","tokenId":"10026"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#79 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmbcKGy76WM5P4Uvehkirg2fydT1WMTQj2kzQjx4CGpsRL","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10031","tokenId":"10031"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#80 - ㄖ卂丂丨丂 B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmY8U5feCTohZPjjSACZ7tJnUp293N6S3dNbbrpLMvQZqH","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10032","tokenId":"10032"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#81 - R҉A҉D҉I҉O҉A҉C҉T҉I҉V҉E҉ B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/Qmf1JXfMSLgJ8c49pXmkPoWBhrwXUMPYieH9SHq7CFCWMj","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10033","tokenId":"10033"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#82 - ░▄▀▀░▀▄▀░▄▀▀░█▒░░▄▀▄▒█▀▄░▄▀▀ B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmUseyADVve7M57nD5G8RMnHEkwLvy8weQhrWme1MER6hv","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10034","tokenId":"10034"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#83 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmNUw94GRoxP3MqqmvD2rS5Vo7zUHD1bALN914v9GJwnJq","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10035","tokenId":"10035"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#84 - MİNİMİNİ B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmZ2KXGESbEnpJRcqApkUqBEGtohpDDhwCnnNpM8B7Yo67","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10036","tokenId":"10036"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#85 - CØLØ(🆁🅴🅳)ΞYΞS B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/Qmctqug192zs4jmVtfju3vhLYRv2eCL3kWnBnELgxH55SS","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10037","tokenId":"10037"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#86 - DUALNECK B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmYCBw4VCW6R12PqsGtYKsd6rE3UW27u62FzoEAYj1wDwp","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10038","tokenId":"10038"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#87 - 💄 B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmSc4fLQt3KatGi6vFQdjWMdDZG1RtTVUbpbMaBikAF7ib","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10039","tokenId":"10039"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#88 - ƧΛFΛЯΛЯI B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmeyWrXuPbEDzgQjQCzgPeMJVmy8Cy8mFhF2aey4wMLEkC","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10040","tokenId":"10040"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#89 - ☾REÄMყ B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmSBiFtCjtNfPQbvJ5VZErP1xmaQT9Juj2EjxCSdmo8azu","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10041","tokenId":"10041"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#90 - B·G·A·N·G·A·N·G PØLICE REPØRT","image":"https://ipfs.io/ipfs/QmRc1BDYFpi4Gz4PyR6rYHyBzct41CBgzvaBauUi2AyMEU","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10043","tokenId":"10043"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#91 - ＳＵＰＥＲＳＴＡＲ B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/Qmb7KPoepfXomzKWZt9131P4b8pEqSW7qzApjYExCjEXzp","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10045","tokenId":"10045"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#92 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmYApDk3dsjLxZZjxo3mSsTLNujPoGHyXUDjusiNztCKuo","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10046","tokenId":"10046"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#93 - 𝕍𝕀𝕂𝕀ℕ𝔾·𝔸·ℕ 🅲🆁🆈🅿🆃Ø🅿🆄🅽🅺","image":"https://ipfs.io/ipfs/QmWxRSdLTpdw57HaAAdwtkwpkxSsbCX7pDKHUGqr3PvRjV","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10047","tokenId":"10047"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#94 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmWuru8BTjWx2ywEvyiKgbLzi1pdaT7qAJ7BgtvF5cmUAn","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10048","tokenId":"10048"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#95 - BØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmNkpJZ5CV1zEmkm2QZYchbx9Z4fWNBAGREYZD7ejJrFy7","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10049","tokenId":"10049"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#96 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmNpHxG9qHFN4WkGTRLFTvwHJuFoEpn8aRyYv3VnXYGpjM","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10050","tokenId":"10050"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#97 - CØLØRED B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmPcFpSCFyMtTv92dNCzGvk5vS65WHRXrpJMPoSYpRkXGu","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10051","tokenId":"10051"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#98 - MØRPH1NG B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmbYJamX8hc4FfWQyVhzpS2s9aTjgQ2dqEL9mEMWC44ahe","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10053","tokenId":"10053"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":" #99 - DØUBLELUNG B·G·A·N CRYPTOPUNK","image":"https://ipfs.io/ipfs/QmbdvtqXzctgogFnVtY4aVksoGeBXWnvRkezr6eXzQ3BAR","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10054","tokenId":"10054"},{"type": "GEN #2 CØLØRED B·G·A·N·P·U·N·K", "name":"#100 - 乃乇尺ҜᎶ卂几卩ㄩ几Ҝ","image":"https://ipfs.io/ipfs/QmSfKAxFwJQLYYwoobtjK8chiRDP6ES36QDii53kSfzUXi","external_url":"https://app.rarible.com/token/0x9126b817ccca682beaa9f4eae734948ee1166af1:10055","tokenId":"10055"}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #01/30', 'image': 'https://ipfs.io/ipfs/QmaBZzBNyRJ39Y5mXgEUVp9EfoPBgiZyASfNiRaGXAWBzZ/image.png', 'tokenId': '10056'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #02/30', 'image': 'https://ipfs.io/ipfs/Qmc7K3zmytBP6AhuyM4jDWk8D4jV45eUVgaxNB7X7o3uV2/image.png', 'tokenId': '10057'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #03/30', 'image': 'https://ipfs.io/ipfs/QmezZB97BWvkRKdE5esWJSt59PtTa3oyAm5fbkbWyGVcAV/image.png', 'tokenId': '10058'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #04/30', 'image': 'https://ipfs.io/ipfs/QmXFuQrLp9d4eeqxhfJ2A3rERrnUVunh5oLBHTghbL5c6z/image.png', 'tokenId': '10059'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #05/30', 'image': 'https://ipfs.io/ipfs/QmczgTqP1BeesJnz9Q4fy7Umx6VmUbPV9HQ2t4r2nvUU1L/image.png', 'tokenId': '10061'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #06/30', 'image': 'https://ipfs.io/ipfs/QmcS6TQnmtWZupfqQ3UuP8WCrvf4z6aYYBqcBf1YgGoCr7/image.png', 'tokenId': '10062'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #07/30', 'image': 'https://ipfs.io/ipfs/QmUKmjzhucJxUU4kz7LruHoKUkNV8q5dptc9Xw4nZ5bYTJ/image.png', 'tokenId': '10063'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #08/30', 'image': 'https://ipfs.io/ipfs/QmQXkTayKSou9XumimqriSAm3fXQHQWpDN1rcm4y9SBNVn/image.png', 'tokenId': '10064'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #09/30', 'image': 'https://ipfs.io/ipfs/QmVTLbNoCXF5eKj2HXE7TFxtnE63JPwLacNLdRbPvFg6Cr/image.png', 'tokenId': '10067'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #10/30', 'image': 'https://ipfs.io/ipfs/QmdefpQqJDqNt8YvGbxRKm93jWVHgZfhxkAoapuL2u2BCC/image.png', 'tokenId': '10068'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #11/30', 'image': 'https://ipfs.io/ipfs/QmXzJWcqxWETQVfEk5vmt7ux3MU1hjwqgc5ZDxYvD5KnWa/image.png', 'tokenId': '10070'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #12/30', 'image': 'https://ipfs.io/ipfs/QmWyYuKHBs6efTbxKAnKU3HGUZ6zoqkewQchdLmDdRxUir/image.png', 'tokenId': '10076'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #13/30', 'image': 'https://ipfs.io/ipfs/QmXobFWCSwZohkoxjvke71KQERFSUQb2t9Stus8y5wzU8P/image.png', 'tokenId': '10077'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #14/30', 'image': 'https://ipfs.io/ipfs/QmPj5385K8Y6jWV7231o4yXvtTKdgBsG6FX4tUKuFwRsyy/image.png', 'tokenId': '10078'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #15/30', 'image': 'https://ipfs.io/ipfs/QmYUx84B7WHTMMxYn1Dg7AzekW28pkurEzmUSqWoC6DxJL/image.png', 'tokenId': '10075'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #16/30', 'image': 'https://ipfs.io/ipfs/QmYofPZNTYSGfYgZj3CVDzkgC6yD6LLxVBojBroZSo3BFX/image.png', 'tokenId': '10079'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #17/30', 'image': 'https://ipfs.io/ipfs/QmZUDsLtKHcZTHtZJno56UkPn7dzw433j6XyuNWgbvFoBA/image.png', 'tokenId': '10080'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #18/30', 'image': 'https://ipfs.io/ipfs/Qma876845zU58CAKseFAQZQ1ATDDMN9kuk27s1azzLbabA/image.png', 'tokenId': '10081'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #19/30', 'image': 'https://ipfs.io/ipfs/Qmbin3TSqrahfY7HNHbgb4v1PSWFW2DWcDz6JiiBfamugW/image.png', 'tokenId': '10083'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #20/30', 'image': 'https://ipfs.io/ipfs/QmQjrPUDbK8oaHosWbz7NLxAhZwHtHtBMtpxEm5qCXCczZ/image.png', 'tokenId': '10084'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #21/30', 'image': 'https://ipfs.io/ipfs/QmWb2vkBmygWUjaFjwXsrHFyhgbwxTeJP4TejbVp6W2ZRc/image.png', 'tokenId': '10085'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #22/30', 'image': 'https://ipfs.io/ipfs/QmNppcjMWmc73Y6p6iC5mzQjXPzYRg8jxxsxbHD5tF4TFD/image.png', 'tokenId': '10086'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #23/30', 'image': 'https://ipfs.io/ipfs/QmPQKkz3W5fuPEmt6VgwbyScMwv9bxViz7aaghC1WZRCs4/image.png', 'tokenId': '10087'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #24/30', 'image': 'https://ipfs.io/ipfs/QmT5threvBpJkY5cW9YdsnH6otPKvmcYY63Kbhxb2yFRRQ/image.png', 'tokenId': '10088'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #25/30', 'image': 'https://ipfs.io/ipfs/QmauCrs8V2cW5ZhyTSCtaj3mJTVSrPv9Z8pSdm9fRXFcMr/image.png', 'tokenId': '10089'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #26/30', 'image': 'https://ipfs.io/ipfs/QmaDyLa76cCaU7u6NnQBRfnpb5a2nHnYuaP9SYUNyAzUuq/image.png', 'tokenId': '10090'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #27/30', 'image': 'https://ipfs.io/ipfs/QmQD6yuE6ryWWCq7yipGNcMCpi1MhXyJ6vBeQkFrALnJ8Q/image.png', 'tokenId': '10091'}, {'type': 'DØØMΞD DΞGΞN', 'name': ' DØØMΞD DΞGΞN #28/30', 'image': 'https://ipfs.io/ipfs/QmSq1FodTb1uULDqo48Z2B9NBJyyxLQ1ngn8vZNStiUbaf/image.png', 'tokenId': '10093'},  {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #29/30', 'image': 'https://ipfs.io/ipfs/QmRoMK4XrNRoQdfriFHSybZxWYfpbTi6HfmLsWksU7pCoq/image.png', 'tokenId': '10094'}, {'type': 'DØØMΞD DΞGΞN', 'name': 'DØØMΞD DΞGΞN #30/30', 'image': 'https://ipfs.io/ipfs/QmPBLouX4M9wvvok3dRv6hmH4fwQW74DqgLgDMUeUiWfi8/image.png', 'tokenId': '10095'}]

export default function Gallery({
  bastards, 
  v1v2,
  v1Generation, 
  bastardnessFilter,
  hypeStatusFilter,
  songWordCountFilter,
  bastardTypeFilter,
  backgroundFilter,
  facingDirectionFilter,
  searchBar,
  indices,
  setIndices

}) {

  const initialLoad = 20;
  const loadCount = 20;

  const [loadedIndices, setLoadedIndices] = useState(indices.slice(0, initialLoad));

  useEffect(() => {
    setLoadedIndices(indices.slice(0, initialLoad));
    console.log(indices);
    console.log(loadedIndices)

  }, [indices]);

  const nextIndices = () => {
    setLoadedIndices(indices.slice(0, loadedIndices.length + loadCount));
  };

  useEffect(() => {


  
    setIndices( 
    bastards.filter(bastard => 
      (hypeStatusFilter === 'ALL' ? bastard : bastard.attributes[0].value === hypeStatusFilter) &&
      (bastardnessFilter === 'ALL' ? bastard : bastard.attributes[1].value === bastardnessFilter) &&
      (songWordCountFilter === 'ALL' ? bastard : bastard.attributes[2].value === songWordCountFilter) &&
      (bastardTypeFilter === 'ALL' ? bastard : bastard.attributes[0].value === "CALM AF (STILL)" && bastard.attributes[3].value === bastardTypeFilter) &&
      (backgroundFilter === 'ALL' ? bastard : bastard.attributes[0].value === "CALM AF (STILL)" && bastard.attributes[4].value === backgroundFilter) &&
      (facingDirectionFilter === 'ALL' ? bastard : bastard.attributes[0].value === "CALM AF (STILL)" && bastard.attributes[5].value === facingDirectionFilter) ) )
    }, [hypeStatusFilter, bastardnessFilter, songWordCountFilter, bastardTypeFilter, backgroundFilter, facingDirectionFilter]);  
  

    return (
      


      <div id="scrollableDiv" className="charriot overflow-y-auto  h-screen  w-full sm:w-3/4  relative inline-block">
          {
          !(v1v2)? <div className="flex flex-wrap"> 
          
          {(v1Generation === 'ALL' ? allV1 : allV1.filter(bastard => bastard.type === v1Generation)).map(bastard => <div className="my-auto mx-auto"> <Card2 bas={bastard} key={bastard.tokenId}/></div>)}
         
          </div>
          : (Number(searchBar)) ? <Card bas={bastards[searchBar]} key={bastards[searchBar].tokenId}/> :

              <InfiniteScroll
                className="flex flex-row flex-wrap justify-center gap-1.5"
                dataLength={loadedIndices.length}
                next={nextIndices}
                hasMore={loadedIndices.length < indices.length}
                loader={<div className="content-center">Loading...</div>}
                scrollThreshold="100px"
                scrollableTarget="scrollableDiv"

              >
              { loadedIndices.map(bastard => 
              
                // <LazyLoad
                //     key={bastard.tokenId}
                //     height="280px"
                //     offset={300}
                //     placeholder={<img src="/loading.gif" style={{"width": "280px","height": "280px"}}/>}
                //     overflow
                //     once
                //   >
                  <Card bas={bastard} />  
                // </LazyLoad>
              )}
              </InfiniteScroll>
          }         
                
                
                
                    
               
             
  
      </div>
    )
  }