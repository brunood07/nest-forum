import { Either, left, right } from '@/core/either'
import { QuestionRepository } from '../repositories/questions-repository'
import { NotAllowedError } from '@/core/errors/not-allowed-error'
import { ResourceNotFoundError } from '@/core/errors/resource-not-found'
import { Injectable } from '@nestjs/common'

interface DeleteQuestionUseCaseRequest {
  authorId: string
  questionId: string
}

type DeleteQuestionUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  null
>

@Injectable()
export class DeleteQuestionUseCase {
  constructor(private questionsRepository: QuestionRepository) {}

  async execute(
    data: DeleteQuestionUseCaseRequest,
  ): Promise<DeleteQuestionUseCaseResponse> {
    const { questionId, authorId } = data

    const question = await this.questionsRepository.findById(questionId)

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== question.authorId.toString()) {
      return left(new NotAllowedError())
    }

    await this.questionsRepository.delete(question)

    return right(null)
  }
}
