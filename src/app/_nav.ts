import { INavData } from "@coreui/angular";

export const navItems: INavData[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: "icon-speedometer"
  },
  {
    name: "Home",
    url: "/home",
    icon: "cil-list"
  },
  {
    name: "Books",
    url: "/book",
    icon: "cil-list"
  },
  {
    name: "Stepping Stones",
    url: "/steppingstones",
    icon: "cil-list"
  },
  {
    name: "Series",
    url: "/series",
    icon: "cil-list"
  },
  {
    name: "Story time",
    url: "/storytime",
    icon: "cil-list"
  },
  {
    name: "Blog",
    url: "/blog",
    icon: "cil-list"
  },
  {
    name: "About Us",
    url: "/about-us",
    icon: "icon-puzzle",
    children: [
      {
        name: "About Info",
        url: "/about-us/about-info",
        icon: "icon-puzzle"
      },
      {
        name: "Editorial Team",
        url: "/about-us/editorialteam",
        icon: "icon-puzzle"
      },
      {
        name: "Art Director Team",
        url: "/about-us/artdirectorteam",
        icon: "icon-puzzle"
      },
      {
        name: "Animation Team",
        url: "/about-us/animationteam",
        icon: "icon-puzzle"
      },
      {
        name: "Development Team",
        url: "/about-us/developmentteam",
        icon: "icon-puzzle"
      },
      {
        name: "Administration Team",
        url: "/about-us/administrationteam",
        icon: "icon-puzzle"
      },
      {
        name: "Leadership",
        url: "/about-us/leadership",
        icon: "icon-puzzle"
      },
      {
        name: "News",
        url: "/about-us/news",
        icon: "icon-puzzle"
      }
    ]
  },
  {
    name: "Help",
    url: "/help",
    icon: "icon-puzzle",
    children: [
      {
        name: "FAQ List",
        url: "/help/faqlist",
        icon: "icon-puzzle"
      },
      {
        name: "Report Piracy",
        url: "/help/reportpiracy",
        icon: "icon-puzzle"
      },
      {
        name: "Manuscript Submission",
        url: "/help/manuscript-submission",
        icon: "icon-puzzle"
      },
      {
        name: "Online Piracy Report Form",
        url: "/help/online-piracy-report-form",
        icon: "icon-puzzle"
      }
    ]
  }
  // {
  //   title: true,
  //   name: 'Theme'
  // },
  // {
  //   name: 'Colors',
  //   url: '/theme/colors',
  //   icon: 'icon-drop'
  // },
  // {
  //   name: 'Typography',
  //   url: '/theme/typography',
  //   icon: 'icon-pencil'
  // },
  // {
  //   title: true,
  //   name: 'Components'
  // },
  // {
  //   name: 'Base',
  //   url: '/base',
  //   icon: 'icon-puzzle',
  //   children: [
  //     {
  //       name: 'Cards',
  //       url: '/base/cards',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Carousels',
  //       url: '/base/carousels',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Collapses',
  //       url: '/base/collapses',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Navbars',
  //       url: '/base/navbars',
  //       icon: 'icon-puzzle'

  //     },
  //     {
  //       name: 'Pagination',
  //       url: '/base/paginations',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Popovers',
  //       url: '/base/popovers',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Progress',
  //       url: '/base/progress',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Switches',
  //       url: '/base/switches',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tabs',
  //       url: '/base/tabs',
  //       icon: 'icon-puzzle'
  //     },
  //     {
  //       name: 'Tooltips',
  //       url: '/base/tooltips',
  //       icon: 'icon-puzzle'
  //     }
  //   ]
  // },
  // {
  //   name: 'Buttons',
  //   url: '/buttons',
  //   icon: 'icon-cursor',
  //   children: [
  //     {
  //       name: 'Buttons',
  //       url: '/buttons/buttons',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Dropdowns',
  //       url: '/buttons/dropdowns',
  //       icon: 'icon-cursor'
  //     },
  //     {
  //       name: 'Loading Buttons',
  //       url: '/buttons/loading-buttons',
  //       icon: 'icon-cursor',
  //       badge: {
  //         variant: 'danger',
  //         text: 'PRO'
  //       }
  //     },
  //     {
  //       name: 'Brand Buttons',
  //       url: '/buttons/brand-buttons',
  //       icon: 'icon-cursor'
  //     }
  //   ]
  // },
  // {
  //   name: 'Charts',
  //   url: '/charts',
  //   icon: 'icon-pie-chart'
  // },
  // {
  //   name: 'Editors',
  //   url: '/editors',
  //   icon: 'fa fa-code',
  //   children: [
  //     {
  //       name: 'Text Editors',
  //       url: '/editors/text-editors',
  //       icon: 'icon-note',
  //       badge: {
  //         variant: 'danger',
  //         text: 'PRO'
  //       }
  //     },
  //     {
  //       name: 'Code Editors',
  //       url: '/editors/code-editors',
  //       icon: 'fa fa-code',
  //       badge: {
  //         variant: 'danger',
  //         text: 'PRO'
  //       }
  //     }
  //   ]
  // },
  // {
  //   name: 'Forms',
  //   url: '/forms',
  //   icon: 'icon-note',
  //   children: [
  //     {
  //       name: 'Basic Forms',
  //       url: '/forms/basic-forms',
  //       icon: 'icon-note'
  //     },
  //     {
  //       name: 'Advanced',
  //       url: '/forms/advanced-forms',
  //       icon: 'icon-note',
  //       badge: {
  //         variant: 'danger',
  //         text: 'PRO'
  //       }
  //     },
  //     {
  //       name: 'Validation',
  //       url: '/forms/validation-forms',
  //       icon: 'icon-note',
  //       badge: {
  //         variant: 'danger',
  //         text: 'PRO'
  //       }
  //     },
  //   ]
  // },
  // {
  //   name: 'Google Maps',
  //   url: '/google-maps',
  //   icon: 'icon-map',
  //   badge: {
  //     variant: 'danger',
  //     text: 'PRO'
  //   }
  // },
  // {
  //   name: 'Icons',
  //   url: '/icons',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'CoreUI Icons',
  //       url: '/icons/coreui-icons',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'success',
  //         text: 'NEW'
  //       }
  //     },
  //     {
  //       name: 'Flags',
  //       url: '/icons/flags',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Font Awesome',
  //       url: '/icons/font-awesome',
  //       icon: 'icon-star',
  //       badge: {
  //         variant: 'secondary',
  //         text: '4.7'
  //       }
  //     },
  //     {
  //       name: 'Simple Line Icons',
  //       url: '/icons/simple-line-icons',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Notifications',
  //   url: '/notifications',
  //   icon: 'icon-bell',
  //   children: [
  //     {
  //       name: 'Alerts',
  //       url: '/notifications/alerts',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Badges',
  //       url: '/notifications/badges',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Modals',
  //       url: '/notifications/modals',
  //       icon: 'icon-bell'
  //     },
  //     {
  //       name: 'Toastr',
  //       url: '/notifications/toastr',
  //       icon: 'icon-bell',
  //       badge: {
  //         variant: 'danger',
  //         text: 'PRO'
  //       }
  //     }
  //   ]
  // },
  // {
  //   name: 'Plugins',
  //   url: '/plugins',
  //   icon: 'icon-energy',
  //   children: [
  //     {
  //       name: 'Calendar',
  //       url: '/plugins/calendar',
  //       icon: 'icon-calendar',
  //       badge: {
  //         variant: 'danger',
  //         text: 'PRO'
  //       }
  //     },
  //     {
  //       name: 'Draggable',
  //       url: '/plugins/draggable-cards',
  //       icon: 'icon-cursor-move',
  //       badge: {
  //         variant: 'danger',
  //         text: 'PRO'
  //       }
  //     },
  //     {
  //       name: 'Spinners',
  //       url: '/plugins/spinners',
  //       icon: 'fa fa-spinner',
  //       badge: {
  //         variant: 'danger',
  //         text: 'PRO'
  //       }
  //     }
  //   ]
  // },
  // {
  //   name: 'Tables',
  //   url: '/tables',
  //   icon: 'icon-list',
  //   children: [
  //     {
  //       name: 'DataTable',
  //       url: '/tables/datatable',
  //       icon: 'icon-list',
  //       badge: {
  //         variant: 'danger',
  //         text: 'PRO'
  //       }
  //     },
  //     {
  //       name: 'Standard Tables',
  //       url: '/tables/tables',
  //       icon: 'icon-list'
  //     },
  //   ]
  // },
  // {
  //   name: 'Widgets',
  //   url: '/widgets',
  //   icon: 'icon-calculator',
  //   badge: {
  //     variant: 'info',
  //     text: 'NEW'
  //   }
  // },
  // {
  //   divider: true
  // },
  // {
  //   title: true,
  //   name: 'Extras',
  // },
  // {
  //   name: 'Pages',
  //   url: '/pages',
  //   icon: 'icon-star',
  //   children: [
  //     {
  //       name: 'Login',
  //       url: '/login',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Register',
  //       url: '/register',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 404',
  //       url: '/404',
  //       icon: 'icon-star'
  //     },
  //     {
  //       name: 'Error 500',
  //       url: '/500',
  //       icon: 'icon-star'
  //     }
  //   ]
  // },
  // {
  //   name: 'Disabled',
  //   url: '/dashboard',
  //   icon: 'icon-ban',
  //   badge: {
  //     variant: 'secondary',
  //     text: 'NEW'
  //   },
  //   attributes: {disabled: true},
  // },
  // {
  //   name: 'Apps',
  //   url: '/apps',
  //   icon: 'icon-layers',
  //   children: [
  //     {
  //       name: 'Invoicing',
  //       url: '/apps/invoicing',
  //       icon: 'icon-speech',
  //       children: [
  //         {
  //           name: 'Invoice',
  //           url: '/apps/invoicing/invoice',
  //           icon: 'icon-speech',
  //           badge: {
  //             variant: 'danger',
  //             text: 'PRO'
  //           }
  //         }
  //       ]
  //     },
  //     {
  //       name: 'Email',
  //       url: '/apps/email',
  //       icon: 'icon-speech',
  //       children: [
  //         {
  //           name: 'Inbox',
  //           url: '/apps/email/inbox',
  //           icon: 'icon-speech',
  //           badge: {
  //             variant: 'danger',
  //             text: 'PRO'
  //           }
  //         },
  //         {
  //           name: 'Message',
  //           url: '/apps/email/message',
  //           icon: 'icon-speech',
  //           badge: {
  //             variant: 'danger',
  //             text: 'PRO'
  //           }
  //         },
  //         {
  //           name: 'Compose',
  //           url: '/apps/email/compose',
  //           icon: 'icon-speech',
  //           badge: {
  //             variant: 'danger',
  //             text: 'PRO'
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // }
];
