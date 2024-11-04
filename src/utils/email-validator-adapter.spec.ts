import { EmailValidatorAdapter } from './email-validator'

describe('EmailValidator', () => {
  test('Should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()

    const isValid = sut.isValid('invalid_meail@mail.com')

    expect(isValid).toBe(false)
  })
})
