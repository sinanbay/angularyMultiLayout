import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  types: string[] = ['error', 'info', 'success', 'warning'];
  direction = 'down-push';
  isPredefined = true;
  predefinedPosition = 'top center';

  show() {
    const position: any = this.isPredefined ? this.predefinedPosition : this.predefinedPosition;
    const direction: any = this.direction;

    notify({
      message: `Toast sds sd sd sd sdsd sdsdsdsd sd sd sd sdsd`,
      maxWidth: 500,
      type: this.types[Math.floor(Math.random() * 4)],
      displayTime: 3500,
      animation: {
        show: {
          type: 'fade', duration: 400, from: 0, to: 1,
        },
        hide: { type: 'fade', duration: 40, to: 0 },
      },
    },
      { position, direction });
  }
}
