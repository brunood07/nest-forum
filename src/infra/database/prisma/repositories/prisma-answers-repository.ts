import { PaginationParams } from '@/core/repositories/pagintaion-params'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { Answer } from '@/domain/forum/enterprise/entities/answer'
import { Injectable } from '@nestjs/common'
import { PrismaAnswerMapper } from '../mappers/prisma-answer-mapper'
import { PrismaService } from '../prisma.service'
import { PrismaQuestionMapper } from '../mappers/prisma-question-mapper'

@Injectable()
export class PrismaAnswersRepository implements AnswersRepository {
  constructor(private prisma: PrismaService) {}

  async create(answer: Answer): Promise<void> {
    const data = PrismaAnswerMapper.toPrisma(answer)
    await this.prisma.answer.create({
      data,
    })
  }

  async findById(id: string): Promise<Answer> {
    throw new Error('Method not implemented.')
    // const answer = await this.prisma.question.findUnique({
    //   where: {
    //     id,
    //   },
    // })
    // if (!answer) {
    //   return null
    // }
    // return PrismaAnswerMapper.toDomain(answer)
  }

  async findManyByQuestionId(
    questionId: string,
    params: PaginationParams,
  ): Promise<Answer[]> {
    throw new Error('Method not implemented.')
    // const questions = await this.prisma.question.findMany({
    //   where: {
    //     questionId,
    //   },
    //   orderBy: {
    //     createdAt: 'desc',
    //   },
    //   take: 20,
    //   skip: (params.page - 1) * 20,
    // })
    // if (!questions) {
    //   return []
    // }
    // return questions.map(PrismaQuestionMapper.toDomain)
  }

  async save(answer: Answer): Promise<void> {
    const data = PrismaAnswerMapper.toPrisma(answer)
    await this.prisma.question.update({
      where: {
        id: data.id,
      },
      data,
    })
  }

  async delete(answer: Answer): Promise<void> {
    const data = PrismaAnswerMapper.toPrisma(answer)
    await this.prisma.question.delete({
      where: {
        id: data.id,
      },
    })
  }
}
