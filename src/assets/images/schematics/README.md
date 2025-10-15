# Schematic Images

Place your carbon capture schematic and other process flow diagrams in this directory.

## Recommended Setup for Carbon Capture Schematic:

1. **Save your image as**: `carbon-capture-schematic.png` (or .jpg, .svg)
2. **In ProcessFlowSection.tsx**, replace the placeholder with:

```tsx
// Add this import at the top
import carbonCaptureImg from '../assets/images/schematics/carbon-capture-schematic.png';

// Replace the placeholder div with:
<div className="mb-12">
  <div className="flex justify-center">
    <img 
      src={carbonCaptureImg}
      alt="Carbon Capture Process Schematic"
      className="max-w-full h-auto border border-gray-300"
    />
  </div>
</div>
```

## Image Specifications:
- **Format**: PNG, JPG, or SVG
- **Size**: Optimally sized for web (under 1MB)
- **Dimensions**: Wide format works best (e.g., 1200x600px)
- **Background**: Transparent or white background recommended
