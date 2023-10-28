import { NotificationsRepository } from '@/domain/notification/application/repositories/notifications-repository'
import { Notification } from '@/domain/notification/enterprise/entities/notification'

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public items: Notification[] = []

  async create(notification: Notification): Promise<void> {
    this.items.push(notification)
  }

  // async findBySlug(slug: string): Promise<Question | null> {
  //   const question = this.items.find((item) => item.slug.value === slug)

  //   if (!question) {
  //     return null
  //   }

  //   return question
  // }

  async findById(id: string): Promise<Notification | null> {
    const notification = this.items.find((item) => item.id.toString() === id)

    if (!notification) {
      return null
    }

    return notification
  }

  async save(notification: Notification): Promise<void> {
    const itemIndex = this.items.findIndex(
      (item) => item.id === notification.id,
    )
    this.items[itemIndex] = notification
  }

  // async findManyRecent(params: PaginationParams): Promise<Question[]> {
  //   const { page } = params
  //   const questions = this.items
  //     .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
  //     .slice((page - 1) * 20, page * 20)

  //   return questions
  // }

  // async delete(question: Question): Promise<void> {
  //   const itemIndex = this.items.findIndex((item) => item.id === question.id)
  //   this.items.splice(itemIndex, 1)

  //   this.questionAttachmentsRepository.deleteManyByQuestionId(
  //     question.id.toString(),
  //   )
  // }
}
