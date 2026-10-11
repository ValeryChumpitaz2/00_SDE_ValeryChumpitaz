import { recentOrders, salesByCategory, salesByMonth } from '../data/salesData.js';

// Por ahora obtiene datos locales; más adelante puede consumir una API real.
export default function useDashboard() {
  const totalSales = salesByMonth.reduce((total, item) => total + item.sales, 0);
  return { totalSales, salesByCategory, recentOrders, salesByMonth };
}
