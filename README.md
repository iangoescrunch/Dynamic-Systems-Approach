# Dynamic Systems Graduate Seminar Blog

A multi-chapter blog for graduate seminar reflections on dynamic systems theory in perception and action, based on Thelen & Smith (1994).

## Project Structure

```
├── index.html                          # Homepage with chapter navigation
├── chapter3-reflection.html            # Chapter 3 reflection (updated with nav)
├── chapter4-reflection.html            # Chapter 4 reflection
├── style.css                           # Shared stylesheet
├── script.js                           # Shared JavaScript
└── README.md                           # This file
```

## Files Included

### Main Files
- `index.html` - Homepage with chapter grid and navigation
- `chapter3-reflection.html` - Updated Chapter 3 with navigation buttons
- `chapter4-reflection.html` - New Chapter 4 reflection
- `style.css` - Complete stylesheet with navigation and homepage styles
- `script.js` - JavaScript with reading time, animations, and keyboard navigation

### Features
- Responsive navigation between chapters
- Homepage with chapter grid (chapters 1-2 disabled/coming soon)
- Previous/Next chapter buttons
- Keyboard shortcuts (← → for navigation, H for home)
- Reading time calculator
- Smooth animations
- Mobile responsive
- Print-friendly

## Deployment to GitHub Pages

### Quick Start
1. Create a new repository on GitHub
2. Upload all files (index.html, chapter3-reflection.html, chapter4-reflection.html, style.css, script.js)
3. Go to Settings > Pages
4. Select branch (main) and root directory
5. Site will be live at `https://yourusername.github.io/repository-name/`

### Using Git Command Line
```bash
# Initialize repository
git init

# Add all files
git add index.html chapter3-reflection.html chapter4-reflection.html style.css script.js README.md

# Commit
git commit -m "Add Dynamic Systems seminar blog with chapters 3-4"

# Add remote and push
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main

# Enable GitHub Pages (or do this in Settings > Pages on GitHub)
```

### File Naming
Files are already named correctly:
- Homepage is `index.html` (will load as default page)
- Chapters use descriptive names for easy linking

## Navigation Structure

```
Homepage (index.html)
├── Chapter 1 (disabled/coming soon)
├── Chapter 2 (disabled/coming soon)
├── Chapter 3 → chapter3-reflection.html
└── Chapter 4 → chapter4-reflection.html

Each chapter page has:
├── Top navigation: Home | Previous | Next
└── Bottom navigation: Home | Previous | Next
```

## Keyboard Shortcuts

When viewing chapter pages:
- `←` Previous chapter
- `→` Next chapter
- `H` Return to homepage

## Adding New Chapters

To add Chapter 5 (or any new chapter):

1. Copy `chapter4-reflection.html`
2. Rename to `chapter5-reflection.html`
3. Update the content
4. Update navigation buttons:
   - Change "Chapter 4 →" to "Chapter 5 →"
   - Change disabled "Chapter 5 →" to enabled
5. Add to homepage `index.html`:
   ```html
   <a href="chapter5-reflection.html" class="chapter-card">
       <div class="chapter-number">Chapter 5</div>
       <h3>Your Chapter Title</h3>
       <p>Brief description</p>
       <span class="read-link">Read reflection →</span>
   </a>
   ```
6. Update Chapter 4's navigation to link to Chapter 5

## Customization

### Colors
Edit `style.css`:
- Primary blue: `#3498db`
- Dark text: `#2c3e50`
- Gray text: `#7f8c8d`
- Background: `#f5f5f5`

### Typography
Change font in `body` selector:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', ...
```

### Homepage Content
Edit `index.html` intro section and subtitle

## Browser Compatibility

Tested and working on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Course Information

- Course: Perception and Action Graduate Seminar
- Institution: University of Central Oklahoma
- Program: Experimental Psychology
- Text: Thelen, E., & Smith, L. B. (1994). *A Dynamic Systems Approach to the Development of Cognition and Action*

## License

Educational use only.

## Notes

This is a working project for graduate coursework. Chapters 1 and 2 are placeholders for future development. The blog will be updated throughout the semester as new chapter reflections are completed.
