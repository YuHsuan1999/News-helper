import httpStatus from 'http-status';

import ExtendableError from './ExtendableError';
/**
 * Class representing an API error.
 * @extends ExtendableError
 */
class APIError extends ExtendableError {
  /**
   * Creates an API error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   * @param {boolean} isPublic - Whether the message should be visible to user or not.
   */
  constructor(message, status = httpStatus.INTERNAL_SERVER_ERROR, isPublic = false, code) {
    super(message, status, isPublic, code);
    this.name = 'APIError';
  }
}

export default APIError;
