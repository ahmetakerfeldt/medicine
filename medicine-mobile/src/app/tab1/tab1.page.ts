import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {mockPatients} from "../../../mock/mock-patients";
import {HttpService} from "../../services/http.service";
import {Patient} from "../patient";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  mockPatients = mockPatients;
  loading = false

  constructor(private http: HttpService, private router: Router, private alert: ToastrService) {}

  sendToAnalysis(patient: Patient) {
    this.loading = true
    this.http.post('/patients/analysis', {email: patient.email, data: patient.hl7}).then(async ()=> {
      this.loading = false
      await this.router.navigate(['/tabs/tab2'])
    }).catch((err)=> {
      this.alert.error(err, 'Error')
      this.loading = false
    })
  }
}
