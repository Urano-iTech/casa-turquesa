import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../navfotos';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'Pool',
    imgUrl: createCampaign,
    link: '/CreatePool',
  },
  {
    name: 'Casas Detalles',
    imgUrl: payment,
    link: '/CasasDetalles',
    disabled: false,
  },
  {
    name: 'Claim',
    imgUrl: withdraw,
    link: '/Claim',
    disabled: false,
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];