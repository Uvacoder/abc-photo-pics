
const API_Key = '563492ad6f9170000100000183762ece794d430888b88bbd576c5b57';
const url = 'https://api.pexels.com/'
const Photo_URL = 'https://api.pexels.com/v1/search?query=people&per_page=2'
const Video_URL = 'https://api.pexels.com/videos/search?query=people&per_page=2'






export const _getHomeData = async () => {
  const photoUrl = `${url}v1/search?query=common&per_page=80`
  const photos = await _fetchData(photoUrl)
  console.log(photos)
}





// fetch data
const _fetchData = async (url) => {
  const result = await fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Authorization': API_Key
    },
  });

  let data = await result.json()
  return data
}
