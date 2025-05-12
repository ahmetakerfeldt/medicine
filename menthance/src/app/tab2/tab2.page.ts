import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {AnalyzedPatient} from "../patient";
import {FormControl} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";
import {Subject} from "rxjs";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page implements OnInit, OnDestroy {
  analyzedPatients?: AnalyzedPatient[]
  sendMailContainer: { [key: string]: boolean } = {};
  emails = new FormControl()

  destroy$ = new Subject<void>()

  constructor(private http: HttpService, private alert: ToastrService, private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activeRoute.url.pipe().subscribe(()=> {
      this.getAnalyzedPatients()
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  getAnalyzedPatients() {
    this.http.get('/patients/analysis').then((analyzedPatients) => {
      this.analyzedPatients = analyzedPatients
    }).catch((err) => {
      alert(err.error.message)
    })
  }

  openSendMailContainer(patient: AnalyzedPatient) {
    this.sendMailContainer = {}
    this.sendMailContainer[patient.id] = true
    this.emails.patchValue(`${patient.email}, `)
  }

  sendEmail(patient: AnalyzedPatient) {
    const emailString = this.emails.value as string
    const emails = emailString.split(', ')
    this.http.post(`/patients/send-email/${patient.id}`, {emails}).then(()=> {
      this.alert.success('The patient\'s analyzed information was sent to the emails you entered.', 'Success')
      this.sendMailContainer = {}
      this.emails.reset()
    }).catch((err)=> {
      this.alert.error(err, 'Error')
    })
  }
}
