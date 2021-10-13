// axios
import request from '@/utils/request'

export function getNameList(lastName, gender, nameSource, minStrokeCount, maxStrokeCount, allowGeneral) {
  // &minStrokeCount=${minStrokeCount}&maxStrokeCount=${maxStrokeCount}&allowGeneral=${allowGeneral}
  return request({
    url: `/rest/namer/list?lastName=${lastName}&gender=${gender}&nameSource=${nameSource}`,
    method: 'get'
  })
}

export function getNameDetail(checkName) {
  // &minStrokeCount=${minStrokeCount}&maxStrokeCount=${maxStrokeCount}&allowGeneral=${allowGeneral}
  return request({
    url: `/rest/namer/detail?checkName=${checkName}`,
    method: 'get'
  })
}
