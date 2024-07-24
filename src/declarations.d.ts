declare module '*.svg' {
    const content: any;
    export default content;
  }
  
  
// Declare module for PNG files
declare module '*.png' {
  const content: any;
  export default content;
}

// Declare module for JPEG files
declare module '*.jpeg' {
  const content: any;
  export default content;
}

// Declare module for JPG files
declare module '*.jpg' {
  const content: any;
  export default content;
}

// Declare module for GIF files
declare module '*.gif' {
  const content: any;
  export default content;
}

// Declare module for CSS files
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Declare module for JSON files
declare module '*.json' {
  const value: any;
  export default value;
}