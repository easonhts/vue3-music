declare namespace Music {
  namespace Utils {
    namespace Response {
      interface Music<T = any> {
        success: boolean
        code: number
        data: T
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
