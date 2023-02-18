import { debugData } from '../../../utils/debugData';
import type { MenuItem } from '../../../typings';

export const debugRadial = () => {
  debugData<{ items: MenuItem[]; sub?: boolean }>([
    {
      action: 'openRadialMenu',
      data: {
        items: [
          { icon: 'palette', label: 'Paint', image: 'basket-shopping' },
          { icon: 'warehouse', label: 'Garage', image: 'basket-shopping' },
          { icon: 'palette', label: 'Quite long text', image: 'basket-shopping' },
          { icon: 'palette', label: 'Paint', image: 'basket-shopping' },
          { icon: 'warehouse', label: 'Garage', image: 'basket-shopping' },
        ],
      },
    },
  ]);
};
