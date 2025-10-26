// Allow importing CSS/SASS files as side-effect modules in TypeScript
// This file tells TypeScript that imports like `import './globals.css'` are valid
declare module "*.css";
declare module "*.scss";
declare module "*.sass";

// If you use CSS Modules (import styles from './file.module.css'),
// you can add a more specific declaration:
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// For Next.js's built-in CSS support, also allow importing plain CSS files
// as side effects (no exports).
