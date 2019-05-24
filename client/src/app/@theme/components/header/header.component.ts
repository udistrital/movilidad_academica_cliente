import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
// import { AutenticationService } from '../../../@core/utils/autentication.service';
import { TranslateService } from '@ngx-translate/core';
import { ImplicitAutenticationService } from '../../../@core/utils/implicit_autentication.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NotificacionesService } from '../../../@core/utils/notificaciones.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';
  itemClick: Subscription;

  user: any;
  title: any;
  username = '';
  userMenu = [{ title: 'ver todas', icon: 'fa fa-list' }];
  public noNotify: any = '0';
  constructor(private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private analyticsService: AnalyticsService,
    private autenticacion: ImplicitAutenticationService,
    private notificacionService: NotificacionesService,
    private router: Router,
    public translate: TranslateService) {
    this.translate = translate;
    this.itemClick = this.menuService.onItemClick()
      .subscribe((event) => {
        this.onContecxtItemSelection(event.item.title);
      });

    this.notificacionService.getMessages()
      .pipe(debounceTime(700), distinctUntilChanged())
      .subscribe((notification: any) => {
        const temp = notification.map((notify: any) => {
          return { title: notify.Content.Message, icon: 'fa fa-commenting-o' }
        });
        this.userMenu = [...temp.slice(0, 7), ...[{ title: 'ver todas', icon: 'fa fa-list' }]];
      });

    this.notificacionService.noNotify$
      .subscribe((numero: any) => {
        if (typeof numero !== typeof {}) {
          this.noNotify = numero + '';
        }
      });
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
  ngOnInit() {
    this.autenticacion.init();
  }
  liveToken() {
    if (this.autenticacion.live()) {
      this.username = (this.autenticacion.getPayload()).sub;
    }
    return this.autenticacion.live();
  }

  onContecxtItemSelection(title) {
    if (title === 'ver todas') {
      this.router.navigate(['/pages/notificacion/listado']);
    }
  }

  login() {
    window.location.replace(this.autenticacion.getAuthorizationUrl());
  }

  logout() {
    console.info(this.autenticacion.logout());
    // window.location.replace(this.autenticacion.logout());
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
