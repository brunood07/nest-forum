import { hash, compare } from 'bcryptjs'
import { HasherGenerator } from '@/domain/forum/application/cryptography/hasher-generator'
import { HashComparer } from '@/domain/forum/application/cryptography/hash-comparer'
import { Injectable } from '@nestjs/common'

@Injectable()
export class BcryptHasher implements HashComparer, HasherGenerator {
  private HASH_SALT_LENGTH = 8

  async compare(plain: string, hash: string): Promise<boolean> {
    return compare(plain, hash)
  }

  async hash(plain: string): Promise<string> {
    return hash(plain, this.HASH_SALT_LENGTH)
  }
}
