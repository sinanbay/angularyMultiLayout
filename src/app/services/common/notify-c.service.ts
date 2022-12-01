import { Injectable } from '@angular/core';
import notify from 'devextreme/ui/notify';

@Injectable({
  providedIn: 'root'
})
export class NotifyCService {

  constructor() { }

  notifyShow(message: string, option: Partial<NotifyOptions> = {
    messageType: NotifyMessageType.Info,
    notifyDirection: NotifyMessageDirection.DownPush,
    predefinedPosition: NotifyPredefinedPosition.TopCenter
  }) {
    const position: any = option.predefinedPosition == undefined ? NotifyPredefinedPosition.TopCenter : option.predefinedPosition;
    const direction: any = option.notifyDirection == undefined ? NotifyMessageDirection.DownPush : option.notifyDirection;

    notify({
      message: message,
      maxWidth: 500,
      type: option.messageType,
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
export class NotifyOptions {
  messageType: NotifyMessageType = NotifyMessageType.Info;
  notifyDirection: NotifyMessageDirection = NotifyMessageDirection.DownPush;
  predefinedPosition: NotifyPredefinedPosition = NotifyPredefinedPosition.TopCenter
}

export enum NotifyMessageDirection {
  DownPush = "down-push",
  DownStack = 'down-stack',
  UpPush = 'up-push',
  UpStack = 'up-stack',
  LeftPush = 'left-push',
  LeftStack = 'left-stack',
  RightPush = 'right-push',
  RightStack = 'right-stack',
}
export enum NotifyMessageType {
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error"
}
export enum NotifyPredefinedPosition {
  TopLeft = 'top left', TopCenter = 'top center', TopRight = 'top right',
  //'bottom left', 'bottom center', 'bottom right',
  //'left center', 'center', 'right center',
}
