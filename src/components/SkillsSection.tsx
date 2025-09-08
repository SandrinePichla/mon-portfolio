const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "SCSS", "Framer Motion"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      title: "DevOps & Outils",
      skills: ["Docker", "AWS", "Git", "CI/CD", "Webpack", "Vite", "Jest"]
    },
    {
      title: "Design",
      skills: ["Figma", "Adobe XD", "Photoshop", "UI/UX", "Responsive Design", "Accessibility"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display gradient-text mb-12 text-center">Compétences techniques</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-elegant p-6">
              <h3 className="text-xl font-display text-primary mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-muted/50 px-3 py-2 rounded-lg text-sm text-center hover:bg-primary/10 transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-display mb-8">Certifications & Formations</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-elegant p-6">
              <h4 className="font-semibold text-primary mb-2">AWS Certified Developer</h4>
              <p className="text-sm text-muted-foreground">Amazon Web Services - 2023</p>
            </div>
            
            <div className="card-elegant p-6">
              <h4 className="font-semibold text-primary mb-2">Master en Informatique</h4>
              <p className="text-sm text-muted-foreground">Université de Lyon - 2018</p>
            </div>
            
            <div className="card-elegant p-6">
              <h4 className="font-semibold text-primary mb-2">Google UX Design</h4>
              <p className="text-sm text-muted-foreground">Coursera - 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;