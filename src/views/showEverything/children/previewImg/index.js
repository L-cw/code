import Vue from 'vue'
import previewImg from './previewImg'
const PreviewImg = Vue.extend(previewImg)
export default function(options) {
  const instance = new PreviewImg({
    data: options
  })

  instance.$mount()
  document.body.appendChild(instance.$el)
}
