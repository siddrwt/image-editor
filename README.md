# Image Editor

A lightweight browser-based image editor built with HTML, CSS, and JavaScript. It lets you upload an image, apply editing filters, use preset looks, and download the final result as an image.

## Features

- Upload any image from your device
- Live image preview on a canvas
- Adjustable filters for:
  - brightness
  - contrast
  - saturation
  - hue rotation
  - blur
  - grayscale
  - sepia
  - opacity
  - invert
- Prebuilt visual presets such as Vintage, Cinematic, Black & White, Retro, Sunset, Noir, and more
- Reset controls back to default values
- Download the edited image as a PNG

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Canvas API

## How It Works

The project uses an HTML `canvas` element to display the selected image. Each slider updates the `filter` property of the canvas context, allowing the image to be adjusted in real time. The project also includes preset buttons that instantly apply a saved combination of filter values.

## Project Structure

- `index.html` — app layout and controls
- `style.css` — main layout and UI styling
- `theme.css` — theme-related styling
- `script.js` — filter logic, presets, upload handling, and download behavior

## How to Run

1. Open the `image-editor` folder.
2. Open `index.html` in your browser.
3. Click `Choose image` to upload an image.
4. Adjust the filter sliders.
5. Click a preset to apply a styled effect.
6. Click `Download` to save the edited image.

You can also run it in VS Code using a live preview extension or Live Server for easier development.

## Example Workflow

1. Upload a photo
2. Increase contrast or brightness
3. Apply a preset like `Vintage` or `Cinematic`
4. Fine-tune using the individual sliders
5. Download the final result

## Notes

This is a beginner-friendly JavaScript project focused on learning the Canvas API and CSS filters. It is a good example of how DOM events, dynamic styling, and browser APIs can work together to build an interactive front-end tool.
