import { Module } from '@nestjs/common';
import { DataBaseModule } from './infra/database/database.module';
import { httpModule } from './infra/http/http.module';

@Module({
  imports: [DataBaseModule, httpModule],
})
export class AppModule {}
