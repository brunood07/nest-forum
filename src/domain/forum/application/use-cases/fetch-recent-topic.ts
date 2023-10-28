import { Either, right } from '@/core/either'
import { Question } from '../../enterprise/entities/question'
import { QuestionRepository } from '../repositories/questions-repository'

interface FetchRecentTopicsUseCaseRequest {
  page: number
}

type FetchRecentTopicsUseCaseResponse = Either<
  null,
  {
    questions: Question[]
  }
>

export class FetchRecentTopics {
  constructor(private questionRepository: QuestionRepository) {}

  async execute(
    data: FetchRecentTopicsUseCaseRequest,
  ): Promise<FetchRecentTopicsUseCaseResponse> {
    const { page } = data

    const questions = await this.questionRepository.findManyRecent({ page })

    return right({
      questions,
    })
  }
}
