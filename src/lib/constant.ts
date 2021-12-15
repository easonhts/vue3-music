// 响应错误码
export enum ERROR_CODE {
  NOT_LOGIN = 999,
  FORCE_LOGIN = 998
}

export const SUCCESS_CODE = 200

// 歌手分类
export const SINGER_TYPE = [
  { label: '全部', value: '-1'},
  { label: '男歌手', value: '1' },
  { label: '女歌手', value: '2' },
  { label: '乐队', value: '3' }
]

// 歌手地区
export const SINGER_AREA = [
  { label: '全部', value: '-1' },
  { label: '华语', value: '7' },
  { label: '美国', value: '96' },
  { label: '日本', value: '8' },
  { label: '韩国', value: '16' },
  { label: '其他', value: '0' }
]

export const ALPHA_TYPE = [
  { label: '热门', value: '-1' },
  { label: 'A', value: 'a' },
  { label: 'B', value: 'b' },
  { label: 'C', value: 'c' },
  { label: 'D', value: 'd' },
  { label: 'E', value: 'e' },
  { label: 'F', value: 'f' },
  { label: 'G', value: 'g' },
  { label: 'H', value: 'h' },
  { label: 'I', value: 'i' },
  { label: 'J', value: 'j' },
  { label: 'K', value: 'k' },
  { label: 'L', value: 'l' },
  { label: 'M', value: 'm' },
  { label: 'N', value: 'n' },
  { label: 'O', value: 'o' },
  { label: 'P', value: 'p' },
  { label: 'Q', value: 'q' },
  { label: 'R', value: 'r' },
  { label: 'S', value: 's' },
  { label: 'T', value: 't' },
  { label: 'U', value: 'u' },
  { label: 'V', value: 'v' },
  { label: 'W', value: 'w' },
  { label: 'X', value: 'x' },
  { label: 'Y', value: 'Y' },
  { label: 'Z', value: 'z' }
]

// export const HOT = 'hot'

// export const HOT_SINGER_MAP = { label: '热门', value: HOT }
