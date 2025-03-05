// User types
export interface User {
  id: number;
  username: string;
  email: string;
  activePackages: string[];
}

// Theme types
export type ThemeType = 'theme-blue' | 'theme-dark' | 'theme-red' | 'theme-green' | 'theme-navy' | 'theme-purple';

// Language types
export interface Language {
  code: string;
  name: string;
}

// Stat card types
export interface StatCardData {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

// Chart data types
export interface ChartDataPoint {
  name: string;
  users: number;
}