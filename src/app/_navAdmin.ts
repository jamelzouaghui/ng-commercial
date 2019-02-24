export const navItemsAdmin = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
            variant: 'info',
            text: 'NEW'
        }
    },


     {

        name: 'Utilisteurs',
        url: '/users',
        icon: 'icon-puzzle',
        children: [
            {
                name: 'Users',
                url: '/users/users',
                icon: 'icon-puzzle'
            },
            {
                name: 'magasins',
                url: '/users/magasins',
                icon: 'icon-puzzle'
            },
             {
                name: 'Evenements',
                url: '/magasins/events',
                icon: 'icon-star'
            }

        ]
    }
   

   
   

];
