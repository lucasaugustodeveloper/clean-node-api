import {
  HttpRequest,
  HttpResponse,
  Controller,
  EmailValidator
} from '../../protocols'

import {
  MissingParamError,
  InvalidParamError
} from '../../errors'
import { badRequest, serverError } from '../../helpers/http-helper'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator

  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    const { email, password, confirmPassword } = httpRequest.body

    try {
      const requiredFields = ['name', 'email', 'password', 'confirmPassword']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      if (password !== confirmPassword) {
        return badRequest(new InvalidParamError('confirmPassword'))
      }

      const isValidEmail = this.emailValidator.isValid(email)

      if (!isValidEmail) {
        return badRequest(new InvalidParamError('email'))
      }
    } catch (error) {
      return serverError()
    }
  }
}
