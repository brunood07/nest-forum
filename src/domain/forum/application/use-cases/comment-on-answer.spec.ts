import { InMemoryAnswerCommentsRepository } from 'test/repositories/in-memory-answer-comments-repository'
import { CommentOnAnswerUseCase } from './comment-on-answer'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answers-repository'
import { makeAnswer } from 'test/factories/make-answer'
import { InMemoryAnswerAttachmentsRepository } from 'test/repositories/in-memory-answer-attachments-repository'

let answerCommentsRepository: InMemoryAnswerCommentsRepository
let answerRepository: InMemoryAnswersRepository
let sut: CommentOnAnswerUseCase

describe('Comment on answer', () => {
  beforeAll(() => {
    answerCommentsRepository = new InMemoryAnswerCommentsRepository()
    answerRepository = new InMemoryAnswersRepository(
      new InMemoryAnswerAttachmentsRepository(),
    )
    sut = new CommentOnAnswerUseCase(answerRepository, answerCommentsRepository)
  })

  it('should be able to comment on answer', async () => {
    const answer = makeAnswer()
    await answerRepository.create(answer)

    await sut.execute({
      answerId: answer.id.toString(),
      authorId: answer.authorId.toString(),
      content: 'Comentário teste',
    })

    expect(answerCommentsRepository.items[0].content).toEqual(
      'Comentário teste',
    )
  })
})
