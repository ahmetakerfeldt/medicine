import { BadRequestException, Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";
import * as base64 from "base-64";

@Injectable()
export class AnalysisService {
  constructor(private readonly http: HttpService) {
  }

  async AIAnalysis(hl7Message: string) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;
    const headers = { "Content-Type": "application/json" };

    const base64Message = base64.encode(hl7Message);
    const data = {
      contents: [
        {
          parts: [
            {
              text: `
              Taking into account the patient's PID information;
              analyze all OBX segments in the HL7 v2 message.
              For each OBX, extract the following:
                Test name
                Value
                Unit
                Reference range(The reference range must be available in the OBX tab. If it does not exist, the general range should be taken as basis.)
                Status (normal, high, low)
                
                Then, provide a medical interpretation of the results.
                List potential disease risks
                Highlight abnormal values that require attention
                The output must be clear and structured.
                Avoid using expressions like “I found”, “I did”, or “Here are”.
                Just present the data and analysis directly.
                If the patient's values are not normal and you think it would be worthwhile for him/her to see a doctor
                based on the potential risks of disease, recommend that he/she visit one or more specific departments.
                Give the output in HTML format. apply styling to the table and texts.
              `
            },
            {
              inline_data: {
                mime_type: "text/plain",
                data: base64Message
              }
            }
          ]
        }
      ]
    };

    try {
      const response = await firstValueFrom(this.http.post(url, data, { headers }));
      const candidates = response.data?.candidates;
      return candidates?.[0]?.content?.parts?.[0]?.text ?? "No result found.";
    } catch (err) {
      throw new BadRequestException("Gemini API error.");
    }
  }
}
