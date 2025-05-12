// src/mail/mail.module.ts
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MailService } from './mail.service';
import { MailerService } from './mailer.service';
import { MailController } from './mail.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MAIL_QUEUE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://admin:admin@localhost:5672'],
          queue: 'mail-queue',
          queueOptions: { durable: true },
        },
      },
    ]),
  ],
  providers: [MailService, MailerService],
  controllers: [MailController],
  exports: [MailService],
})
export class MailModule {}
