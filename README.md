# Aplicación de consulta del Clima

![Logo](src/assets/logo.jpeg)

Este proyecto es una **aplicación web para administrar y gestionar notas**, desarrollada con **React y Vite**. Permite a los usuarios consultar el clima de su país y ciudad. La aplicación está diseñada para ser rápida, responsiva y fácilmente actualmente es **Progressive Web App (PWA)**.

## **📌 Características**

- ✅ **Consultar** en una interfaz amigable.
- ✅ **Diseño responsivo** para dispositivos móviles y escritorio.
- ✅ **Código modular y escalable** con componentes reutilizables.

## **📁 Estructura del Proyecto**

```plaintext
├── README.md                  # Documentación del proyecto
├── eslint.config.js            # Configuración de ESLint para buenas prácticas
├── index.html                  # Archivo HTML principal
├── package.json                # Dependencias y scripts de la aplicación
├── public/
│   └── vite.svg                # Logo de Vite
├── src/
│   ├── App.jsx                 # Componente principal de la aplicación
│   ├── assets/                 # Recursos estáticos (imágenes, logos)
│   │   ├── logo.jpeg           # Logo del proyecto
│   │   └── react.svg           # Logo de React
│   ├── components/             # Componentes reutilizables
│   │   ├── WeatherCard.jsx        # Componente para mostrar la consulta del clima
│   ├── api/
│   │   └── api.js            # Datos de consulta para API
│   ├── main.jsx                # Punto de entrada de React
└── vite.config.js              # Configuración de Vite para optimización
```

## **🚀 Instalación y Ejecución**

Para ejecutar la aplicación localmente, sigue estos pasos:

1. Clonar el Repositorio

```bash
git clone https://github.com/Krpardo27/clima-app.git
cd clima-app
```

2. Instalar Dependencias

```bash
npm install
```

3. Ejecutar la Aplicación

```bash
npm run dev
```

Luego, abre tu navegador y accede a **`http://localhost:5173`**.

## **🛠️ Funcionalidades de los Componentes**

- `NoteForm.jsx` - Formulario para Agregar y Editar Notas
  - Este componente permite a los usuarios ingresar nuevas notas y editarlas.
- `NoteCard.jsx` - Componente para Mostrar Notas
  - Cada nota se renderiza dentro de este componente.
- `NotesList.jsx` - Listado de Notas
  - Administra la lista de notas dinámicamente.
