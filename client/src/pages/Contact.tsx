import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Get in Touch</h1>
          <p className="text-muted-foreground text-lg">
            Have a question about an order, a product, or our artisan partners? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-medium mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-muted-foreground text-sm mb-1">For general inquiries:</p>
                    <a href="mailto:hello@ethicahome.com" className="text-primary hover:underline">hello@ethicahome.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Call Us</h4>
                    <p className="text-muted-foreground text-sm mb-1">Mon-Fri, 9am - 5pm EST</p>
                    <a href="tel:+15551234567" className="text-primary hover:underline">+1 (555) 123-4567</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Visit Our Showroom</h4>
                    <p className="text-muted-foreground text-sm">
                      123 Artisan Way<br />
                      Portland, OR 97204
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-secondary/30 rounded-lg">
              <h4 className="font-serif text-lg font-medium mb-2">FAQ</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Looking for quick answers about shipping, returns, or artisan sourcing?
              </p>
              <Button variant="outline" className="w-full bg-transparent border-primary text-primary hover:bg-primary hover:text-white">
                Visit Help Center
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-sm">
            <h3 className="font-serif text-2xl font-medium mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <Input id="firstName" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="jane@example.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <select className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option>Order Inquiry</option>
                  <option>Product Question</option>
                  <option>Wholesale Partnership</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
              </div>

              <Button type="submit" className="w-full" size="lg">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
