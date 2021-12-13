declare namespace Music {
  namespace Api {
    namespace Personalized {
      namespace Get {
        type Req = {
          limit?: number
        }

        interface Playlist {
          id: number
          type: number
          name: string
          copywriter: string
          picUrl: string
          canDislike: boolean
          trackNumberUpdateTime: number
          playCount: number
          trackCount: number
          highQuality: boolean
          alg: string
        }

        type Res = Playlist[]
      }
    }
  }
}
