import axios from 'axios'

const API_Key = '563492ad6f9170000100000183762ece794d430888b88bbd576c5b57';
const Photo_URL = 'https://api.pexels.com/v1/search?query=people&per_page=80'
const Video_URL = 'https://api.pexels.com/videos/search?query=people&per_page=80'



// private methods
const _getToken = async () => {

  const result = await fetch('https://api.pexels.com/v1/search?query=people', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
      // 'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
      'Authorization': API_Key
    },
    // body: 'grant_type=client_credentials'
  });

  let a = await result.json()
  console.log(a)
  // let a = await result.blob().then(function (myBlob) {
  //   // var objectURL = URL.createObjectURL(myBlob);
  //   // myImage.src = objectURL;
  //   console.log(myBlob)
  // });


  // const data = await result.json();
  // return data.access_token;
}


export const getData = async () => {
  let token = await _getToken()
  // let genre = await _getGenres(token)
  // let genre = await _getPlaylistByGenre(token, 'decades')
  // let genre = await _getTracks(token, 'https://api.spotify.com/v1/playlists/37i9dQZF1DX4UtSsGT1Sbe/tracks')
  // let genre = await _getTrack(token, 'https://api.spotify.com/v1/tracks/0Guoe0OiJGCf9sTGdMT3U5')
  // console.log(genre)
}

