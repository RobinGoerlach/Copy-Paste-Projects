# **Static HTML Boilerplate Project**

This project serves as a boilerplate for creating a static HTML website with a modular structure. It is designed to be flexible, scalable, and easy to maintain, featuring separate directories for different assets, seasonal themes, and external dependencies.

## Features

- **Modular Structure:** Organized directories for CSS, JavaScript, images, fonts, and more.
- **Seasonal Themes:** Easily switchable CSS designs for holidays such as Christmas, Easter, or Halloween.
- **Vendor Support:** External dependencies (e.g., Normalize.css, jQuery) are clearly separated in the `vendor/` folder.
- **Reusable Components:** Shared UI elements like headers, footers, and buttons are stored in their respective folders.
- **Clear Separation:** Page-specific styles and scripts are isolated to avoid conflicts and improve maintainability.

## Project Structure

```text
project/
├── index.html                      # Main HTML file (homepage)
├── about.html                      # Example additional page (About Us)
├── contact.html                    # Example additional page (Contact)
├── assets/                         # Main directory for all assets
│   ├── css/                        # CSS files for styling
│   │   ├── main.css                # Global CSS rules for the entire project
│   │   ├── reset.css               # Optional: Reset or Normalize CSS
│   │   ├── pages/                  # Page-specific CSS files
│   │   │   ├── home.css            # CSS specific to the homepage
│   │   │   ├── about.css           # CSS specific to the About Us page
│   │   │   └── contact.css         # CSS specific to the Contact page
│   │   ├── components/             # Reusable CSS components
│   │   │   ├── header.css          # CSS for the header component
│   │   │   ├── footer.css          # CSS for the footer component
│   │   │   └── button.css          # CSS for button styling
│   │   └── themes/                 # CSS for seasonal and thematic designs
│   │       ├── christmas.css       # Christmas-themed styles
│   │       ├── easter.css          # Easter-themed styles
│   │       ├── summer.css          # Summer-themed styles
│   │       └── halloween.css       # Halloween-themed styles
│   ├── js/                         # JavaScript files for functionality
│   │   ├── main.js                 # Main JavaScript file for the project
│   │   ├── utils.js                # Utility/helper functions
│   │   ├── pages/                  # Page-specific JavaScript files
│   │   │   ├── home.js             # JavaScript for the homepage
│   │   │   ├── about.js            # JavaScript for the About Us page
│   │   │   └── contact.js          # JavaScript for the Contact page
│   │   ├── components/             # JavaScript for the Contact page
│   │   │   ├── header.js           # JavaScript for the footer component
│   │   │   └── footer.js           # Logic to dynamically load seasonal themes
│   │   └── themes.js               # Logic for switching Themes
│   ├── images/                     # Images and icons
│   │   ├── logo.png                # Logo image
│   │   ├── banner.jpg              # Banner image for the homepage
│   │   ├── icons/                  # Small icons used throughout the project
│   │   │   ├── home.svg            # Icon for the homepage
│   │   │   └── search.svg          # Icon for the search functionality
│   │   └── themes/                 # Images for seasonal themes
│   │       ├── christmas/          # Christmas-themed images
│   │       │   ├── background.jpg  # Background for Christmas
│   │       │   └── snowflake.png   # Snowflake icon
│   │       ├── easter/             # Easter-themed images
│   │       │   ├── bunny.png       # Easter bunny
│   │       │   └── eggs.png        # Easter eggs
│   │       ├── summer/             # Summer-themed images
│   │       │   └── sun.png         # Sun icon
│   │       └── halloween/          # Halloween-themed images
│   │       └── pumpkin.png         # Pumpkin icon
│   ├── fonts/                      # Fonts used in the project
│   │   ├── roboto.woff2            # Example: Roboto font
│   │   ├── open-sans.woff2         # Example: Open Sans font
│   │   └── vendor/                 # External fonts (e.g., from Font Awesome)
│   │   ├── fontawesome.woff2       # Font Awesome icons
│   └── vendor/                     # External libraries and dependencies
│       ├── css/
│       │   └── normalize.css       # Normalize.css for consistent cross-browser styles
│       ├── js/
│       │   └── jquery.min.js       # jQuery library
│       └── fonts/
│           └── roboto-vendor.woff2 # Roboto font from an external source
├── README.md                       # Project description and usage guide
└── DEPENDENCIES.md                 # Documentation of external dependencies (versions, sources)
```

## How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo-name/static-html-boilerplate.git
   ```

2. Open index.html in your browser to preview the site.
3. Add or modify assets in the respective directories:
   - Add global CSS rules in main.css.
   - Create or update page-specific CSS in the pages/ folder.
   - Add seasonal themes in the themes/ folder.
4. To use external dependencies, include the necessary files from the vendor/ directory.

## Seasonal Themes

The project includes CSS files for holidays and seasons:

- Christmas: assets/css/themes/christmas.css
- Easter: assets/css/themes/easter.css
- Summer: assets/css/themes/summer.css
- Halloween: assets/css/themes/halloween.css
  You can load these themes dynamically via JavaScript or manually include them in the HTML head.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
