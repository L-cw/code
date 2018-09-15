const toString = Object.prototype.toString

const TXT_MAP = ['txt', 'js', 'css', 'html', 'htm', 'java', 'json']
const IMG_MAP = ['png', 'jpg', 'gif']
const VIDEO_MAP = ['webm', 'mp4', 'ogg']
const PDF_MAP = ['pdf']
const AUDIO_MAP = ['mp3', 'pgg', 'wav']

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

    const ext = this.getFileExt(this.file)
    if (TXT_MAP.includes(ext) || !this.file.type) {
      data.type = 'txt'
      fileReader.readAsText(this.file)
    } else if (IMG_MAP.includes(ext)) {
      data.type = 'img'
      fileReader.readAsDataURL(this.file)
    } else if (VIDEO_MAP.includes(ext)) {
      data.type = 'video'
      this.emit('loadstart', data, null)
      const videoURL = URL.createObjectURL(this.file)
      data.result = videoURL
      this.emit('progress', data, {loaded: 1, total: 1})
      this.emit('load', data, {loaded: 1, total: 1})
    } else if (PDF_MAP === ext) {
      data.type = 'pdf'
      fileReader.readAsDataURL(this.file)
    } else if (AUDIO_MAP.includes(ext)) {
      data.type = 'audio'
      this.emit('loadstart', data, null)
      const videoURL = URL.createObjectURL(this.file)
      data.result = videoURL
      this.emit('progress', data, {loaded: 1, total: 1})
      this.emit('load', data, {loaded: 1, total: 1})
    } else {
      data.type = 'none'
      this.emit('loadstart', data, null)
      this.emit('progress', data, {loaded: 1, total: 1})
      this.emit('load', data, {loaded: 1, total: 1})
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
