import { BadRequestException, Injectable } from "@nestjs/common";
import { CreatePatientDto } from "./dto/create-patient.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Patient } from "./entities/patient.entity";
import { MailService } from "../../core/mail/mail.service";
import { SocketGateway } from "../../core/gateway/socket-gateway";

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient)
    private readonly patientModel: typeof Patient,
    private mailService: MailService,
    private readonly socketGateway: SocketGateway,
  ) {
  }

  async createPatient(patient: CreatePatientDto) {
    const created = await this.patientModel.create(patient);
    this.socketGateway.emit('patientCreated', created);
  }

  async getPatients() {
    return this.patientModel.findAll();
  }

  async sendMail(emails: string[], id: string) {
    this.patientModel.findByPk(id).then(async (patient) => {
      await this.mailService.queueMails(emails, `${patient.firstName} ${patient.lastName} Medicine Information`, patient.observationResult)
    }).catch((err) => {
      throw new BadRequestException(err);
    })
  }
}
