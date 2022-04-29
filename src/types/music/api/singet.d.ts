declare namespace Music {
  namespace Api {
    namespace Singer {
      namespace HotList {
        namespace Get {
          interface List {
            id: number
            name: string
            img1v1Url: string
          }
          type Res = List[]
        }
      }
      namespace List {
        namespace Get {
          type Req = {
            area?: string
            initial?: string
            type?: string
          }
        }
      }
    }
  }
}
