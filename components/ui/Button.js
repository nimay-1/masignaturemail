'use client';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Composant Button moderne et accessible utilisant les variables CSS harmonisées.
 *
 * @component
 * @example
 * ```jsx
 * <Button onClick={() => alert('Clicked!')} variant="primary" size="lg">
 *   Créer ma signature
 * </Button>
 * ```
 *
 * @param {React.ReactNode} children - Le contenu du bouton
 * @param {function} [onClick] - Fonction appelée au clic
 * @param {string} [className] - Classes CSS additionnelles
 * @param {boolean} [disabled=false] - État désactivé
 * @param {'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'warning' | 'error'} [variant='primary'] - Variante du bouton
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl'} [size='md'] - Taille du bouton
 * @param {'square' | 'rounded' | 'pill'} [shape='rounded'] - Forme du bouton
 * @param {boolean} [loading=false] - État de chargement
 * @param {React.ReactNode} [icon] - Icône à afficher
 * @param {'left' | 'right'} [iconPosition='left'] - Position de l'icône
 * @param {string} [type='button'] - Type HTML du bouton
 * @param {object} [rest] - Props additionnelles
 * @returns {React.ReactElement}
 */
const Button = React.memo(function Button({
  children,
  onClick,
  className = '',
  disabled = false,
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
  loading = false,
  icon,
  iconPosition = 'left',
  type = 'button',
  ...rest
}) {
  // Classes de base communes à tous les boutons
  const baseClasses = [
    // Layout & Display
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    
    // Typography
    'font-medium',
    'text-center',
    'leading-tight',
    'whitespace-nowrap',
    
    // Interactions
    'cursor-pointer',
    'select-none',
    'transition-all',
    'duration-200',
    'ease-out',
    'transform',
    
    // États
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-offset-2',
    'focus:ring-opacity-50',
    'disabled:opacity-60',
    'disabled:cursor-not-allowed',
    'disabled:transform-none',
    
    // Effets hover/active
    'hover:shadow-lg',
    'hover:-translate-y-0.5',
    'active:translate-y-0',
    'active:shadow-md'
  ];

  // Variantes de couleur
  const variants = {
    primary: [
      'bg-[var(--color-accent)]',
      'text-[var(--color-primary)]',
      'border-2',
      'border-[var(--color-accent)]',
      'shadow-md',
      'hover:bg-[var(--color-accent-hover)]',
      'hover:border-[var(--color-accent-hover)]',
      'focus:ring-[var(--color-accent)]',
      'disabled:bg-[var(--color-accent)]',
      'disabled:border-[var(--color-accent)]'
    ],
    secondary: [
      'bg-[var(--color-primary)]',
      'text-white',
      'border-2',
      'border-[var(--color-primary)]',
      'shadow-md',
      'hover:bg-[var(--color-primary-light)]',
      'hover:border-[var(--color-primary-light)]',
      'focus:ring-[var(--color-primary)]',
      'disabled:bg-[var(--color-primary)]',
      'disabled:border-[var(--color-primary)]'
    ],
    outline: [
      'bg-transparent',
      'text-[var(--color-primary)]',
      'border-2',
      'border-[var(--color-primary)]',
      'shadow-sm',
      'hover:bg-[var(--color-primary)]',
      'hover:text-white',
      'focus:ring-[var(--color-primary)]',
      'disabled:text-[var(--color-muted)]',
      'disabled:border-[var(--color-muted)]'
    ],
    ghost: [
      'bg-transparent',
      'text-[var(--color-primary)]',
      'border-2',
      'border-transparent',
      'shadow-none',
      'hover:bg-[var(--color-surface-hover)]',
      'hover:shadow-sm',
      'focus:ring-[var(--color-primary)]',
      'disabled:text-[var(--color-muted)]'
    ],
    success: [
      'bg-[var(--color-success)]',
      'text-white',
      'border-2',
      'border-[var(--color-success)]',
      'shadow-md',
      'hover:bg-green-600',
      'hover:border-green-600',
      'focus:ring-[var(--color-success)]'
    ],
    warning: [
      'bg-[var(--color-warning)]',
      'text-white',
      'border-2',
      'border-[var(--color-warning)]',
      'shadow-md',
      'hover:bg-yellow-600',
      'hover:border-yellow-600',
      'focus:ring-[var(--color-warning)]'
    ],
    error: [
      'bg-[var(--color-error)]',
      'text-white',
      'border-2',
      'border-[var(--color-error)]',
      'shadow-md',
      'hover:bg-red-600',
      'hover:border-red-600',
      'focus:ring-[var(--color-error)]'
    ]
  };

  // Tailles
  const sizes = {
    xs: [
      'px-3',
      'py-1.5',
      'text-xs',
      'min-h-[28px]'
    ],
    sm: [
      'px-4',
      'py-2',
      'text-sm',
      'min-h-[32px]'
    ],
    md: [
      'px-6',
      'py-2.5',
      'text-base',
      'min-h-[40px]'
    ],
    lg: [
      'px-8',
      'py-3',
      'text-lg',
      'min-h-[48px]'
    ],
    xl: [
      'px-10',
      'py-4',
      'text-xl',
      'min-h-[56px]'
    ]
  };

  // Formes
  const shapes = {
    square: ['rounded-none'],
    rounded: ['rounded-lg'],
    pill: ['rounded-full']
  };

  // Composant de chargement
  const LoadingSpinner = () => (
    <svg
      className="animate-spin w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  // Assemblage des classes
  const classes = [
    ...baseClasses,
    ...variants[variant],
    ...sizes[size],
    ...shapes[shape],
    className
  ].join(' ');

  // Gestion du contenu avec icône et loading
  const renderContent = () => {
    if (loading) {
      return (
        <>
          <LoadingSpinner />
          {typeof children === 'string' ? 'Chargement...' : children}
        </>
      );
    }

    if (icon && iconPosition === 'left') {
      return (
        <>
          <span className="flex-shrink-0">{icon}</span>
          {children}
        </>
      );
    }

    if (icon && iconPosition === 'right') {
      return (
        <>
          {children}
          <span className="flex-shrink-0">{icon}</span>
        </>
      );
    }

    return children;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...rest}
    >
      {renderContent()}
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'success', 'warning', 'error']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  shape: PropTypes.oneOf(['square', 'rounded', 'pill']),
  loading: PropTypes.bool,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

Button.displayName = 'Button';

export default Button;