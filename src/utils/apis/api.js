import pageData from '../data/navlinks.json'
import {Helpers} from '../helpers/common'


export const APIRequest = (function() {
  
  const _getHomeData = async (n) => {
    // get the query of the day string
    const query = Helpers.getDay(pageData.pages)

    // generate url string
    const PhotoUrl = `v1/search?page=${n}&query=${query}&per_page=18`
    const VideoUrl = `videos/search?page=${n}&query=${query}&per_page=6`
    
    // fetch data
    const photos = await _fetchData(PhotoUrl)
    const videos = await _fetchData(VideoUrl)
    return {photos, videos}
  }

  // function to fetch another batch of data
  // and save it to the local storage
  const _addData = async (n) => {
    // fetch data and save to localStorage
    const data = await _getHomeData(n)
    const media = JSON.stringify({data, page: n})
    localStorage.setItem('samples', media)
  }

  const _getPhotos = async (n) => {
    // generate url
    const PhotoUrl = `v1/curated?per_page=${n}&per_page=21`
    // fetch data
    const photos = await _fetchData(PhotoUrl)
    return {photos}
  }

  // function to fetch another batch of data
  // and save it to the local storage
  const _addPhotos = async (n) => {
    // fetch data and save to localStorage
    const data = await _getPhotos(n)
    const photos = JSON.stringify({data, page: n})
    localStorage.setItem('samples', photos)
  }



  // const data = {photos, videos}
  // const a = JSON.stringify({data, page: 1})
  
  // const b = localStorage.getItem('samples')
  // const c = JSON.parse(b)
  // return ({...c.data})
  // return {b}


  
  
  return {
    getHomeData(n) {
      return _getHomeData(n);
    },
    addData(n){
      return _addData(n)
    },
    getPhotos(n){
      return _getPhotos(n)
    },
    addPhotos(n){
      return _addPhotos(n)
    }

  }
  
})()



  
  
  
  
// fetch data
const _fetchData = async (link) => {
  const API_Key = '563492ad6f9170000100000183762ece794d430888b88bbd576c5b57';
  const URL = 'https://api.pexels.com/'

  const result = await fetch(`${URL}${link}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': API_Key
    },
  });

  let data = await result.json()
  return data
}
