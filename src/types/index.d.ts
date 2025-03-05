// Type definitions for the application

// User type
export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
  isAuthenticated: boolean;
}

// Image type
export interface Image {
  id: string;
  url: string;
  prompt: string;
  userId: string;
  username: string;
  createdAt: string;
  likes: number;
  views: number;
  tags: string[];
  width: number;
  height: number;
}

// Gallery image with additional metadata
export interface GalleryImage extends Image {
  userAvatar?: string;
  isLiked?: boolean;
  isSaved?: boolean;
}

// Authentication context type
export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, username: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

// Language option type
export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
}