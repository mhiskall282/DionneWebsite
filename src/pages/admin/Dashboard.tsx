import { BookOpen, Mail, PenTool } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const cards = [
    { name: "Manage Blogs", icon: PenTool, path: "/admin/blogs", desc: "Create and edit blog posts" },
    { name: "Manage Books", icon: BookOpen, path: "/admin/books", desc: "Add new books to your store" },
    { name: "Newsletter", icon: Mail, path: "/admin/newsletter", desc: "View subscribers and send emails" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold font-heading text-primary mb-2">Welcome Back, Dionne!</h1>
      <p className="text-muted-foreground mb-8">What would you like to manage today?</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Link key={card.name} to={card.path}>
              <div className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-all duration-300 border border-border group cursor-pointer h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{card.name}</h3>
                <p className="text-muted-foreground text-sm">{card.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
