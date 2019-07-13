export const navigation = [
  {
    text: 'Home',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Thermal Evaporation',
    icon: 'folder',
    items: [
      {
        text: 'Resistance',
        path: '/display-data'
      },
      {
        text: 'Inductive',
      },
      {
        text: 'Electric Arc',
      }
    ]
  },
  {
    text: 'Sputtering',
    icon: 'folder',
    items: [
      {
        text: 'Direct Current',
        path: '/materials'
      },
      {
        text: 'Radio Frequency',
      }
    ]
  }
];
