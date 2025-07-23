export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  stat: string;
  title: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  gradient: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface FooterLink {
  href: string;
  label: string;
  onClick?: () => void;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
