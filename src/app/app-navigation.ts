export const navigation = [
  {
    text: 'Acasă',
    path: '/home',
    icon: 'home'
  },
  {
    text: 'Evaporare Termică',
    icon: 'folder',
    items: [
      {
        text: 'Rezistivă',
        path: '/display-data'
      },
      {
        text: 'Inductivă',
      },
      {
        text: 'Arc Electric',
      }
    ]
  },
  {
    text: 'Pulverizare Catodică',
    icon: 'folder',
    items: [
      {
        text: 'Magnetron',
        path: '/materials'
      },
      {
        text: 'Curent Continuu',
      },
      {
        text: 'Radio Frecventă',
      }
    ]
  }
];
