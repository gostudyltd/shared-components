import { buildImageSrcByProps } from './CloudinaryImage'

export const getSrc = (path: string, width: number, height: number) => {
  return buildImageSrcByProps({ path, customParams: `c_fill,h_${height},w_${width}` })
}

export const getSrcSet = (path: string, width: number, height: number) => {
  const result: string[] = []

  for (let scale = 1; scale <= 4; scale += 1) {
    const src = getSrc(path, width * scale, height * scale)
    const srcset = `${src} ${scale}x`
    result.push(srcset)
  }

  return result.join(',')
}
