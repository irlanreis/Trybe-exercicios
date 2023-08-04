import HttpException from "./HttpException";

export default class BadRequestError extends HttpException {
  private static status = 400;

  constructor(message?: string) {
    super(BadRequestError.status, message || 'Bad Request');
  }
}