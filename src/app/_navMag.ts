export const navItemsMag = [
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
        name: 'Magasins',
        url: '/magasins',
        icon: 'icon-star',
        children: [
            
            {
                name: 'Evenements',
                url: '/magasins/events',
                icon: 'icon-star'
            },
            {
                name: 'magasins',
                url: '/users/magasins',
                icon: 'icon-puzzle'
            }
        ]
    }
   

   
   

];
