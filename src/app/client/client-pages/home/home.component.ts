import { Component, ViewChild } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { LoadPanelComponent } from '../../../mylib/components/load-panel/load-panel.component';
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







  @ViewChild('loadPanel1') private loadPanel: LoadPanelComponent | undefined;
  showLoadingPanel() {
    if (this.loadPanel != undefined) {
      this.loadPanel.loadingVisible = true;
      this.loadPanel.loadingPositionElementId = '#employee';
    }
  }

  closeLoadingPanel() {
    if (this.loadPanel != undefined)
      this.loadPanel.loadingVisible = false;
  }
  showNotify() {
    this._notifyS.notifyShow("info notfy element");
  }
}
