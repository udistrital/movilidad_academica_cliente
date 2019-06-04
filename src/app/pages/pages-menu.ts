// import { NbMenuItem } from '@nebular/theme';
import { MenuItem } from './menu-item';

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
    key: 'dashboard',
  },
  // {
  //   title: 'Movilidad',
  //   icon: 'nb-compose',
  //   link: '/pages/movilidad',
  //   key: 'movilidad',
  //   children: [
  //     {
  //       title: 'Lista Movilidad',
  //       link: '/pages/movilidad/list-movilidad',
  //       key: 'lista_movilidad',
  //     },
  //     {
  //       title: 'CRUD Movilidad',
  //       link: '/pages/movilidad/crud-movilidad',
  //       key: 'crud_movilidad',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tipocategoria',
  //   icon: 'nb-compose',
  //   link: '/pages/tipocategoria',
  //   key: 'tipocategoria',
  //   children: [
  //     {
  //       title: 'Lista Tipocategoria',
  //       link: '/pages/tipocategoria/list-tipocategoria',
  //       key: 'lista_tipocategoria',
  //     },
  //     {
  //       title: 'CRUD Tipocategoria',
  //       link: '/pages/tipocategoria/crud-tipocategoria',
  //       key: 'crud_tipocategoria',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tipomovilidad',
  //   icon: 'nb-compose',
  //   link: '/pages/tipomovilidad',
  //   key: 'tipomovilidad',
  //   children: [
  //     {
  //       title: 'Lista Tipomovilidad',
  //       link: '/pages/tipomovilidad/list-tipomovilidad',
  //       key: 'lista_tipomovilidad',
  //     },
  //     {
  //       title: 'CRUD Tipomovilidad',
  //       link: '/pages/tipomovilidad/crud-tipomovilidad',
  //       key: 'crud_tipomovilidad',
  //     },
  //   ],
  // },
  {
    title: 'Movilidad Academica',
    icon: 'nb-compose',
    link: '/pages/movilidad_academica',
    key: 'movilidad_academica',
    children: [
      // {
      //   title: 'Lista Movilidad Academica',
      //   link: '/pages/movilidad_academica/list-movilidad_academica',
      //   key: 'lista_movilidad_academica',
      // },
      {
        title: 'CRUD Movilidad Academica',
        link: '/pages/movilidad_academica/crud-movilidad_academica',
        key: 'crud_movilidad_academica',
      },
    ],
  },
  {
    title: 'Convenio',
    icon: 'nb-compose',
    link: '/pages/convenio/list-convenio',
  },
]
