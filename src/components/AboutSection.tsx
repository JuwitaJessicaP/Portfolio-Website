import profileImage from '@/assets/Juwita-Jessica-Pangestu.png';

const AboutSection = () => {
  const skills = [
    {
      category: "Financial Skills",
      items: ["Financial Analysis", "Accounting", "Financial Management"]
    },
    {
      category: "Creative Skills", 
      items: ["Content Creation", "Editing", "Design"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              About <span className="bg-gradient-accent bg-clip-text text-transparent">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Juwita Jessica Pangestu, a finance student aspiring to become a financial analyst, blends analytical skills with creativity. She is skilled in accounting, financial management, financial analysis, and creative content development.
              </p>
              <p>
                Additionally, she excels at problem-solving, budgeting, and editing. She aims to make a significant impact in finance while pursuing her artistic passions.
              </p>
            </div>

            {/* Skills Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {skills.map((skillGroup, index) => (
                <div key={index} className="bg-gradient-card p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 border border-border/50">
                  <h3 className="font-body font-semibold text-xl text-foreground mb-4">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-gradient-accent rounded-full mr-3"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-accent rounded-full blur-2xl opacity-20 scale-110"></div>
              <img 
                src={profileImage}
                alt="Juwita Jessica Pangestu" 
                className="relative w-80 h-80 rounded-full object-cover shadow-elegant border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;