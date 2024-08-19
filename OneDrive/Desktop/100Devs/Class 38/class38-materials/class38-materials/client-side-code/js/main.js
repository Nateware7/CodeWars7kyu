document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const charactersName = document.querySelector('input').value
    try{
        const res = await fetch(`https://mr-robo-api.onrender.com/api/${charactersName}`)
        const data = await res.json()

        console.log(data)
        document.querySelector('h2').innerText = data.condition
    }catch(error){
        console.log(error)
    }
}