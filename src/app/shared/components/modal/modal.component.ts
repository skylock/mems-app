import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { DxPopupModule } from 'devextreme-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  private isVisible;
  popupTitle: string;

  @Input()
  title: string;

  @Input()
  get visible() {
    return this.isVisible;
  }

  set visible(val) {
    this.isVisible = val;
    this.visibleChange.emit(this.isVisible);
  }

  @Output()
  visibleChange =  new EventEmitter<boolean>();

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
