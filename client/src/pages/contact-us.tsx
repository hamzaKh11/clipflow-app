import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description:
            "Your message has been sent. We'll get back to you soon!",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Error",
          description:
            "Failed to send message. Please try again or email us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description:
          "An error occurred. Please email support@myclipflow.com instead.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <p className="text-foreground/80 mb-6">
              Have questions, feedback, or found a bug? We'd love to hear from
              you. Fill out the form and we'll get back to you as soon as
              possible.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:support@myclipflow.com"
                  className="text-primary hover:underline"
                >
                  support@myclipflow.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-foreground/80">
                  We typically respond within 24-48 hours.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">What We're Looking For</h3>
                <ul className="list-disc list-inside space-y-2 text-foreground/80">
                  <li>Feature requests and suggestions</li>
                  <li>Bug reports and technical issues</li>
                  <li>User feedback and testimonials</li>
                  <li>Partnership inquiries</li>
                  <li>General questions</li>
                </ul>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                data-testid="input-contact-name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                data-testid="input-contact-email"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                data-testid="input-contact-subject"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you think..."
                rows={6}
                data-testid="textarea-contact-message"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
              data-testid="button-contact-submit"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        <div className="border-t pt-12">
          <h2 className="text-2xl font-semibold mb-6">FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">
                How long does it take to get a response?
              </h3>
              <p className="text-foreground/80">
                We aim to respond to all inquiries within 24-48 business hours.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">
                Do you offer technical support?
              </h3>
              <p className="text-foreground/80">
                Yes! If you're having trouble using ClipFlow, our team is here
                to help. Email us with details about your issue.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Can I suggest a feature?</h3>
              <p className="text-foreground/80">
                Absolutely! We love feature requests. The best features come
                from our users. Send us your ideas!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
