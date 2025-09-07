import { Briefcase, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Accountant",
      company: "BC Tech Club",
      period: "2024–Present",
      status: "completed",
      description: "Managing financial records and budgets for technology club initiatives and events."
    },
    {
      title: "Treasurer", 
      company: "Bellevue Indonesian Club",
      period: "2023–2025",
      status: "completed",
      description: "Overseeing financial operations and budget management for cultural organization activities."
    },
    {
      title: "Content Creator",
      company: "Lemon8",
      period: "May 2023–Sep 2023", 
      status: "completed",
      description: "Created engaging content and managed social media presence on the Lemon8 platform."
    }
  ];

  const getStatusStyles = (status: string) => {
    switch(status) {
      case 'current':
        return {
          badge: 'bg-lavender text-white',
          border: 'border-lavender/30'
        };
      case 'completed':
        return {
          badge: 'bg-accent text-accent-foreground',
          border: 'border-accent/30'
        };
      default:
        return {
          badge: 'bg-muted text-muted-foreground',
          border: 'border-border'
        };
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional <span className="bg-gradient-accent bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building expertise through leadership roles and creative ventures
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => {
            const styles = getStatusStyles(exp.status);
            return (
              <div key={index} className={`bg-gradient-card p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 border-2 ${styles.border} group hover:scale-105`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-lavender/10 rounded-lg">
                      <Briefcase className="text-lavender" size={20} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles.badge}`}>
                      {exp.status === 'current' ? 'Current' : 'Completed'}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-lavender transition-colors">
                  {exp.title}
                </h3>

                <p className="font-body font-medium text-rose mb-3">
                  {exp.company}
                </p>

                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Calendar size={16} />
                  <span className="text-sm">{exp.period}</span>
                </div>

                <p className="text-sm text-foreground/70 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;