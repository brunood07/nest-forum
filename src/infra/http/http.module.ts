import { Module } from '@nestjs/common'
import { AuthenticateController } from './controllers/authenticate.controller'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateQuestionController } from './controllers/create-question.controller'
import { FetchRecentQuestionsController } from './controllers/fetch-recent-question.controller'
import { DatabaseModule } from '../database/database.module'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/fetch-recent-questions'
import { AuthenticateStudentUseCase } from '@/domain/forum/application/use-cases/authenticate-student'
import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/register-student'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { GetQuestionBySlugController } from './controllers/get-question-by-slug.controller'
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/get-question-by-slug'
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/edit-question'
import { EditQuestionController } from './controllers/edit-question-controller'
import { DeleteQuestionController } from './controllers/delete-question.controller'
import { DeleteQuestionUseCase } from '@/domain/forum/application/use-cases/delete-question'
import { AnswerQuestionUseCase } from '@/domain/forum/application/use-cases/answer-question'
import { AnswerQuestionController } from './controllers/answer-question.controller'
import { EditAnswerController } from './controllers/edit-answer.controller'
import { EditAnswerUseCase } from '@/domain/forum/application/use-cases/edit-answer'
import { DeleteAnswerController } from './controllers/delete-answer.controller'
import { DeleteAnswerUseCase } from '@/domain/forum/application/use-cases/delete-answer'
import { FetchQuestionAnswers as FetchQuestionAnswersUseCase } from '@/domain/forum/application/use-cases/fetch-question-answers'
import { FetchQuestionAnswersController } from './controllers/fetch-question-answers.controller'
import { ChooseQuestionBestAnswer as ChooseQuestionBestAnswerUseCase } from '@/domain/forum/application/use-cases/choose-question-best-answer'
import { ChooseQuestionBestAnswerController } from './controllers/choose-question-best-answer.controller'
import { CommentOnQuestionController } from './controllers/comment-on-question.controller'
import { CommentOnQuestionUseCase } from '@/domain/forum/application/use-cases/comment-on-question'
import { DeleteQuestionCommentUseCase } from '@/domain/forum/application/use-cases/delete-question-comment'
import { DeleteQuestionCommentController } from './controllers/delete-question-comment.controller'
import { CommentOnAnswerUseCase } from '@/domain/forum/application/use-cases/comment-on-answer'
import { CommentOnAnswerController } from './controllers/comment-on-answer.controller'
import { DeleteAnswerCommentUseCase } from '@/domain/forum/application/use-cases/delete-answer-comment'
import { DeleteAnswerCommentController } from './controllers/delete-answer-comment.controller'
import { FetchQuestionCommentsUseCase } from '@/domain/forum/application/use-cases/fetch-question-comments'
import { FetchQuestionCommentsController } from './controllers/fetch-question-comments.controller'
import { FetchAnswerCommentsUseCase } from '@/domain/forum/application/use-cases/fetch-answer-comments'
import { FetchAnswerCommentsController } from './controllers/fetch-answer-comments.controller'

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    AnswerQuestionController,
    AuthenticateController,
    CommentOnAnswerController,
    CommentOnQuestionController,
    CreateAccountController,
    CreateQuestionController,
    ChooseQuestionBestAnswerController,
    DeleteAnswerController,
    DeleteAnswerCommentController,
    DeleteQuestionCommentController,
    DeleteQuestionController,
    EditAnswerController,
    EditQuestionController,
    FetchAnswerCommentsController,
    FetchQuestionAnswersController,
    FetchQuestionCommentsController,
    FetchRecentQuestionsController,
    GetQuestionBySlugController,
  ],
  providers: [
    AnswerQuestionUseCase,
    AuthenticateStudentUseCase,
    ChooseQuestionBestAnswerUseCase,
    CommentOnAnswerUseCase,
    CommentOnQuestionUseCase,
    CreateQuestionUseCase,
    DeleteAnswerUseCase,
    DeleteAnswerCommentUseCase,
    DeleteQuestionCommentUseCase,
    DeleteQuestionUseCase,
    EditAnswerUseCase,
    EditQuestionUseCase,
    FetchAnswerCommentsUseCase,
    FetchQuestionAnswersUseCase,
    FetchQuestionCommentsUseCase,
    FetchRecentQuestionsUseCase,
    GetQuestionBySlugUseCase,
    RegisterStudentUseCase,
  ],
})
export class HttpModule {}
