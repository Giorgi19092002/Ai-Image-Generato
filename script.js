const API_Key = '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'

const submitIcon = document.querySelector('#submit-icon')
const inputElement = document.querySelector('input')
const imageSection = document.querySelector('.images-section')

const getImages = async () => {
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `bearer ${API_Key}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prompt: inputElement.value,
            n: 4,
            size: '1024x1024'
        })
    }
    try{
      const response = await fetch('https://api.openai.com/v1/images/generations',options)
      const data = await response.json()

      data?.data.forEach(imageObject => {
        const imageContainer = document.createElement('div')
        imageContainer.classList.add('image-conatiner')
        const imageElement = document.createElement('img')
        imageElement.setAttribute('src',imageObject.url)
        imageContainer.append(imageElement)
        imageSection.append(imageContainer)
      })
    }
    catch(error){
        console.error(error)
    }
}


submitIcon.addEventListener('click', getImages)