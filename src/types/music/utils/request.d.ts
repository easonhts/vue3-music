declare namespace Music {
  namespace Utils {
    namespace Request {
      namespace Pagination {
        interface Params {
          pageIndex: number
          pageSize: number
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
