const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false

    if (error) {
      reject(new Error('error in login'))
    }

    console.log('user logged')
    resolve({ email })
    return email
  })
}

const getUserVideos = (email) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getUserVideos')
      resolve(['video1', 'video2', 'video3'])
    }, 2000)
  })
}

const getVideoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getVideoDetails')
      resolve({ title: 'video title' })
    }, 2500)
  })
  
}


const displayUser = async () => {
  try {
    const user = await loginUser('gabriel@email.com', '1234567')
    const videos = await getUserVideos(user.email)
    const videoDetails = await getVideoDetails(videos[0])

    console.log(user, videos, videoDetails)
  } catch (error) {
    console.error(error)
  }
}

displayUser()
