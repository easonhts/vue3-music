declare namespace Music {
  namespace Utils {
    namespace Request {
      namespace Pagination {
        interface Params {
          limit: number
          offset?: number
        }

        interface Result<T> {
          list: T[]
          hasNext: boolean
        }

        interface ResultWithTotalCount<T> extends Result<T> {
          totalCount: number
        }
      }
    }
  }
}
