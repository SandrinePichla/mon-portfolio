import { useState } from 'react';
import { Menu, X, Home, User, Briefcase, Code, Mail, Award, Brain } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'about', label: 'À propos', icon: User },
    { id: 'experience', label: 'Expérience', icon: Briefcase },
    { id: 'skills', label: 'Compétences', icon: Award },
    { id: 'mindmap', label: 'Mind Map', icon: Brain },
    { id: 'portfolio', label: 'Portfolio', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-6 left-6 z-50 md:hidden p-2 rounded-lg bg-card border border-border"
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Navigation */}
      <nav className={`
        fixed left-0 top-0 h-full w-64 bg-card border-r border-border z-40
        transform transition-transform duration-300 ease-in-out
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="p-6">
          <h2 className="text-2xl font-display gradient-text mb-8">Portfolio</h2>
          
          <ul className="space-y-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    onSectionChange(id);
                    setIsMobileOpen(false);
                  }}
                  className={`
                    nav-link w-full flex items-center gap-3 text-left
                    ${activeSection === id ? 'active' : ''}
                  `}
                >
                  <Icon size={18} />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;