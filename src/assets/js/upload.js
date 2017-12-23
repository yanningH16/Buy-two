import axios from 'axios'
import md5 from 'md5'

// 获取上传图片参数
export const uploadPromise = new Promise((resolve, reject) => {
  axios.post('/api/config/sts/getStsParam', {}).then((response) => {
    resolve(response)
  }).catch((error) => {
    console.log(error)
    reject(error)
  })
})

// 上传图片
export function uploadFile (res, file) {
  let name = file.lastModified + md5(file.name) + file.name
  const config = {
    endpoint: 'http://bj.bcebos.com', // 传入Bucket所在区域域名
    credentials: {
      ak: res.accessKeyId, // 您的AccessKey
      sk: res.secretAccessKey // 您的SecretAccessKey
    },
    sessionToken: res.sessionToken
      // STS服务器下发的sessionToken
  }

  /* global baidubce */
  /* eslint no-undef: "error" */
  let client = new baidubce.sdk.BosClient(config)
  return new Promise((resolve, reject) => {
    client.putObjectFromBlob('scalpsd', name, file).then((response) => {
      var url = client.generatePresignedUrl('scalp', name)
      var urlForm = url.split('?')[0]
      console.log(urlForm)
      resolve(urlForm)
    }).catch((error) => {
      reject(error)
    })
  })
}

// 获取上传图片大小
export function getImgSize (file) {
  return new Promise((resolve, reject) => {
    var reader = new FileReader()
    reader.onload = (theFile) => {
      var image = new Image()
      image.onload = () => {
        resolve(image)
      }
      image.src = theFile.target.result
    }
    reader.readAsDataURL(file)
  })
}
