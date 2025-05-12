import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { PatientService } from "./patient.service";
import { PatientController } from "./patient.controller";
import { Patient } from "./entities/patient.entity";
import { AnalysisModule } from "../../core/analysis/analysis.module";
import { MailModule } from "../../core/mail/mail.module";
import { SocketGateway } from "../../core/gateway/socket-gateway";

@Module({
  imports: [SequelizeModule.forFeature([Patient]), AnalysisModule, MailModule],
  controllers: [PatientController],
  providers: [PatientService, SocketGateway],
  exports: [PatientService, SequelizeModule]
})
export class PatientModule {
}
