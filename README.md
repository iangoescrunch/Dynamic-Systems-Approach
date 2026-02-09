# Dynamic Systems Graduate Seminar Blog

A comprehensive blog exploring Thelen & Smith's (1994) *A Dynamic Systems Approach to the Development of Cognition and Action* through both personal reflections and technical theoretical analyses.

## Project Overview

This graduate seminar blog demonstrates two complementary approaches to engaging with developmental systems theory:

1. **Personal Reflections** - First-person graduate student voice connecting theoretical concepts to personal experience, using concrete examples and metaphors to illuminate abstract principles
2. **Technical Analyses** - Graduate-level theoretical exposition reconstructing Thelen's arguments about how dynamic systems redefines developmental explanation, focusing on what counts as adequate explanation in developmental science

## Current Status

**Chapters 3-4**: Complete with both reflection and analysis  
**Chapter 5**: Technical analysis complete (reflection pending)

## Project Structure

```
outputs/
├── index.html                     # Homepage with chapter sections
├── style.css                      # Comprehensive stylesheet
├── script.js                      # Reading time & animations
│
├── chapter3-reflection.html       # Personal: Horse gaits & phase transitions
├── chapter3-analysis.html         # Technical: Dynamic systems framework
│
├── chapter4-reflection.html       # Personal: Drumming & control parameters
├── chapter4-analysis.html         # Technical: Developmental timescales
│
├── chapter5-analysis.html         # Technical: Neural mechanisms (TNGS, Freeman)
│
└── README.md                      # This file
```

## Writing Approaches

### Personal Reflections
- First-person graduate student voice
- Connect theory to lived experience
- Use concrete examples (horse gaits, drumming, coding)
- Metaphors and accessible language
- ~800-1000 words

**Example triggers**: Personal examples, "I think about...", biographical elements

### Technical Analyses  
- Graduate-level theoretical exposition
- Reconstruct Thelen's arguments rigorously
- Use developmental psychology vocabulary as analytical tools
- Focus on what counts as adequate explanation
- No personal voice unless doing theoretical work
- ~1000-1300 words

**Example triggers**: Theoretical framework, experimental implications, explanatory mechanisms

## Completed Content

### Chapter 3: Exploring Paradigms for Change
**Reflection**: Horse gaits as paradigm for phase transitions, self-organization, and attractor dynamics  
**Analysis**: Dynamic systems as alternative to teleological explanation; Belousov-Zhabotinskii reaction; far-from-equilibrium dynamics

### Chapter 4: Dynamic Principles of Development  
**Reflection**: Tempo as control parameter in drumming; asynchronous development across coding/drumming domains  
**Analysis**: Bridging real-time to developmental timescales; Bernstein's degrees of freedom; infant kicking self-organization; control parameters

### Chapter 5: Neural Organization and Development
**Analysis**: Freeman's chaos in olfactory perception; Georgopoulos' population coding; Edelman's TNGS; selection vs construction

## Features
- Dual post types per chapter (reflection + analysis)
- Responsive card-based homepage
- Chapter navigation (previous/next)
- Reading time calculator
- Fade-in animations
- Mobile responsive
- Clean, academic design

## Deployment to GitHub Pages

### Quick Start
1. Create a new repository on GitHub
2. Upload all HTML, CSS, and JS files
3. Go to Settings > Pages
4. Select branch (main) and root directory
5. Site will be live at `https://yourusername.github.io/repository-name/`

### Using Git Command Line
```bash
# Initialize repository
git init

# Add all files
git add *.html style.css script.js README.md

# Commit
git commit -m "Add Dynamic Systems seminar blog - Chapters 3-5"

# Add remote and push
git remote add origin https://github.com/yourusername/your-repo.git
git branch -M main
git push -u origin main

# Enable GitHub Pages in Settings > Pages on GitHub
```

## Navigation Structure

```
Homepage (index.html)
│
├── Chapter 3: Exploring Paradigms for Change
│   ├── Personal Reflection → chapter3-reflection.html
│   └── Technical Analysis → chapter3-analysis.html
│
├── Chapter 4: Dynamic Principles of Development
│   ├── Personal Reflection → chapter4-reflection.html
│   └── Technical Analysis → chapter4-analysis.html
│
└── Chapter 5: Neural Organization and Development
    └── Technical Analysis → chapter5-analysis.html

Each page includes:
├── Top navigation: Home | Previous | Next
└── Bottom navigation: Home | Previous | Next
```

## Adding New Content

### Adding a New Reflection
1. Copy an existing reflection HTML file
2. Update header, meta tags, and navigation links
3. Replace article content with new reflection
4. Update tags in footer
5. Add card to homepage `index.html`

### Adding a New Analysis
1. Copy an existing analysis HTML file
2. Update header, meta tags, and navigation links
3. Replace article content with new analysis
4. Update tags in footer
5. Add card to homepage `index.html`

### Adding a New Chapter Section
In `index.html`, add new chapter section:
```html
<section class="chapter-section">
    <h2>Chapter N: Title</h2>
    <div class="post-cards">
        <article class="post-card">
            <div class="post-type">Personal Reflection</div>
            <h3>Your reflection title</h3>
            <p>Description...</p>
            <a href="chapterN-reflection.html" class="read-link">Read reflection →</a>
        </article>
        <article class="post-card">
            <div class="post-type">Technical Analysis</div>
            <h3>Your analysis title</h3>
            <p>Description...</p>
            <a href="chapterN-analysis.html" class="read-link">Read analysis →</a>
        </article>
    </div>
</section>
```

## Customization

### Colors (in style.css)
- Primary blue: `#3498db`
- Dark text: `#2c3e50`
- Gray text: `#7f8c8d`
- Light gray: `#ecf0f1`
- Background gradient: `#f5f7fa` to `#c3cfe2`

### Typography
Default system font stack:
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

### Layout
- Max content width: 900px
- Padding: 2rem
- Card-based design with hover effects

## Technical Details

### CSS Features
- CSS Grid for post cards
- Flexbox for navigation
- Smooth transitions and animations
- Responsive breakpoints at 768px
- Fade-in animations on load

### JavaScript Features
- Reading time calculator (200 words/min)
- Smooth scroll
- Staggered card animations on homepage
- Modular, non-intrusive code

## Browser Compatibility

Tested and working on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Pedagogical Philosophy

This blog demonstrates two essential modes of academic engagement:

1. **Reflective Practice**: Making theory personally meaningful through lived experience, building intuition and deep understanding
2. **Analytical Rigor**: Reconstructing theoretical arguments with precision, evaluating explanatory adequacy, mastering disciplinary vocabulary

Both are necessary for graduate-level mastery of complex theoretical frameworks. Reflections build conceptual intuition; analyses develop theoretical precision.

## Course Information

- **Course**: Perception and Action Graduate Seminar
- **Institution**: University of Central Oklahoma
- **Program**: Experimental Psychology
- **Term**: Spring 2026
- **Primary Text**: Thelen, E., & Smith, L. B. (1994). *A Dynamic Systems Approach to the Development of Cognition and Action*. MIT Press.

## Development Notes

### Completed Work
- Chapters 3-4: Full suite (reflection + analysis)
- Chapter 5: Technical analysis (reflection pending)
- Homepage with organized chapter sections
- Responsive navigation system
- Professional academic design

### Future Development
- Additional chapter reflections and analyses as seminar progresses
- Potential integration of figures/diagrams from source text
- Possible addition of interactive demonstrations
- Citation system if needed for academic submission

## License

Educational use only. Content represents original graduate student work for academic coursework.

## Acknowledgments

Built for graduate seminar coursework exploring dynamic systems theory in developmental psychology. All content represents personal engagement with Thelen & Smith's groundbreaking theoretical framework.
