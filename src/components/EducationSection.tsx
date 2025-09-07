import { GraduationCap, Calendar } from 'lucide-react';

type EduStatus = 'upcoming' | 'current' | 'completed';

type EducationItem = {
  institution: string;
  period: string;
  degree: string;
  description?: string;
  status: EduStatus;
  logo?: string;        // optional path e.g. '/logos/uw.png'
  highlights?: string[]; // small chips e.g. ['4.00 GPA', 'Treasurer', ...]
};

const education: EducationItem[] = [
  {
    institution: 'University of Washington',
    period: '2025–2027',
    degree: 'Business Administration (Finance)',
    description: 'Foster School of Business',
    status: 'current',
    logo: '/logo/uw.png',
    highlights: ['Foster School of Business', 'Seattle, WA']
  },
  {
    institution: 'Bellevue College',
    period: '2023–2025',
    degree: "Associate's in Business Administration & Management",
    description:
      'President Treasurer at Bellevue Indonesian Club, Accountant at BC Tech Club',
    status: 'completed',
    logo: '/logo/BC.jpg',
    highlights: ['Treasurer (BI Club)', 'Accountant (BC Tech Club)']
  },
  {
    institution: 'Jakarta International College',
    period: '2022–2023',
    degree: 'General Studies',
    description:
      '4.00 GPA, Student representative for Kebaya Foundation UNESCO',
    status: 'completed',
    logo: '/logo/JIC.jpeg',
    highlights: ['4.00 GPA', 'UNESCO Kebaya Rep']
  },
  {
    institution: 'Saint Joseph College Senior High School',
    period: '2020–2022',
    degree: 'General Science & Mathematics',
    description: 'Grade 93.88/100, Activities: Musical Band, Science Club',
    status: 'completed',
    logo: '/logo/st-joseph.jpeg',
    highlights: ['93.88/100', 'Musical Band', 'Science Club']
  }
];

const statusChip = (status: EduStatus) => {
  switch (status) {
    case 'upcoming':
      return 'bg-rose text-white';
    case 'current':
      return 'bg-lavender text-white';
    case 'completed':
      return 'bg-accent text-accent-foreground';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

const EducationSection = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-title"
      className="py-20 bg-accent/20"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            id="education-title"
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
          >
            Educational{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A continuous path of learning and growth in finance and business
          </p>
        </div>

        <div className="relative">
          {/* Timeline rail */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-lavender/40 via-rose/40 to-accent/40" />

          <ul className="space-y-12">
            {education.map((edu, i) => {
              const isEven = i % 2 === 0;
              return (
                <li
                  key={edu.institution + i}
                  className="relative grid grid-cols-1 md:grid-cols-2 md:gap-10"
                >
                  {/* Dot on the rail */}
                  <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-2 h-4 w-4 rounded-full bg-gradient-accent ring-4 ring-background shadow-soft z-10" />

                  {/* Card wrapper */}
                  <div
                    className={`md:w-full ${
                      isEven ? 'md:pr-10 md:col-start-1' : 'md:pl-10 md:col-start-2'
                    }`}
                  >
                    <article
                      className="bg-gradient-card p-6 rounded-2xl shadow-soft hover:shadow-elegant border border-border/50 transition-all duration-300"
                      aria-label={`${edu.institution} — ${edu.degree}`}
                    >
                      {/* Top row */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-background ring-1 ring-border/60 overflow-hidden">
                            {edu.logo ? (
                              <img
                                src={edu.logo}
                                alt={`${edu.institution} logo`}
                                className="object-contain h-8 w-8"
                              />
                            ) : (
                              <GraduationCap className="text-lavender" size={20} />
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar size={16} />
                            <span className="text-sm">{edu.period}</span>
                          </div>
                        </div>

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${statusChip(
                            edu.status
                          )}`}
                        >
                          {edu.status === 'upcoming'
                            ? 'Upcoming'
                            : edu.status === 'current'
                            ? 'Current'
                            : 'Completed'}
                        </span>
                      </div>

                      <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground leading-snug">
                        {edu.institution}
                      </h3>
                      <p className="font-body font-medium text-lavender mt-1">
                        {edu.degree}
                      </p>

                      {edu.description && (
                        <p className="text-sm text-foreground/70 leading-relaxed mt-3">
                          {edu.description}
                        </p>
                      )}

                      {edu.highlights?.length ? (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {edu.highlights.map((h, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 text-xs rounded-full bg-foreground/[0.06] text-foreground/80 ring-1 ring-border/60"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </article>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
