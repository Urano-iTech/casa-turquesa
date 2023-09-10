import { community, createCampaign, dashboard, dinero, home, logout, members, payment, profile, withdraw } from '../navfotos';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: createCampaign,
    link: '/',
  },
  {
    name: 'Pool',
    imgUrl: members,
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
    imgUrl: dashboard,
    link: '/',
    disabled: false,
  },
];

export const exploreCasas = [
  {
    id: "casa-1",
    imgUrl: '/1095601718.jpg',
    title: 'Casa Roja 1'
  },
  {
    id: "casa-2",
    imgUrl: '/1095601719.jpg',
    title: 'Casa Roja 2'
  },
{
  id: "casa-3",
  imgUrl: '/1095601720.jpg',
  title: 'Casa Roja 3'
},
{
  id: "casa-4",
  imgUrl: '/1095601721.jpg',
  title: 'Casa Roja 4',
  
},
];

export const startingFeatures = [

'Fing DASDASDASDASDASDASDASDASDSA',

'Fing DASDASDASDASDASDASDASDASDSA',

'Fing DASDASDASDASDASDASDASDASDSA',

'Fing DASDASDASDASDASDASDASDASDSA',

'Fing DASDASDASDASDASDASDASDASDSA',
];


export const insights = [
  {
    imgUrl: '/portal-preview.png',
    title : 'Titulo 1',
    subtitle: 'lorensaassa'
  },
  {
    imgUrl: '/1095601718.jpg',
    title : 'Titulo 1',
    subtitle: 'lorensaassa'
  },
  {
    imgUrl: '/1095601719.jpg',
    title : 'Titulo 1',
    subtitle: 'lorensaassa'
  },
  {
    imgUrl: '/1095601720.jpg',
    title : 'Titulo 1',
    subtitle: 'lorensaassa'
  },
];

export const socials = [
  {
    name: 'twitter',
    url: '',
  },
  {
    name: 'instagram',
    url: '',
  },
  {
    name: 'facebook',
    url: '',
  },
]