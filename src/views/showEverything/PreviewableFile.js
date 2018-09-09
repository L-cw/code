const toString = Object.prototype.toString

/* eslint-disable */
const TXT_MIME_MAP = [
  'text/plain',
  'text/x-php',
  'text/html',
  'text/html',
  'text/javascript',
  'text/css',
  'text/rtf',
  'text/rtfd',
  'text/x-python',
  'text/x-java-source',
  'text/x-ruby',
  'text/x-shellscript',
  'text/x-perl',
  'text/x-sql',
  'text/javascript',
  'application/javascript',
  'application/x-javascript',
  'application/json']

const IMG_MIME_MAP = [
  'image/x-ms-bmp',
  'image/jpeg',
  'image/jpeg',
  'image/gif',
  'image/png',
  'image/tiff',
  'image/tiff',
  'image/x-targa',
  'image/vnd.adobe.photosho']

const VIDEO_MIME_MAP = [
  'video/x-msvideo',
  'video/x-dv',
  'video/mp4',
  'video/mpeg',
  'video/mpeg',
  'video/quicktime',
  'video/x-ms-wmv',
  'video/x-flv',
  'video/x-matroska']
/* eslint-enable */
const pdfMime = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'

class PreviewableFile {
  constructor(file) {
    if (toString.call(file) !== '[object File]') {
      throw new TypeError('arguments must be a file')
    }

    this.file = file
    this.handers = []
  }

  on(eventName, cb) {
    if (typeof cb !== 'function') {
      throw new TypeError('callback must be a function')
    }

    this.handers[eventName] && this.handers[eventName].push(cb)
    this.handers[eventName] || (this.handers[eventName] = [cb])
  }

  emit(eventNm, ...args) {
    this.handers[eventNm] &&
    this.handers[eventNm].forEach(cb => {
      /* eslint-disable */
      Promise.resolve().then(_ => cb(...args))
      /* eslint-enable */
    })
  }

  generate() {
    console.log('file:', this.file)
    const fileReader = new FileReader()
    const data = {
      type: '',
      result: '',
      ext: this.getFileExt(this.file),
      name: this.file.name
    }

    fileReader.onloadstart = e => {
      data.result = fileReader.result
      this.on('abort', _ => fileReader.abort())
      this.emit('loadstart', data, e)
    }
    fileReader.onprogress = e => {
      data.result = fileReader.result
      this.emit('progress', data, e)
    }
    fileReader.onload = e => {
      data.result = fileReader.result
      this.emit('load', data, e)
    }

    if (TXT_MIME_MAP.includes(this.file.type)) {
      data.type = 'txt'
      fileReader.readAsText(this.file)
    } else if (IMG_MIME_MAP.includes(this.file.type)) {
      data.type = 'img'
      fileReader.readAsDataURL(this.file)
    } else if (IMG_MIME_MAP.includes(this.file.type)) {
      data.type = 'video'
    } else if (pdfMime === this.file.type) {
      data.type = 'pdf'
      fileReader.readAsDataURL(this.file)
      // this.emit('loadstart', data, null)
      // const pdfURL = URL.createObjectURL(this.file)
      // data.result = pdfURL
      // this.emit('progress', data, null)
      // this.emit('load', data, null)
    }
  }

  getFileExt(file) {
    return file.name
      .split('.')
      .pop()
      .toLowerCase()
  }
}

export default PreviewableFile
