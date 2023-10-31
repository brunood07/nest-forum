import { Either, left, right } from '@/core/either'
import { Question } from '../../enterprise/entities/question'
import { AnswersRepository } from '../repositories/answers-repository'
import { QuestionRepository } from '../repositories/questions-repository'
import { NotAllowedError } from '@/core/errors/not-allowed-error'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found'
import { Injectable } from '@nestjs/common'

interface ChooseQuestionBestAnswerUseCaseRequest {
  answerId: string
  authorId: string
}
type ChooseQuestionBestAnswerUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {
    question: Question
  }
>

@Injectable()
export class ChooseQuestionBestAnswer {
  constructor(
    private answerRepository: AnswersRepository,
    private questionsRepository: QuestionRepository,
  ) {}

  async execute(
    data: ChooseQuestionBestAnswerUseCaseRequest,
  ): Promise<ChooseQuestionBestAnswerUseCaseResponse> {
    const { answerId, authorId } = data

    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFoundError())
    }

    const question = await this.questionsRepository.findById(
      answer.questionId.toString(),
    )

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== question.authorId.toString()) {
      return left(new NotAllowedError())
    }

    question.bestAnswerId = answer.id

    await this.questionsRepository.save(question)

    return right({ question })
  }
}
