import { useState } from "react";
import { Scale, BookOpen, Briefcase, GraduationCap } from "lucide-react";

const roles = [
  {
    id: "lawyer",
    title: "Lawyer",
    icon: Scale,
    description:
      "Dionne Akom Tweneboah is an attorney-at-law committed to driving diplomatic change and delivering justice with integrity and compassion.",
  },
  {
    id: "author",
    title: "Author",
    icon: BookOpen,
    description:
      "As an author, Dionne uses her voice to inspire growth, clarity, and purpose in others through her bestselling books and writings.",
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur",
    icon: Briefcase,
    description:
      "Dionne is a visionary entrepreneur building impactful solutions shaped by her Kumasi-rooted drive and innovation.",
  },
  {
    id: "coach",
    title: "Coach",
    icon: GraduationCap,
    description:
      "As a coach, Dionne empowers individuals, especially women and youth, to unlock confidence, direction, and their full potential.",
  },
];

const RoleTabs = () => {
  const [activeRole, setActiveRole] = useState("lawyer");

  return (
    <div className="space-y-6">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-3">
        {roles.map((role) => {
          const Icon = role.icon;
          const isActive = activeRole === role.id;
          return (
            <button
              key={role.id}
              onClick={() => setActiveRole(role.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
            >
              <Icon size={18} />
              <span>{role.title}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="p-6 bg-muted/50 rounded-lg border border-border animate-fade-up">
        {roles.map((role) => (
          <div
            key={role.id}
            className={activeRole === role.id ? "block" : "hidden"}
          >
            <p className="text-foreground leading-relaxed">
              {role.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleTabs;
