// src/assets/images/index.jsx

// Import all image files from the current directory eagerly.
const modules = import.meta.glob("./*.{png,jpg,jpeg,svg}", { eager: true });

// Build an object mapping filenames to their modules.
const images = {};

for (const path in modules) {
  // Extract the filename from the path. For example, "./image1.jpg" becomes "image1.jpg"
  const key = path.split("/").pop();
  // Some bundlers export the image as a default property.
  images[key] = modules[path].default || modules[path];
}

export default images;
