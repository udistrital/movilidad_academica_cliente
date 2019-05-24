import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import { GENERAL } from './../../app-config';
import { ImplicitAutenticationService } from './implicit_autentication.service';
import { ConfiguracionService } from './../data/configuracion.service';
import { from } from 'rxjs';

const CHAT_URL = GENERAL.ENTORNO.NOTIFICACION_SERVICE;



@Injectable()
export class NotificacionesService {
    public messages: Subject<any>;
    listMessage: any;
    payload: any;

    private noNotifySubject = new Subject();
    noNotify$ = this.noNotifySubject.asObservable();

    private arrayMessagesSubject = new Subject();
    arrayMessages$ = this.arrayMessagesSubject.asObservable();
    private _messages = this.arrayMessages$.multicast(this.arrayMessagesSubject);
    public getMessages() {
        return this._messages;
    }

    constructor(wsService: WebsocketService,
        private confService: ConfiguracionService,
        authService: ImplicitAutenticationService,
    ) {
        this.listMessage = [];
        if (authService.live()) {
            this.payload = authService.getPayload();
            this.messages = <Subject<any>>wsService
                .connect(CHAT_URL + `?id=${this.payload.sub}&profiles=admin`)
                .map((response: any) => {
                    return JSON.parse(response.data)
                });
            this.queryNotification('admin');
            this.messages.subscribe(response => {
                const message = {
                    Type: response.Type,
                    Content: response.Content,
                    User: response.User,
                    FechaCreacion: new Date(response.Timestamp),
                };
                console.info(message);
                this.addMessage(message);
            });
        }


    }

    addMessage(message) {
        this.listMessage = [...[message], ...this.listMessage];
        console.info(this.listMessage);
        this.noNotifySubject.next(this.listMessage.length);
        this.arrayMessagesSubject.next(this.listMessage);
    }
    queryNotification(profile) {
        this.confService.get('notificacion?query=Usuario:' + this.payload.sub + '&sortby=FechaCreacion&order=asc&limit=-1')
            .subscribe((resp: any) => {
                if (resp !== null) {
                    from(resp)
                        .subscribe((notify: any) => {
                            const message = {
                                Type: notify.NotificacionConfiguracion.Tipo.Id,
                                Content: JSON.parse(notify.CuerpoNotificacion),
                                User: notify.NotificacionConfiguracion.Aplicacion.Nombre,
                                FechaCreacion: new Date(notify.FechaCreacion),

                            };
                            this.addMessage(message);
                        });
                }
            });
        this.confService.get('notificacion_configuracion_perfil?query=Perfil.Nombre:' + profile + '&limit=-1')
            .subscribe(response => {
                from(response)
                    .subscribe((res: any) => {
                        this.confService.get('notificacion?query=NotificacionConfiguracion.Id:' +
                            res.NotificacionConfiguracion.Id + ',Usuario:' + '&sortby=FechaCreacion&order=asc&limit=-1')
                            .subscribe((resp: any) => {
                                if (resp !== null) {
                                    from(resp)
                                        .subscribe((notify: any) => {
                                            const message = {
                                                Type: notify.NotificacionConfiguracion.Tipo.Id,
                                                Content: JSON.parse(notify.CuerpoNotificacion),
                                                User: notify.NotificacionConfiguracion.Aplicacion.Nombre,
                                                FechaCreacion: new Date(notify.FechaCreacion),
                                            };
                                            this.addMessage(message);
                                        });
                                }
                            });
                    });
            });
    }
}
