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

  // function to get additional photo data
  const _getPhotos = async (n) => {
    // generate url
    const PhotoUrl = `v1/curated?page=${n}&per_page=15`
    // fetch data
    const photos = await _fetchData(PhotoUrl)
    return {photos}
  }
  
  // function to get additional photo data
  const _getVideos = async (n) => {
    // generate url
    const PhotoUrl = `videos/popular?page=${n}&per_page=22`
    // fetch data
    const videos = await _fetchData(PhotoUrl)
    return {videos}
  }
  
  // function to fetch another batch of data
  // and save it to the local storage
  const _addData = async (m, n) => {
    let data = {}
    // fetch data and save to localStorage
    if(m === 'all') {
      data = await _getHomeData(n)
    } else if(m === 'photo') {
      data = await _getPhotos(n)
    } else if (m === 'video') {
      data = await _getVideos(n)
    }

    const media = JSON.stringify({data, page: n})
    localStorage.setItem('samples', media)
  }
 
  
  return {
    getHomeData(n) {
      return _getHomeData(n);
    },
    addData(m, n){
      return _addData(m, n)
    },
    getPhotos(n){
      return _getPhotos(n)
    },
    getVideos(n){
      return _getVideos(n)
    },
    

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
