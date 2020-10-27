import axios from 'axios'

const API_Key = '563492ad6f9170000100000183762ece794d430888b88bbd576c5b57';
const Photo_URL = 'https://api.pexels.com/v1/search?query=people&per_page=2'
const Video_URL = 'https://api.pexels.com/videos/search?query=people&per_page=2'



// private methods
const _getToken = async () => {

  const result = await fetch(Video_URL, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': API_Key
    },
  });

  let a = await result.json()
  console.log(a)
}


export const getData = async () => {
  // let token = await _getToken()


}

