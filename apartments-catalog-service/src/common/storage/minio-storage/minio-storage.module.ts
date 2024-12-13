import { Module, OnModuleInit } from '@nestjs/common';
import { MinioStorageService } from './minio-storage.service';
import { ConfigModule } from '../../../common/config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [MinioStorageService],
  exports: [MinioStorageService],
})
export class MinioStorageModule implements OnModuleInit {
  constructor(private readonly minioStorageService: MinioStorageService) {}

  async onModuleInit() {
    await this.minioStorageService.createBucketIfNotExists();
  }
}
