import {Component, OnInit, TemplateRef} from '@angular/core';
import {ToastService} from "../services/toast.service";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToastComponent {

  constructor(public toastService: ToastService) { }
  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
}
