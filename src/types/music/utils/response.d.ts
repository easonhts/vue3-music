declare namespace Music {
  namespace Utils {
    namespace Response {
      type Result<T> = {
        [P in keyof T]: T[P]
      }
      type Music<T extends Record<string, any>> = Result<T> & {
        code: number
      }

      namespace Pagination {
        interface Data<T> {
          pageIndex: number
          pageSize: number
          hasNext: boolean
          totalCount: number
          list: T[]
        }
      }
    }
  }
}
