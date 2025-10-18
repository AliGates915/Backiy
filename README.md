<!-- # Pattern Craft -->

> _**For developers, by a developer. Design that slaps⚡**_

<div align="center">
  <img src="./public/images/readme-banner.png" alt="Pattern Craft Banner" />
  <br><br>
  <p align="left">
    <strong>Effortlessly enhance your websites and apps with 100+ modern CSS background patterns and gradient snippets.</strong>
    Instantly copy and paste beautifully crafted, production-ready designs built with modern CSS and Tailwind CSS for seamless integration.<br>
    </br>
    <em>Ideal for developers and designers working with React, Next.js, Vue, Angular, or any modern frontend framework. Made for devs who appreciate great design.</em>
    </br>
  </p>
  <br>
  <p align="center">
    <img src="https://img.shields.io/github/stars/megh-bari/pattern-craft?style=social" alt="GitHub stars" />
<img src="https://img.shields.io/github/forks/megh-bari/pattern-craft?style=social" alt="GitHub forks" />
<img src="https://img.shields.io/github/license/megh-bari/pattern-craft?style=social" alt="License" />
<a href="https://vercel.com/oss">
    <img src="https://img.shields.io/badge/Sponsored%20by-Vercel-000000?style=social&logo=vercel&logoColor=black" alt="Sponsored by Vercel" />
</a>
    
  </p>
</div>

---

> **This project is proudly sponsored by [Vercel](https://vercel.com/oss). Thank you for supporting open source!**

  <p align="center">
<a href="https://vercel.com/oss">
<img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" alt="Powered by Vercel" height="40">
</a>
</p>

## Visit: **[Backify Craft](https://patterncraft.fun)**

![UI Image](./public/images/readme-img-one.png)
![UI Image](./public/images/readme-img-two.png)
![UI Image](./public/images/readme-img-four.png)
![UI Image](./public/images/readme-img-three.png)

> _**Note: This project does not provide plain HTML or vanilla CSS snippets. All code is optimized for JSX (React/Next.js) and Tailwind CSS.**_  
> [Learn more in this announcement.](https://github.com/megh-bari/pattern-craft/discussions/24)

## Pattern Craft in the Wild!!!

<p align="left"> 
Curious where Pattern Craft is getting featured, shared, talk about or appreciated? 
</br>
Check out this growing list of shoutouts, showcases, and love from the community:  
</br>

⚡[**Where Pattern Craft is Making Noise??**](https://patterncraft.notion.site/Where-Pattern-Craft-is-Making-Noise-23bf940b4137803ea79bf3606acdb317?pvs=74)
</p>


## Features

- **Ready-to-use CSS code** - Copy and paste directly into your projects
- **Live preview** - See patterns in action before implementation
- **Modern design** - Crafted with contemporary CSS techniques and Tailwind CSS
- **Responsive patterns** - Optimized for all screen sizes
- **Zero dependencies** - Pure CSS implementations
- **Pattern categories** - Organized collection for easy browsing
- **Return back to scroll** - Smooth navigation experience
- **Add to favorites** - Save your preferred patterns
- **Customizable snippets** - Easily modify patterns to fit your needs

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment and hosting

## Sponsored by <a href="https://vercel.com/oss">Vercel⚡</a>

**This project is proudly powered by <b>Vercel</b>. The platform behind BackifyCraft’s blazing-fast deployment and seamless scalability.**<br>

<i>Big thanks to Vercel for supporting open source and keeping this project running smoothly!</i>
<br><br>
<a href="https://vercel.com/oss">
<img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" alt="Powered by Vercel" height="40">
</a>

</p>

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/megh-bari/pattern-craft.git
cd pattern-craft
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## How to Use This

1. Visit the live site: **[https://patterncraft.fun](https://backify-craft.vercel.app/)**
2. Browse through the collection of background patterns and gradients.
3. Click on any pattern to open its preview modal.
4. Copy the CSS/Tailwind-compatible code snippet.
5. Paste it into your project wherever needed — it's responsive, clean, and ready to go!

These snippets work great for:

- Hero sections
- Landing pages
- Cards and sections
- Background art


## Customization

### Manual Pattern Customization

You can easily customize any background pattern by modifying the pattern object structure. Each pattern follows this format:

```typescript
{
  id: "unique-pattern-id",
  name: "Pattern Display Name",
  badge: "New",
  style: {
    background: "#ffffff",
    backgroundImage: `
      // Your CSS background patterns here
      linear-gradient(to right, #f0f0f0 1px, transparent 1px),
      radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
    `,
    backgroundSize: "96px 64px, 100% 100%",
  },
  code: `<div className="min-h-screen w-full bg-white relative">
  {/* Pattern Name Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        // Your background image styles
      \`,
      backgroundSize: "96px 64px, 100% 100%",
    }}
  />
  {/* Your Content/Components */}
</div>`,
}
```

### Customization Tips

**Colors**: Change hex values in `backgroundImage` gradients
**Sizing**: Modify `backgroundSize` values for different scales
**Positioning**: Adjust gradient positions and directions
**Effects**: Add multiple background layers for complex patterns

### Example Customization

```typescript
// Original pattern
backgroundImage: `linear-gradient(to right, #f0f0f0 1px, transparent 1px)`;

// Customized version
backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px)`; // Blue lines
backgroundSize: "48px 32px"; // Smaller grid
```

## Usage

1. Browse the pattern collection on the website
2. Click on any pattern to see the live preview
3. Use the "Add to Favorites" feature to save patterns you like
4. Copy the generated CSS code
5. Paste it into your project

Each pattern includes:

- Complete CSS styling
- Tailwind-compatible code
- Responsive implementation
- Cross-browser compatibility


```typescript
{
  id: "unique-pattern-id",
  name: "Pattern Display Name",
  category: "gradients" | "geometric" | "decorative" | "effects",
  badge: "New", // Optional: "New"
  style: {
    background: "#ffffff",
    backgroundImage: `
      // Your CSS background patterns here
      linear-gradient(to right, #f0f0f0 1px, transparent 1px),
      radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
    `,
    backgroundSize: "96px 64px, 100% 100%",
  },
  code: `<div className="min-h-screen w-full bg-white relative">
  {/* Pattern Name Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        // Your background image styles
      \`,
      backgroundSize: "96px 64px, 100% 100%",
    }}
  />
  {/* Your Content/Components */}
</div>`,
}
```

### Contribution Guidelines

- **Consistency**: Follow the existing pattern structure exactly
- **Naming**: Use descriptive, kebab-case IDs and proper display names
- **Quality**: Ensure patterns are visually appealing and professional
- **Performance**: Optimize for rendering performance
- **Responsiveness**: Test patterns across different screen sizes
- **Uniqueness**: Avoid duplicating existing patterns

### Pattern Categories

Consider these categories when adding patterns:

- **Gradient** - Color transitions and blends
- **Geometric** - Grids, dots, lines, shapes
- **Decorative** - Subtle background textures
- **Effects** - Clean and simple designs

### Testing Your Patterns

1. Test the pattern in the development environment
2. Verify responsive behavior
3. Check browser compatibility (Chrome, Firefox, Safari, Edge)
4. Ensure code validity and formatting

### Pull Request Process

1. Commit your changes with descriptive messages
2. Push to your feature branch
3. Create a pull request with:
   - Clear description of the pattern added
   - Screenshots or preview of the pattern
   - Any special considerations or notes

```bash
git add .
git commit -m "feat: add new geometric grid pattern"
git push origin feature/new-pattern-name
```

> _**Happy coding!**_
