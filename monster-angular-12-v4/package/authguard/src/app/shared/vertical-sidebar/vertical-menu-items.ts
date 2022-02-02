import { RouteInfo } from "./vertical-sidebar.metadata";

export const ROUTES: RouteInfo[] = [
 
  
 
  {
    path: '',
    title: 'Gestion des outils',
    icon: 'cpu',
    class: 'has-arrow',
    extralink: false,
    submenu: [

      {
        path: '/component/mots-cles-list',
        title: 'liste des mots cles',
        icon: 'mdi mdi-equal',
        class: '',
        extralink: false,
        submenu: []
      },


     
      {
        path: '/component/competences/competences-list',
        title: 'liste des compétences',
        icon: 'mdi mdi-message-bulleted',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '/component/support',
        title: 'Supports',
        icon: 'mdi mdi-view-carousel',
        class: '',
        extralink: false,
        submenu: []
      },
      {
        path: '',
        title: 'Activités',
        icon: 'mdi mdi-arrange-bring-to-front',
        class: '',
        extralink: false,
        submenu: []
      },
      
      
      
      
      
    ]
  }
];
