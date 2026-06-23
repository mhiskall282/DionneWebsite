import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

export default function Settings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [users, setUsers] = useState<any[]>([]);
  const [me, setMe] = useState<any>(null);
  
  // New user state
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [newUser, setNewUser] = useState({ email: "", password: "", name: "", role: "MANAGER" });
  const [permissions, setPermissions] = useState<string[]>([]);
  
  const { toast } = useToast();
  const token = localStorage.getItem("admin_token");

  const availablePermissions = [
    { id: "manage_blogs", label: "Manage Blogs" },
    { id: "manage_books", label: "Manage Books" },
    { id: "manage_newsletters", label: "Manage Newsletters" },
    { id: "manage_users", label: "Manage Users" }
  ];

  useEffect(() => {
    fetchMe();
  }, []);

  const fetchMe = async () => {
    const res = await fetch("/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) {
      const data = await res.json();
      setMe(data.user);
      if (data.user.role === "ADMIN") {
        fetchUsers();
      }
    }
  };

  const fetchUsers = async () => {
    const res = await fetch("/api/auth/users", {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.ok) {
      const data = await res.json();
      setUsers(data);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
      const data = await res.json();
      if (res.ok) {
        toast({ title: "Success", description: "Password changed successfully" });
        setCurrentPassword("");
        setNewPassword("");
      } else {
        toast({ variant: "destructive", title: "Error", description: data.error });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Error", description: "Network error" });
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/users", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ ...newUser, permissions }),
      });
      const data = await res.json();
      if (res.ok) {
        toast({ title: "Success", description: "User created" });
        setIsAddUserOpen(false);
        setNewUser({ email: "", password: "", name: "", role: "MANAGER" });
        setPermissions([]);
        fetchUsers();
      } else {
        toast({ variant: "destructive", title: "Error", description: data.error });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Error", description: "Network error" });
    }
  };

  const handleDeleteUser = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      const res = await fetch(`/api/auth/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        toast({ title: "Success", description: "User deleted" });
        fetchUsers();
      } else {
        const data = await res.json();
        toast({ variant: "destructive", title: "Error", description: data.error });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Error", description: "Network error" });
    }
  };

  return (
    <div className="space-y-12 max-w-5xl">
      <div>
        <h1 className="text-3xl font-heading font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account and team privileges.</p>
      </div>

      <section className="bg-card p-6 rounded-2xl border border-border">
        <h2 className="text-xl font-bold mb-4">Change My Password</h2>
        <form onSubmit={handleChangePassword} className="space-y-4 max-w-md">
          <div>
            <label className="text-sm font-medium mb-1 block">Current Password</label>
            <Input type="password" required value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">New Password</label>
            <Input type="password" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          </div>
          <Button type="submit" className="bg-primary text-primary-foreground">Update Password</Button>
        </form>
      </section>

      {me?.role === "ADMIN" && (
        <section className="bg-card p-6 rounded-2xl border border-border">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold">Team Managers</h2>
              <p className="text-sm text-muted-foreground">Add editors or managers to help run your site.</p>
            </div>
            <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
              <DialogTrigger asChild>
                <Button>Add User</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add New Manager</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleCreateUser} className="space-y-4 pt-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Name</label>
                    <Input required value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email</label>
                    <Input type="email" required value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Password</label>
                    <Input type="password" required value={newUser.password} onChange={(e) => setNewUser({...newUser, password: e.target.value})} />
                  </div>
                  <div className="pt-2">
                    <label className="text-sm font-medium mb-2 block">Privileges</label>
                    <div className="grid grid-cols-1 gap-2">
                      {availablePermissions.map(p => (
                        <div key={p.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={p.id} 
                            checked={permissions.includes(p.id)}
                            onCheckedChange={(checked) => {
                              if (checked) setPermissions([...permissions, p.id]);
                              else setPermissions(permissions.filter(id => id !== p.id));
                            }}
                          />
                          <label htmlFor={p.id} className="text-sm cursor-pointer">{p.label}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button type="submit" className="w-full mt-4">Create User</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg">Name</th>
                  <th className="px-4 py-3">Email</th>
                  <th className="px-4 py-3">Role</th>
                  <th className="px-4 py-3">Privileges</th>
                  <th className="px-4 py-3 text-right rounded-tr-lg">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {users.map(user => (
                  <tr key={user.id} className="hover:bg-muted/50">
                    <td className="px-4 py-3 font-medium">{user.name || "N/A"}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3"><span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-bold">{user.role}</span></td>
                    <td className="px-4 py-3 max-w-[200px] truncate text-muted-foreground">
                      {JSON.parse(user.permissions).join(", ") || "None"}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {user.id !== me.id && (
                        <Button variant="destructive" size="sm" onClick={() => handleDeleteUser(user.id)}>Remove</Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
