import { Module } from "@nestjs/common";
import { AnalysisService } from "./analysis.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  providers: [AnalysisService],
  imports: [HttpModule],
  exports: [AnalysisService],
})
export class AnalysisModule {}
