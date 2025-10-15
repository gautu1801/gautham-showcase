import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>

          <Card className="border-border/50">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-primary/50 hover:bg-primary/10 group"
                  onClick={() => window.location.href = "mailto:gautham@example.com"}
                >
                  <Mail className="mr-2 h-5 w-5 group-hover:text-primary" />
                  Email Me
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-primary/50 hover:bg-primary/10 group"
                >
                  <Linkedin className="mr-2 h-5 w-5 group-hover:text-primary" />
                  LinkedIn
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-primary/50 hover:bg-primary/10 group"
                >
                  <Github className="mr-2 h-5 w-5 group-hover:text-primary" />
                  GitHub
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-sm text-muted-foreground">
            <p>© 2024 Gautham Mohan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
