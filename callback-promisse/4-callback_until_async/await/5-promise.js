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

loginUser('gabriel@email.com', '1234567')
.then(user => getUserVideos(user.email))
.then(video => getVideoDetails(video[0]))
.then(videoDetails => console.log({videoDetails}))
.catch(error => console.log({ error }))

  // Promise.all, executa as Promises em paralelo, o que significa que elas não têm conhecimento umas das outras.

// Promise.all([loginUser('gabriel@email.com', '1234567'), getUserVideos(user.email), getVideoDetails(video[0])])
// .then(result => console.log({ result }))
// .catch(error => console.log(error))
