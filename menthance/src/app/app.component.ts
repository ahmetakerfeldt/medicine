import {Component, OnDestroy, OnInit} from '@angular/core';
import {SocketService} from "../services/socket.service";
import {ToastrService} from "ngx-toastr";
import {AnalyzedPatient} from "./patient";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnDestroy, OnInit {
  constructor(private socketService: SocketService, private alert: ToastrService) {}

  ngOnInit() {
    this.listenSocket()
  }

  listenSocket() {
    this.socketService.on('patientCreated', (data: AnalyzedPatient)=> {
      this.alert.info(`A new patient was analyzed. => ${data.firstName} ${data.lastName}`, 'Info')
    })
  }

  ngOnDestroy() {
    this.socketService.disconnect()
  }
}
