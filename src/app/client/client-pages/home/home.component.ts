import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { NotifyCService, NotifyMessageDirection, NotifyMessageType, NotifyPredefinedPosition } from '../../../services/common/notify-c.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private _notifyS: NotifyCService
  )
  {

  }

  onShown() {
    //this.loadingVisible = false;
    //setTimeout(() => {
    //  this.loadingVisible = false;
    //}, 3000);
  }
  onHidden() {
    
  }
  loadingPosition: any = { of: '#employee' };
  loadingVisible = false;
  showLoadingPanel() {
    this.loadingVisible = true;
  }

  closeLoadingPanel() {
    this.loadingVisible = false;
  }






  showNotify() {
    this._notifyS.notifyShow("info notfy element");
  }
}
