import axios from "axios"

export async function fetchData(){
    try{
        const res = await axios.get('https://rickandmortyapi.com/api/character/')
        return res.data.results
    }catch{
        console.log('error')
    }
}