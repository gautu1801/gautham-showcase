import { GraduationCap, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-border/50 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-muted-foreground">
                      Currently pursuing my undergraduate degree at SRM University, 
                      where I'm building a strong foundation in computer science 
                      and software engineering.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-all">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Code2 className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
                    <p className="text-muted-foreground">
                      Specialized in the MERN stack (MongoDB, Express.js, React, Node.js),
                      creating full-stack web applications with modern technologies
                      and best practices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6 border-border/50">
            <CardContent className="pt-6">
              <p className="text-center text-muted-foreground">
                I'm passionate about learning new technologies and building projects that solve
                real-world problems. My goal is to create efficient, scalable, and user-friendly
                applications that make a positive impact.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
