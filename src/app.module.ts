import { Module } from '@nestjs/common';
import { ExampleModule } from './module/example/example.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './common/interceptor/response.interceptor';

@Module({
	imports: [ExampleModule],
	controllers: [],
	providers: [
		{
			provide: APP_INTERCEPTOR,
			useClass: ResponseInterceptor,
		},
	],
})
export class AppModule {}
