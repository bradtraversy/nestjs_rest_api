import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from './items/schemas/item.schema';
import config from './config/keys';

@Module({
    imports: [ItemsModule, MongooseModule.forRoot(config.mongoURI),
  MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])
  ],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
