import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-load-panel',
  templateUrl: './load-panel.component.html',
  styleUrls: ['./load-panel.component.scss']
})
export class LoadPanelComponent {
  loadingPositionElementId: any;
  loadingVisible = false;

  onShown() {
    //this.loadingVisible = false;
    //setTimeout(() => {
    //  this.loadingVisible = false;
    //}, 3000);
  }
  onHidden() {

  }
  showLoadingPanel() {
    this.loadingVisible = true;
  }

  closeLoadingPanel() {
    this.loadingVisible = false;
  }
}
