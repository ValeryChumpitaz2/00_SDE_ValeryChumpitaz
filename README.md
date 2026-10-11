# Tienda Analytics — ejemplo docente de React

Dashboard educativo con datos simulados para practicar organización de carpetas y componentes en React + Vite.

## Requisitos
- Node.js y npm instalados.

## Ejecutar
```bash
npm install
npm run dev
```
Abre la URL que indique Vite en la terminal.

## Construir para producción
```bash
npm run build
```

## Estructura principal
- `src/app/`: composición general y layout.
- `src/features/dashboard/`: dashboard organizado por funcionalidad.
- `components/`: componentes visuales reutilizables dentro del dashboard.
- `data/`: datos ficticios locales.
- `hooks/`: lógica para obtener y organizar los datos que consume la vista.
- `api/`: punto de partida para integrar una API en el futuro; no se utiliza todavía.
- `src/shared/`: espacio reservado para utilidades compartidas.

## Nota docente
Los importes, pedidos y clientes son completamente ficticios. Esta versión no consume un backend ni una API real. La navegación lateral es una maqueta visual; la vista implementada es el dashboard.
