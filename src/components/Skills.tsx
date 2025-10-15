import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "JWT"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Vite"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Technologies and tools I work with
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-all">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {category.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-background rounded-full text-sm border border-border hover:border-primary/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
