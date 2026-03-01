// components/Sidebar.tsx
import { LayoutDashboard, GraduationCap, Globe, Search, BarChart3 } from 'lucide-react';
import Logo from './Logo';

export default function Sidebar() {
  const menu = [
    { group: "PRODUCT", items: [
      { name: 'ScholaDiv Master', icon: <GraduationCap size={16} />, active: true },
      { name: 'Hajiri Center', icon: <LayoutDashboard size={16} /> },
    ]},
    { group: "SERVICES", items: [
      { name: 'Web & App Dev', icon: <Globe size={16} /> },
      { name: 'SEO & Marketing', icon: <Search size={16} /> },
    ]}
  ];

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen border-r border-[#E8DEFD] bg-white p-6 flex flex-col">
      <div className="mb-10"><Logo /></div>
      <nav className="space-y-8">
        {menu.map((section) => (
          <div key={section.group}>
            <p className="text-[10px] font-bold text-gray-400 tracking-[0.1em] mb-3 px-2 uppercase">{section.group}</p>
            <div className="space-y-1">
              {section.items.map((item) => (
                <div key={item.name} className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-[13px] transition-all
                  ${item.active ? 'bg-[#E8DEFD] text-[#2D2A5E] font-semibold' : 'text-gray-500 hover:bg-gray-50 hover:text-[#2D2A5E]'}`}>
                  {item.icon} {item.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}