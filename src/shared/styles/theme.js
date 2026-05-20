// Accessibility-first theme for elderly users with dementia
// Large text, high contrast, simple colors

export const theme = {
  colors: {
    primary: '#4A90E2', // Calm blue
    secondary: '#F5A623', // Warm orange
    background: '#FFFFFF', // Clean white
    cardBackground: '#F0F0F0', // Light gray
    text: '#333333', // Dark text
    success: '#7ED321', // Green for positive feedback
    warning: '#D0021B', // Red for alerts
    border: '#CCCCCC', // Light border
  },

  typography: {
    // Large fonts for readability
    display: {
      fontSize: 36,
      fontWeight: '700',
      lineHeight: 44,
    },
    heading: {
      fontSize: 28,
      fontWeight: '600',
      lineHeight: 36,
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 32,
    },
    body: {
      fontSize: 18,
      fontWeight: '400',
      lineHeight: 26,
    },
    button: {
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 24,
    },
  },

  spacing: {
    xs: 8,
    sm: 12,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },

  borderRadius: {
    small: 8,
    medium: 12,
    large: 16,
  },

  // Minimum touch target size (48x48dp recommended for elderly)
  touchTarget: 56,
};

// Consistent padding for main content areas
export const containerPadding = theme.spacing.lg;

// High contrast text styles
export const textStyles = {
  display: {
    color: theme.colors.text,
    fontSize: theme.typography.display.fontSize,
    fontWeight: theme.typography.display.fontWeight,
  },
  heading: {
    color: theme.colors.text,
    fontSize: theme.typography.heading.fontSize,
    fontWeight: theme.typography.heading.fontWeight,
  },
  title: {
    color: theme.colors.text,
    fontSize: theme.typography.title.fontSize,
    fontWeight: theme.typography.title.fontWeight,
  },
  body: {
    color: theme.colors.text,
    fontSize: theme.typography.body.fontSize,
    fontWeight: theme.typography.body.fontWeight,
  },
};
