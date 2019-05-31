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
  /*{
    title: 'Movilidad',
    icon: 'nb-compose',
    link: '/pages/movilidad',
    key: 'movilidad',
    children: [
      {
        title: 'Lista Movilidad',
        link: '/pages/movilidad/list-movilidad',
        key: 'lista_movilidad',
      },
      {
        title: 'CRUD Movilidad',
        link: '/pages/movilidad/crud-movilidad',
        key: 'crud_movilidad',
      },
    ],
  },*/
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
      {
        title: 'Lista Movilidad Academica',
        link: '/pages/movilidad_academica/list-movilidad_academica',
        key: 'lista_movilidad_academica',
      },
      {
        title: 'CRUD Movilidad Academica',
        link: '/pages/movilidad_academica/crud-movilidad_academica',
        key: 'crud_movilidad_academica',
      },
    ],
  },
  /*{
    title: 'Naturaleza',
    icon: 'nb-compose',
    link: '/pages/naturaleza',
    key: 'naturaleza',
    children: [
      {
        title: 'Lista Naturaleza',
        link: '/pages/naturaleza/list-naturaleza',
        key: 'lista_naturaleza',
      },
      {
        title: 'CRUD Naturaleza',
        link: '/pages/naturaleza/crud-naturaleza',
        key: 'crud_naturaleza',
      },
    ],
  },
  {
    title: 'Entidad',
    icon: 'nb-compose',
    link: '/pages/entidad',
    key: 'entidad',
    children: [
      {
        title: 'Lista Entidad',
        link: '/pages/entidad/list-entidad',
        key: 'lista_entidad',
      },
      {
        title: 'CRUD Entidad',
        link: '/pages/entidad/crud-entidad',
        key: 'crud_entidad',
      },
    ],
  },
  {
    title: 'Estados',
    icon: 'nb-compose',
    link: '/pages/estados',
    key: 'estados',
    children: [
      {
        title: 'Lista Estados',
        link: '/pages/estados/list-estados',
        key: 'lista_estados',
      },
      {
        title: 'CRUD Estados',
        link: '/pages/estados/crud-estados',
        key: 'crud_estados',
      },
    ],
  },
  {
    title: 'Paiscategoria',
    icon: 'nb-compose',
    link: '/pages/paiscategoria',
    key: 'paiscategoria',
    children: [
      {
        title: 'Lista Paiscategoria',
        link: '/pages/paiscategoria/list-paiscategoria',
        key: 'lista_paiscategoria',
      },
      {
        title: 'CRUD Paiscategoria',
        link: '/pages/paiscategoria/crud-paiscategoria',
        key: 'crud_paiscategoria',
      },
    ],
  },
  {
    title: 'Categoria',
    icon: 'nb-compose',
    link: '/pages/categoria',
    key: 'categoria',
    children: [
      {
        title: 'Lista Categoria',
        link: '/pages/categoria/list-categoria',
        key: 'lista_categoria',
      },
      {
        title: 'CRUD Categoria',
        link: '/pages/categoria/crud-categoria',
        key: 'crud_categoria',
      },
    ],
  },*/
  {
    title: 'Convenio',
    icon: 'nb-compose',
    link: '/pages/convenio',
    key: 'convenio',
    children: [
      {
        title: 'Lista Convenio',
        link: '/pages/convenio/list-convenio',
        key: 'lista_convenio',
      },
      {
        title: 'CRUD Convenio',
        link: '/pages/convenio/crud-convenio',
        key: 'crud_convenio',
      },
    ],
  },
]
