
export const Helpers = (function(){
  
  // function to convert string into a hyphenated link
  const _formatTextToUrl = (text) => {
    const t = text.toLowerCase()
    return t.split(' ').join('-')
  }

  // this function get the day in number and return
  // a object of link
  const _getDay = (days) => {
    const day = new Date().getDay()
    return days[day]
  }

  // function that will split the array into parts
  const _splitArray = (data) => {
    // find length of screen
    const length = _findLength()
    
    // create a fresh array based on the length
    const result =  createArray(length)
    let counter = 0
  
    // split the array
    for (let i = 0; i < data.length; i++) {
      // push the array into each array list
      result[counter].push(data[i])
      // increment the counter
      i%length === 0 ? counter = 0 : counter++
    }

    // return the new array
    return result
  }
  
  
  // this array will combine two groups of array
  const _combineArray = (photos, videos) => {
    // initiate an array and counter
    let arr = []
    let counter = 0
  
    // loop into the array
    for (let i = 0; i < photos.length; i++) {
      // if array index is % 0
      if (i % 3 === 0) {
        arr.push(videos[counter])
        counter++
      }
      // push array
      arr.push(photos[i])
    }
    // return new splits of array
    return arr
  }


  // function to return a number if the 
  // width is screen width is within a certain width
  const _findLength = () => {
    const w = window.innerWidth
    if (w < 568) {
      return 1
    } else if (w < 868) {
      return 2
    } else {
      return 3
    }
  }


  // function to run when the screen is resized
  // and return true if the parameters are met
  const _resize = (screen) => {
    const width = window.innerWidth
    if (screen <= 568) {
      if (width > 568) return true
    } else if (screen > 568 && screen < 868) {
      if (width > 868) {
        return true
      } else if (width < 568) {
        return true
      }
    } else if (screen >= 868) {
      if (width < 868) return true
    }
  }

  // get data from localstorage
  const _getFromStorage = () => {
    // get data from storage
    const a = localStorage.getItem('samples')
    // parse data
    const d = JSON.parse(a)

    // separate data
    let photos = checkIfEmpty('photos', d.data)
    let videos = checkIfEmpty('videos', d.data)

    let dataFiles;
    if (photos && !videos) {
      dataFiles = photos
    } else if (!photos && videos) {
      dataFiles = videos
    } else {
      dataFiles = _combineArray(photos, videos)
    }

    // combine  
    return {
      dataFiles,
      page: d.page
    }
  }



  const checkIfEmpty = (arr, data) => {
    let media
    if(arr === 'photos') {
      media = data.photos ? data.photos.photos : null
    } else {
      media = data.videos ? data.videos.videos : null
    }
    return media
  }













  return {
    formatTextToUrl(text) {
      return _formatTextToUrl(text)
    },
    getDay (days) {
      return _getDay(days)
    },
    splitArray(data) {
      return _splitArray(data)
    },
    combineArray(photos, videos){
      return _combineArray(photos, videos)
    },
    findLength(){
      return _findLength()
    },
    resize(screen){
      return _resize(screen)
    },
    getFromStorage() {
      return _getFromStorage()
    }
  }
})()









// create a new fresh set of array
const createArray = (length) => {
  let arr = []
  for (let x = 0; x < length; x++) {
    arr.push([])
  }
  return arr
}


