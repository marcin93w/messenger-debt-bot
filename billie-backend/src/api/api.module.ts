import { HttpModule, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ApiController } from './api.controller';
import { AuthMiddleware } from './auth/auth.middleware';
import { CqrsModule } from '@nestjs/cqrs';
import { SignInService } from '../users/sign-in.service';
import { GraphApiService } from '../users/graph-api.service';
import { DatabaseService } from '../common/database.service';
import { GetLedgerQuery } from '../queries/get-ledger.query';
import { GetUserLedgersQuery } from '../queries/get-user-ledgers.query';
import { GRAPH_API_SERVICE } from '../users/graph-api.service.interface';
import { GraphApiServiceStub } from '../users/graph-api.service.stub';
import { Environment } from '../common/environment';
import { ConfigService } from '../common/config.service';
import { FB_MESSENGER_SIGNATURE_SERVICE } from './auth/fb-messenger-signature.service.interface';
import { FbMessengerSignatureServiceStub } from './auth/fb-messenger-signature.service.stub';
import { FbMessengerSignatureService } from './auth/fb-messenger-signature.service';

@Module({
  imports: [CqrsModule, HttpModule],
  controllers: [ApiController],
  providers: [
    ConfigService,
    SignInService,
    DatabaseService,
    AuthMiddleware,
    GetLedgerQuery,
    GetUserLedgersQuery, {
      provide: GRAPH_API_SERVICE,
      useClass: Environment.isDevelopment ? GraphApiServiceStub : GraphApiService,
    }, {
      provide: FB_MESSENGER_SIGNATURE_SERVICE,
      useClass: Environment.isDevelopment ? FbMessengerSignatureServiceStub : FbMessengerSignatureService,
    }],
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
