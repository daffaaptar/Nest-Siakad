import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { MahasiswaModule } from './mahasiswa/mahasiswa.module';

@Module({
  imports: [HelloModule, MahasiswaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
