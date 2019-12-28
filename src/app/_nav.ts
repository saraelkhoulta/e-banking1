import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Admin'
  },
  {
    name: 'Utilisateurs',
    url: '/users',
    icon: 'icon-people'
  },
  {
    name: 'Agences',
    url: '/agences',
    icon: 'icon-home'
  },
  {
    name: 'Reporting',
    url: '/charts',
    icon: 'icon-pie-chart'
  }
];
export const navItems2: INavData[] = [
  {
    title: true,
    name: 'BO'
  },
  {
    name: 'Gestion des Abonnées',
    url: '/client',
    icon: 'icon-people'
  },
  {
    name: 'Gestion des Comptes',
    url: '/Comptes',
    icon: 'icon-credit-card'
  },
  {
    name: 'Gestion des Contrats',
    url: '/Contrats',
    icon: 'icon-layers'
  },
  {
    name: 'Gestion des Offres ',
    url: '/Offres',
    icon: 'icon-basket-loaded'
  },
  {
    name: ' Effectuer prélèvement ',
    url: '/Prelevement',
    icon: 'icon-cursor'
  }
];
export const navItems3: INavData[] = [
  {
    title: true,
    name: 'Client'
  },
  {
    name: 'Utilisateurs',
    url: '/theme/colors',
    icon: 'icon-people'
  },
  {
    name: 'Agences',
    url: '/theme/typography',
    icon: 'icon-home'
  },
  {
    name: 'Reporting',
    url: '/theme/typography',
    icon: 'icon-pie-chart'
  }
];

export const navItems4: INavData[] = [
  {
    title: true,
    name: 'Abonné'
  },
  {
    name: 'Comptes',
    url: '/liste',
    icon: 'icon-list'
  }
];
