import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download, Send, Copy, Mail } from "lucide-react";

export default function NewsletterManager() {
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [isComposing, setIsComposing] = useState(false);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const token = localStorage.getItem("admin_token");

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const res = await fetch("/api/newsletter", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (res.ok) setSubscribers(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    try {
      const res = await fetch("/api/newsletter/export", {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (!res.ok) throw new Error("Export failed");
      
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "subscribers.xlsx";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      toast({ variant: "destructive", title: "Error exporting data" });
    }
  };

  const handleCopyEmails = () => {
    const emails = subscribers.map(s => s.email).join(", ");
    navigator.clipboard.writeText(emails);
    toast({ title: "Emails copied to clipboard!" });
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirm(`Are you sure you want to send this email to ${subscribers.length} subscribers?`)) return;
    
    setSending(true);
    try {
      const res = await fetch("/api/newsletter/send", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify({
          subject: emailSubject,
          message: emailMessage,
          recipientEmails: subscribers.map(s => s.email)
        }),
      });

      if (res.ok) {
        toast({ title: "Email sent successfully!" });
        setIsComposing(false);
        setEmailSubject("");
        setEmailMessage("");
      } else {
        const data = await res.json();
        toast({ variant: "destructive", title: "Error sending email", description: data.error });
      }
    } catch (err) {
      toast({ variant: "destructive", title: "Failed to send email" });
    } finally {
      setSending(false);
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  if (isComposing) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold font-heading">Compose Email</h1>
          <Button variant="outline" onClick={() => setIsComposing(false)}>Cancel</Button>
        </div>

        <form onSubmit={handleSendEmail} className="space-y-6 bg-card p-6 rounded-xl border border-border shadow-sm">
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/20 flex items-center gap-3">
            <Mail className="text-primary" />
            <div>
              <p className="font-semibold text-primary">Branded HTML Template applied</p>
              <p className="text-sm text-muted-foreground">Your emails will be sent using Dionne's Burgundy/Gold brand theme.</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">To</label>
            <input type="text" disabled className="w-full p-3 border rounded-lg bg-muted text-muted-foreground" value={`All ${subscribers.length} Subscribers`} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <input required type="text" className="w-full p-3 border rounded-lg" value={emailSubject} onChange={e => setEmailSubject(e.target.value)} />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message (Plain text, will be formatted into HTML)</label>
            <textarea required rows={10} className="w-full p-3 border rounded-lg text-sm" value={emailMessage} onChange={e => setEmailMessage(e.target.value)} />
          </div>

          <Button type="submit" disabled={sending || subscribers.length === 0} className="w-full h-12 text-lg flex items-center justify-center gap-2">
            <Send size={18} /> {sending ? "Sending..." : "Send Email Broadcast"}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-3xl font-bold font-heading text-primary">Newsletter Subscribers</h1>
        <div className="flex gap-2 flex-wrap">
          <Button variant="outline" onClick={handleCopyEmails}>
            <Copy size={16} className="mr-2" /> Copy All
          </Button>
          <Button variant="outline" onClick={handleExport}>
            <Download size={16} className="mr-2" /> Export Excel
          </Button>
          <Button onClick={() => setIsComposing(true)}>
            <Send size={16} className="mr-2" /> Compose Email
          </Button>
        </div>
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <div className="p-4 bg-muted border-b border-border flex justify-between items-center">
          <span className="font-medium">Total Subscribers: {subscribers.length}</span>
        </div>
        <table className="w-full text-left">
          <thead className="bg-muted/50">
            <tr>
              <th className="p-4 font-medium">Email Address</th>
              <th className="p-4 font-medium">Subscribed Date</th>
              <th className="p-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.length === 0 ? (
              <tr><td colSpan={3} className="p-4 text-center text-muted-foreground">No subscribers yet.</td></tr>
            ) : subscribers.map(sub => (
              <tr key={sub.id} className="border-t border-border">
                <td className="p-4 font-medium">{sub.email}</td>
                <td className="p-4 text-sm text-muted-foreground">{new Date(sub.createdAt).toLocaleDateString()}</td>
                <td className="p-4">
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">Active</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
