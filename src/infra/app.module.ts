import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { PrismaService } from './database/prisma/prisma.service'
import { AuthModule } from './auth/auth.module'
import { HttpModule } from './http/http.module'
import { envSchema } from './env/env'
import { EnvService } from './env/env.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    HttpModule,
  ],

  providers: [PrismaService, EnvService],
})
export class AppModule {}
