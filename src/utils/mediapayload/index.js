/**
 *  @module processFileUpload
 */
import processFileUpload from 'utils/processfileupload'

/**
 *  @name constructFormData
 *  @param  {Array} files
 *  @return {FormData}
 */
const constructFormData = files => {
  const formData = new FormData()

  for (let i = 0, len = files.length; i < len; i++) {
    formData.append('attachment', files[i])
  }

  return formData
}

/**
 *  @name constructThumbnails
 *  @description Will take in an array of files, however will only return the first thumbnail.
 *  @param  {Array} files
 *  @return {Array}
 */
const constructThumbnails = files => {
  return new Promise((resolve, reject) => {
    if (!files.length) {
      const errorMsg = 'No files'
      return reject(errorMsg)
    }

    // Create a new file reader for thumbnail previews.
    const fileReader = new FileReader()

    // When the file reader has loaded.
    fileReader.onload = ({target}) => {
      return resolve([target.result])
    }

    fileReader.readAsDataURL(files[0])
  })
}

/**
 *  @name mediaPayload
 *  @param {Object} files [Files object from a file uploader input]
 *  @param {Boolean} needThumbnail [boolean: true]
 *  @return {Promise}
 */
const mediaPayload = (fileUploadObj, allowedTypes, needThumbnail = true) => {
  return processFileUpload(fileUploadObj, allowedTypes)
  .then(files => {
    // Create a new formdata object for posting to server
    const formData = constructFormData(files)

    if (needThumbnail) {
      return constructThumbnails(files)
      .then(thumbnails => {
        return Promise.resolve({
          formData,
          thumbnails
        })
      })
      .catch(error => {
        return Promise.reject(error)
      })
    } else {
      return Promise.resolve({formData})
    }
  })
  .catch(error => {
    return Promise.reject(error)
  })
}

/**
 *  @module mediaPayload
 */
export default mediaPayload
