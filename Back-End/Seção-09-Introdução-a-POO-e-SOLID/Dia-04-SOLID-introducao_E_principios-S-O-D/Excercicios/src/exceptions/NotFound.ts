import HttpException from "./HttpException";

export default class NotFoundError extends HttpException {
  private static status = 404;

  constructor(message?: string) {
    super(NotFoundError.status, message || 'Not Found');
  }
};