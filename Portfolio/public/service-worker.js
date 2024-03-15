// src/service-worker.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('your-portfolio-v1').then((cache) => {
      return cache.addAll([
        // HTML, CSS, JS
        '/',
        '/index.html',
        '/manifest.json',
        '/postcss.config.cjs',
        '/tailwind.config.cjs',
        '/tsconfig.json',
        '/tsconfig.node.json',
        '/vite.config.ts',
        // Public
        '/background-pattern-dark-small.svg',
        '/background-pattern-light-small.svg',
        '/icon-144x144.png',
        '/icon-192x192.png',
        '/icon-512x512.png',
        '/Tibomessiaen.vcf',
        // Assets
        '/src/assets/imgs/AboutMe.jpg',
        '/src/assets/imgs/Blackjack.png',
        '/src/assets/imgs/placeholder.png',
        '/src/assets/imgs/Portfolio.png',
        '/src/assets/imgs/PortfolioMockup.png',
        '/src/assets/imgs/profileIcon.png',
        '/src/assets/imgs/profileIcon.png?import',
        '/src/assets/pdfs/Tibo_Messiaen_CV.pdf',
        '/src/assets/pdfs/Tibo_Messiaen_CV.pdf?import',
        '/src/assets/svgs/dartIcon.svg',
        '/src/assets/svgs/programmingIcon.svg',
        '/src/assets/svgs/swimmingIcon.svg',
        '/src/assets/videos/ProjectOneDemo.mp4',
        '/src/assets/videos/ProjectOneDemo.mp4?import',
        '/src/assets/videos/TeamProject1vs1Demo.mp4',
        '/src/assets/videos/TeamProject1vs1Demo.mp4?import',
        '/src/assets/videos/TeamProjectShuttleRunDemo.mp4',
        '/src/assets/videos/TeamProjectShuttleRunDemo.mp4?import',
        '/src/assets/Logo.png',
        '/src/assets/tailwind.css',
        // Pages
        '/src/main.tsx',
        '/src/routes/About.tsx',
        '/src/routes/Contact.tsx',
        '/src/routes/Home.tsx',
        '/src/routes/Learning.tsx',
        '/src/routes/Projects.tsx',
        //Components
        '/src/components/Aboutme.tsx',
        '/src/components/CloudinaryImage.tsx',
        '/src/components/ContactInfo.tsx',
        '/src/components/Container.tsx',
        '/src/components/EducationInfo.tsx',
        '/src/components/Header.tsx',
        '/src/components/Icon.tsx',
        '/src/components/ImageCarousel.tsx',
        '/src/components/InputField.tsx',
        '/src/components/LearningCard.tsx',
        '/src/components/ProjectInfo.tsx',
        '/src/components/ScrollArrow.tsx',
        '/src/components/SeperatorLine.tsx',
        '/src/components/Title.tsx',
        '/src/components/ToggleDarkmode.tsx',
        // Other
        '/src/main.tsx?t=1710532334821',
        '/src/assets/tailwind.css?t=1710532334821',
        '@react-refresh',
        'node_modules/vite/dist/client/env.mjs',
        '@id/__x00__react/jsx-dev-runtime',
        'robots.txt?import',
        'node_modules/vite/deps/chunk-KKDVDFEZ.js?v=1bc7e039',
        'https://raw.githubusercontent.com/MessiaenTibo/Portfolio/main/Portfolio/src/assets/Logo.png',
        '@vite/client',
      ]);
    }),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
