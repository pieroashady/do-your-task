export default class ResponseBuilder {
  error: boolean
  message: string
  data: any

  public withError(error: boolean) {
    return (this.error = error)
  }

  public withMessage(message: string) {
    return (this.message = message)
  }

  /**
   *
   * @param data object or array of object
   */
  public withData(data) {
    return (this.data = data)
  }

  public showResponse() {
    if (!this.data) {
      return {
        error: this.error,
        message: this.message,
      }
    }

    return {
      error: this.error,
      message: this.message,
      data: this.data,
    }
  }
}
