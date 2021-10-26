
enum status {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

class ServerError {
  public readonly message: string
  public readonly status: status

  constructor(message: string, status: status) {
    this.message = message
    this.status = status
  }
}

export default ServerError