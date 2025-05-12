import { BadRequestException, Body, Controller, Get, Param, Post } from "@nestjs/common";
import { normalizeToJSON } from "../../shared/utils/parser.util";
import { PatientService } from "./patient.service";
import { AnalysisService } from "../../core/analysis/analysis.service";
import { CreatePatientDto } from "./dto/create-patient.dto";

@Controller('patients')
export class PatientController {
  constructor(private patientService: PatientService, private analysis: AnalysisService) {
  }

  @Post('analysis')
  async patientAnalysis(@Body() body: {data: string, email: string}) {
    const patientSimpleInformation: CreatePatientDto = await normalizeToJSON(body.data)
    return this.analysis.AIAnalysis(body.data).then(async (result)=> {
      await this.patientService.createPatient({...patientSimpleInformation, email: body.email, observationResult: result})
    }).catch((err)=> {
      throw new BadRequestException(err)
    })
  }

  @Get('analysis')
  async getPatients() {
    return await this.patientService.getPatients()
  }

  @Post('send-email/:id')
  async sendMail(@Body('emails') emails: string[], @Param('id') id: string) {
    return this.patientService.sendMail(emails, id)
  }
}