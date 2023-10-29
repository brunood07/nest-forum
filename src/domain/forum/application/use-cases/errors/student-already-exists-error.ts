import { UseCaseError } from '@/core/errors/use-case-error'

export class StudentAlreadyExistsErrors extends Error implements UseCaseError {
  constructor(identifier: string) {
    super(`Student with same ${identifier} already exists`)
  }
}
