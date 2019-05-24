import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class WebsocketService {
    constructor() { }

    private subject: Rx.Subject<MessageEvent>;

    public connect(url): Rx.Subject<MessageEvent> {
        if (!this.subject) {
            this.subject = this.create(url);
            console.info('Successfully connected: ' + url);
        }
        return this.subject;
    }

    private create(url): Rx.Subject<MessageEvent> {
        const ws = new WebSocket(url);
        const observable = Rx.Observable.create((obs: Rx.Observer<MessageEvent>) => {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        const observer = {
            next: (data: Object) => {
                console.info(data);
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            },
        }
        return Rx.Subject.create(observer, observable);
    }

}
