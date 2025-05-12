import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";

@Injectable()
export class MailService {
  constructor(@Inject("MAIL_QUEUE") private readonly client: ClientProxy) {
  }

  async queueMails(emails: string[], subject: string, body: string) {
    for (const email of emails) {
      this.client.emit("mail.send", { email, subject, body });
    }
  }
}
