import { Component, OnInit, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import notify from 'devextreme/ui/notify';
import { LoadPanelComponent } from '../../../mylib/components/load-panel/load-panel.component';
import { NotifyCService, NotifyMessageDirection, NotifyMessageType, NotifyPredefinedPosition } from '../../../services/common/notify-c.service';
import { List_User, TestService } from '../../../services/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _notifyS: NotifyCService,
    private _testServis: TestService
  ) {
  }
  ngOnInit() {
    this.showLoadingPanel();
  }

  @ViewChild(DxDataGridComponent, { static: false }) dataGrid: DxDataGridComponent | undefined;
  orders: List_User[] = [];

  saleAmountHeaderFilter: any;

  async setDataGrid() {
    if (this.loadPanel != undefined) {
      this.loadPanel.loadingVisible = true;
      this.loadPanel.loadingPositionElementId = '#simpleDataGrid';
    }

    setTimeout(async () => {
      const allUsers: List_User[] = await this._testServis.getAllUsers(
        () => this.closeLoadingPanel(),
        errorMessage => {
          this._notifyS.notifyShow(errorMessage, { messageType: NotifyMessageType.Error });
          this.closeLoadingPanel();
        }
      );
      this.orders = allUsers;
      console.log(allUsers);
    }, 3000);
    //this.dataSource = new MatTableDataSource<List_Order>(allOrders.orders);
    //this.paginator.length = allOrders.totalOrderCount;

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
