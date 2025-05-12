import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailerService {
  private transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 587,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });

  async sendEmail(to: string, subject: string, body: string) {
    await this.transporter.sendMail({ from: process.env.SMTP_USER, to, subject, html: body });
  }
}
