import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("admin_token", data.token);
        toast({ title: "Success", description: "Logged in successfully" });
        navigate("/admin/dashboard");
      } else {
        toast({ variant: "destructive", title: "Error", description: data.error || "Login failed" });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Error", description: "Failed to connect to backend" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="glass-card w-full max-w-md p-8 rounded-2xl animate-fade-up">
        <div className="text-center mb-8">
          <h1 className="font-heading text-3xl font-bold text-primary mb-2">Admin Portal</h1>
          <p className="text-muted-foreground">Secure access to Dionne's CMS</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="hello@dionnetweneboah.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full h-12 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg transition-all hover:-translate-y-1">
            {isLoading ? "Authenticating..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}
