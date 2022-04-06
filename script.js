const waifuImgDiv = document.getElementById('waifu-img-div')
const waifuImg = document.getElementById('waifu-img')
const btn = document.getElementById('consumeBtn')

consumeApi()

btn.addEventListener('click', () => {
    consumeApi()
})

async function consumeApi() {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    }

    const res = await fetch('https://api.waifu.pics/sfw/waifu')
    const data = await res.json() //returns also a promise thus, 'await' keyword is used
    waifuImg.src = data.url
    console.log(waifuImgDiv.classList.contains('tr-img'))
    if(waifuImgDiv.classList.contains('tr-img')) {
        waifuImgDiv.classList.remove('tr-img')
        waifuImgDiv.classList.add('tr-img')
    } else {
        waifuImgDiv.classList.add('tr-img')
    }
}