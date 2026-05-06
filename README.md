# Mediheart — Sitio Web Oficial

Sitio web corporativo de **Mediheart S. de R.L de C.V.**, empresa hondureña especializada en la comercialización y distribución de dispositivos médicos para cardiología intervencionista.

🌐 **Producción:** [medihearthn.com](https://medihearthn.com)

---

## Tecnologías

| Tecnología | Versión |
|---|---|
| [Next.js](https://nextjs.org/) | 16.x (App Router) |
| [React](https://react.dev/) | 18.x |
| [TypeScript](https://www.typescriptlang.org/) | 5.x |
| [Tailwind CSS](https://tailwindcss.com/) | 3.x |
| [lucide-react](https://lucide.dev/) | 0.400+ |
| [Vercel Analytics](https://vercel.com/analytics) | latest |

---

## Estructura del proyecto

```
mediheart/
├── public/
│   ├── logo.png              # Logo oficial (sin fondo)
│   └── logo.svg              # Logo SVG alternativo
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Layout raíz, SEO metadata, favicon
│   │   ├── page.tsx          # Página principal
│   │   └── globals.css       # Estilos globales, animaciones
│   └── components/
│       ├── Navbar.tsx        # Navegación fija con scroll detection
│       ├── Hero.tsx          # Sección principal con animación ECG
│       ├── AboutUs.tsx       # Quiénes somos, misión, visión
│       ├── Specializations.tsx # 5 áreas de especialización
│       ├── Coverage.tsx      # Cobertura y cumplimiento normativo
│       ├── Contact.tsx       # Información de contacto
│       ├── Footer.tsx        # Pie de página
│       └── ui/
│           ├── Button.tsx    # Componente botón reutilizable
│           └── Card.tsx      # Componente card reutilizable
├── tailwind.config.ts        # Colores y animaciones personalizadas
└── tsconfig.json
```

---

## Instalación y desarrollo local

### Requisitos

- Node.js 18+ (recomendado: instalar con [nvm](https://github.com/nvm-sh/nvm))
- npm

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/Josuezl/mediheart.git
cd mediheart

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000).

### Scripts disponibles

```bash
npm run dev      # Servidor de desarrollo (Turbopack)
npm run build    # Build de producción
npm run start    # Servidor de producción local
npm run lint     # Linter
```

---

## Branding

| Elemento | Valor |
|---|---|
| Color principal | `#8B1538` (wine/bordeaux) |
| Color oscuro | `#6e1130` |
| Color claro | `#a91d47` |
| Fuente | Inter (Google Fonts) |
| Logo | `public/logo.png` |

---

## Secciones del sitio

| Sección | ID | Descripción |
|---|---|---|
| Inicio | `#inicio` | Hero con logo animado y ECG |
| Quiénes Somos | `#quienes-somos` | Historia, misión y visión |
| Especialización | `#especializacion` | 5 áreas de dispositivos médicos |
| Cobertura | `#cobertura` | Presencia y clientes objetivo |
| Contacto | `#contacto` | Email, dirección y horarios |

---

## Información de contacto del cliente

| | |
|---|---|
| **Email** | info@medihearthn.com |
| **Dirección** | Col. Trejo, 10 Cl. 23 Ave., San Pedro Sula, Cortés, Honduras |
| **Horario** | Lun–Vier 8:00am–5:00pm · Sáb 8:00am–12:00pm |

---

## Deploy

El sitio se despliega en **Vercel**. Cada push a la rama `main` puede activar un deploy automático, o manualmente con:

```bash
npx vercel --prod
```

### Analytics

Vercel Analytics está activo en producción. Los datos de visitas se visualizan en el [dashboard de Vercel](https://vercel.com/josuezls-projects/mediheart/analytics).

---

## Desarrollo

Desarrollado por **Ing. Josue Zuniga** — [josuez@outlook.com](mailto:josuez@outlook.com)
