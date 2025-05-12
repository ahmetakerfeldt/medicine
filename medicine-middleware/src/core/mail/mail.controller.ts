// src/mail/mail.controller.ts
import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { MailerService } from './mailer.service';

@Controller()
export class MailController {
  constructor(private readonly mailer: MailerService) {}

  @EventPattern('mail.send')
  async handleSendMail({ email, subject, body }: { email: string, subject: string, body: string }) {
    await this.mailer.sendEmail(email, subject, body)
    console.log(`Sent email to ${email}`)
  }
}
