import { Component, Input, NgModule } from '@angular/core';
import { DxPopupModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input()
  isPopupVisible: boolean;
  @Input()
  title: string;

  popupTitle: string;

  onShown() {
    this.popupTitle = this.title;
  }
}

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    DxPopupModule
  ],
  exports: [ModalComponent]
})

export class ModalModule { }
