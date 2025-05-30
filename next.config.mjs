/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development'

// Headers de sécurité fusionnés et optimisés
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `default-src 'self'; script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ''}; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https://cdn-icons-png.flaticon.com https://*.githubusercontent.com; font-src 'self' data:; connect-src 'self' https://api.github.com; media-src 'self' blob: data:; object-src 'none'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';`
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "X-Frame-Options",
    value: "DENY"
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin"
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()"
  },
  // Headers additionnels pour la sécurité
  {
    key: "X-DNS-Prefetch-Control",
    value: "on"
  }
];

const nextConfig = {
  // Active les headers de sécurité pour toutes les routes
  async headers() {
    return [
      {
        source: "/(.*)", // s'applique à toutes les pages
        headers: securityHeaders,
      },
    ];
  },

  // Configuration des images pour le générateur de signature
  images: {
    domains: [
      'masignaturemail.com',
      'cdn-icons-png.flaticon.com',
      'raw.githubusercontent.com'
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256]
  },

  // Internationalisation (optionnelle - prête pour plus tard)
  // i18n: {
  //   locales: ['fr', 'en'],
  //   defaultLocale: 'fr',
  //   localeDetection: false, // Désactive la détection auto si pas besoin
  // },

  // Active le strict mode React
  reactStrictMode: true,

  // Optimisations de performance
  swcMinify: true,
  
  // Configuration de compilation pour les performances
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn']
    } : false,
  },

  // Configuration expérimentale pour les performances
  experimental: {
    // Optimisation des fonts
    optimizeFonts: true,
    // Optimisation des images
    images: {
      allowFutureImage: true
    },
    // Pré-chargement moderne
    modularizeImports: {
      'lucide-react': {
        transform: 'lucide-react/dist/esm/icons/{{member}}'
      }
    }
  },

  // Variables d'environnement pour le générateur de signature
  env: {
    SIGNATURE_BUILDER_VERSION: '1.0.0',
    CUSTOM_KEY: 'signature_email_generator'
  },

  // Configuration Webpack personnalisée si nécessaire
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Optimisation pour les SVG
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    // Retourne la config modifiée
    return config;
  },

  // Redirections utiles
  async redirects() {
    return [
      // Exemple de redirection si besoin
      // {
      //   source: '/signature',
      //   destination: '/generator',
      //   permanent: true,
      // },
    ];
  },

  // Configuration des rewrites si nécessaire
  async rewrites() {
    return [
      // Exemple de rewrite pour API
      // {
      //   source: '/api/signature/:path*',
      //   destination: '/api/generator/:path*',
      // },
    ];
  }
};

export default nextConfig;