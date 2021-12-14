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
        type Data<T extends Record<string, any>> = Result<T> & {
          code: number,
          more: boolean
        }
      }
    }
  }
}
