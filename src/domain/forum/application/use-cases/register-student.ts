import { Either, left, right } from '@/core/either'
import { Student } from '../../enterprise/entities/student'
import { Injectable } from '@nestjs/common'
import { StudentsRepository } from '../repositories/students-repository'
import { HasherGenerator } from '../cryptography/hasher-generator'
import { StudentAlreadyExistsErrors } from './errors/student-already-exists-error'

interface RegisterStudentUseCaseRequest {
  name: string
  email: string
  password: string
}

type RegisterStudentUseCaseResponse = Either<
  StudentAlreadyExistsErrors,
  {
    student: Student
  }
>

@Injectable()
export class RegisterStudentUseCase {
  constructor(
    private studentsRepository: StudentsRepository,
    private hashGenerator: HasherGenerator,
  ) {}

  async execute(
    data: RegisterStudentUseCaseRequest,
  ): Promise<RegisterStudentUseCaseResponse> {
    const { email, name, password } = data

    const studentWithSameEmail =
      await this.studentsRepository.findByEmail(email)

    if (studentWithSameEmail) {
      return left(new StudentAlreadyExistsErrors(email))
    }

    const hashedPassword = await this.hashGenerator.hash(password)

    const student = Student.create({
      name,
      email,
      password: hashedPassword,
    })

    await this.studentsRepository.create(student)

    return right({
      student,
    })
  }
}
