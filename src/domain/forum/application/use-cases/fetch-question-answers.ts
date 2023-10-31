import { Either, right } from '@/core/either'
import { Answer } from '../../enterprise/entities/answer'
import { AnswersRepository } from '../repositories/answers-repository'
import { Injectable } from '@nestjs/common'

interface FetchQuestionAnswersUseCaseRequest {
  page: number
  questionId: string
}

type FetchQuestionAnswersUseCaseResponse = Either<
  null,
  {
    answers: Answer[]
  }
>

@Injectable()
export class FetchQuestionAnswers {
  constructor(private answerRepository: AnswersRepository) {}

  async execute(
    data: FetchQuestionAnswersUseCaseRequest,
  ): Promise<FetchQuestionAnswersUseCaseResponse> {
    const { page, questionId } = data
    const answers = await this.answerRepository.findManyByQuestionId(
      questionId,
      { page },
    )

    return right({
      answers,
    })
  }
}
