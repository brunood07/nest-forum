import { Either, right } from '@/core/either'
import { Question } from '../../enterprise/entities/question'
import { QuestionRepository } from '../repositories/questions-repository'
import { Injectable } from '@nestjs/common'

interface GetQuestionBySlugUseCaseRequest {
  slug: string
}

type GetQuestionBySlugUseCaseResponse = Either<
  null,
  {
    question: Question | null
  }
>

@Injectable()
export class GetQuestionBySlugUseCase {
  constructor(private questionsRepository: QuestionRepository) {}

  async execute(
    data: GetQuestionBySlugUseCaseRequest,
  ): Promise<GetQuestionBySlugUseCaseResponse> {
    const { slug } = data

    const question = await this.questionsRepository.findBySlug(slug)

    return right({
      question,
    })
  }
}
