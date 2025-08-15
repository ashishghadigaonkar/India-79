import { useState } from "react";
import { Header } from "@/components/Header";
import { KPICard } from "@/components/KPICard";
import { DecadeSelector } from "@/components/DecadeSelector";
import { MilestoneCard } from "@/components/MilestoneCard";
import { MilestoneDetail } from "@/components/MilestoneDetail";
import { DataSourceBadge } from "@/components/DataSourceBadge";

// Sample data - will be replaced with API calls
const kpiData = [
  {
    title: "GDP (Nominal)",
    value: "$3.7T",
    change: "+390,000%",
    trend: "up" as const,
    unit: "USD",
    color: "saffron" as const,
  },
  {
    title: "Literacy Rate",
    value: "77.7%",
    change: "+45.5%",
    trend: "up" as const,
    unit: "%",
    color: "green" as const,
  },
  {
    title: "Population",
    value: "1.42B",
    change: "+290%",
    trend: "up" as const,
    unit: "people",
    color: "blue" as const,
  },
  {
    title: "Life Expectancy",
    value: "70.2",
    change: "+37.4 years",
    trend: "up" as const,
    unit: "years",
    color: "neutral" as const,
  },
];

const detailedMilestones = {
  "1940s": [
    {
      title: "Independence Day",
      date: "August 15, 1947",
      description: "India gained independence from British rule, marking the birth of the world's largest democracy.",
      category: "independence" as const,
      sourceUrl: "https://en.wikipedia.org/wiki/Indian_Independence_Act_1947",
      detailedDescription: "On the stroke of midnight on August 15, 1947, India gained independence from British colonial rule after nearly 200 years. This historic moment was led by Mahatma Gandhi's non-violent resistance movement and resulted in the partition of British India into two independent dominions: India and Pakistan.",
      impact: "The independence of India marked the beginning of decolonization globally and established the world's largest democracy. It demonstrated that non-violent resistance could achieve political freedom and inspired independence movements across Asia and Africa.",
      keyFigures: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Lord Mountbatten"],
      location: "New Delhi, India",
      relatedEvents: [
        { title: "Partition of India", date: "August 14-15, 1947" },
        { title: "First Independence Day Speech", date: "August 15, 1947" }
      ]
    },
  ],
  "1950s": [
    {
      title: "Constitution Adopted",
      date: "January 26, 1950",
      description: "The Constitution of India came into effect, establishing India as a republic.",
      category: "independence" as const,
      sourceUrl: "https://en.wikipedia.org/wiki/Constitution_of_India",
      detailedDescription: "The Constitution of India, drafted by Dr. B.R. Ambedkar and adopted by the Constituent Assembly, came into effect on January 26, 1950. This comprehensive document established India as a sovereign, socialist, secular, and democratic republic with a parliamentary system of government.",
      impact: "The Constitution provided the legal framework for democracy in India, guaranteeing fundamental rights to all citizens and establishing the structure of government that continues to this day. It is one of the longest written constitutions in the world.",
      keyFigures: ["Dr. B.R. Ambedkar", "Dr. Rajendra Prasad", "Pandit Nehru"],
      location: "New Delhi, India"
    },
    {
      title: "First Five-Year Plan",
      date: "1951-1956",
      description: "Launch of India's first five-year plan focusing on agriculture and rural development.",
      category: "economy" as const,
      sourceUrl: "https://en.wikipedia.org/wiki/First_Five-Year_Plan_(India)",
      detailedDescription: "India's First Five-Year Plan was based on the Harrod-Domar model and focused primarily on the development of the primary sector, especially agriculture. The plan aimed to achieve self-sufficiency in food grains and increase agricultural productivity.",
      impact: "The plan established India's tradition of planned economic development and laid the foundation for future industrialization. It helped increase food production and improved rural infrastructure.",
      keyFigures: ["Pandit Nehru", "P.C. Mahalanobis"],
      location: "India"
    },
  ],
  "1960s": [
    {
      title: "Green Revolution Begins",
      date: "1960s",
      description: "Introduction of high-yielding variety seeds and modern farming techniques transformed agriculture.",
      category: "economy" as const,
      sourceUrl: "https://en.wikipedia.org/wiki/Green_Revolution_in_India",
      detailedDescription: "The Green Revolution in India was a period of technology transfer initiatives that saw greatly increased crop yields. It was initiated by Norman Borlaug and involved the development of high-yielding varieties of cereal grains, expansion of irrigation infrastructure, and distribution of hybridized seeds, synthetic fertilizers, and pesticides.",
      impact: "The Green Revolution transformed India from a food-deficient country to one of the world's leading agricultural producers. It significantly increased wheat and rice production, helping India achieve food security and reduce dependence on food imports.",
      keyFigures: ["Norman Borlaug", "M.S. Swaminathan", "C. Subramaniam"],
      location: "Punjab, Haryana, Western Uttar Pradesh"
    },
  ],
  "1970s": [
    {
      title: "Aryabhatta Satellite",
      date: "April 19, 1975",
      description: "India's first satellite was launched, marking the beginning of the space age.",
      category: "space" as const,
      sourceUrl: "https://en.wikipedia.org/wiki/Aryabhata_(satellite)",
      detailedDescription: "Aryabhata was India's first satellite, named after the ancient Indian astronomer and mathematician. It was launched by the Soviet Union from Kapustin Yar using a Cosmos-3M launch vehicle. The satellite was designed to conduct experiments in X-ray astronomy, aeronomics, and solar physics.",
      impact: "Aryabhata marked India's entry into the space age and laid the foundation for the Indian Space Research Organisation's future achievements. It demonstrated India's capability in satellite technology and space exploration.",
      keyFigures: ["Dr. Vikram Sarabhai", "Dr. U.R. Rao", "ISRO Team"],
      location: "Kapustin Yar, Soviet Union"
    },
  ],
  "1980s": [
    {
      title: "Operation Flood",
      date: "1980s",
      description: "World's largest dairy development program made India the largest milk producer.",
      category: "economy" as const,
      sourceUrl: "https://en.wikipedia.org/wiki/Operation_Flood",
      detailedDescription: "Operation Flood was a rural development program launched in 1970 and expanded throughout the 1980s to increase milk production in India. It was based on the 'Anand Pattern' of cooperative dairy development and aimed to create a nationwide milk grid.",
      impact: "Operation Flood transformed India from a milk-deficient nation to the world's largest milk producer. It improved the livelihoods of millions of rural families and established India as a global leader in dairy production.",
      keyFigures: ["Dr. Verghese Kurien", "Tribhuvandas Patel"],
      location: "Gujarat and across India"
    },
  ],
  "1990s": [
    {
      title: "Economic Liberalization",
      date: "July 1991",
      description: "Major economic reforms opened up the Indian economy to global markets.",
      category: "economy" as const,
      sourceUrl: "https://en.wikipedia.org/wiki/Economic_liberalisation_in_India",
      detailedDescription: "The 1991 economic liberalization in India was a set of economic reforms that aimed to transform India's economy from a closed, centrally-planned system to a market-oriented economy. The reforms were initiated in response to a severe balance of payments crisis.",
      impact: "These reforms marked a turning point in India's economic history, leading to rapid economic growth, increased foreign investment, and India's integration into the global economy. They laid the foundation for India's emergence as a major economic power.",
      keyFigures: ["Dr. Manmohan Singh", "P.V. Narasimha Rao", "Montek Singh Ahluwalia"],
      location: "New Delhi, India"
    },
  ],
  "2000s": [
    {
      title: "IT Services Boom",
      date: "2000s",
      description: "India emerged as a global hub for information technology and software services.",
      category: "technology" as const,
      sourceUrl: "https://en.wikipedia.org/wiki/Information_technology_in_India",
      detailedDescription: "The 2000s saw India emerge as the world's leading destination for IT services and software development. Companies like Infosys, TCS, and Wipro became global leaders, providing services to multinational corporations worldwide.",
      impact: "The IT boom transformed India's economy, creating millions of jobs and establishing India as a global technology powerhouse. It significantly contributed to India's GDP growth and improved the country's international image.",
      keyFigures: ["N.R. Narayana Murthy", "Azim Premji", "Ratan Tata"],
      location: "Bangalore, Hyderabad, Pune, Chennai"
    },
    {
      title: "Chandrayaan-1",
      date: "October 22, 2008",
      description: "India's first lunar probe successfully reached the Moon.",
      category: "space" as const,
      sourceUrl: "https://en.wikipedia.org/wiki/Chandrayaan-1",
      detailedDescription: "Chandrayaan-1 was India's first lunar probe launched by ISRO in 2008. The mission included a lunar orbiter and an impactor that confirmed the presence of water molecules on the Moon's surface, a groundbreaking discovery.",
      impact: "Chandrayaan-1 established India as a major player in lunar exploration and space science. The discovery of water on the Moon was a significant contribution to global space research and enhanced India's reputation in the international space community.",
      keyFigures: ["Dr. G. Madhavan Nair", "Dr. Mylswamy Annadurai", "ISRO Team"],
      location: "Sriharikota, India"
    },
  ],
  "2010s": [
    {
      title: "Digital India Initiative",
      date: "July 1, 2015",
      description: "Massive digitalization program to transform India into a digitally empowered society.",
      category: "technology" as const,
      sourceUrl: "https://en.wikipedia.org/wiki/Digital_India",
      detailedDescription: "Digital India is a campaign launched by the Government of India to ensure that government services are made available to citizens electronically by improving online infrastructure and increasing Internet connectivity.",
      impact: "Digital India transformed how Indians access government services and conduct business. It accelerated digital adoption across the country, leading to innovations like UPI, Aadhaar integration, and digital governance.",
      keyFigures: ["Narendra Modi", "Ravi Shankar Prasad", "Amitabh Kant"],
      location: "India"
    },
    {
      title: "Mars Orbiter Mission",
      date: "September 24, 2014",
      description: "India became the first country to reach Mars orbit in its first attempt.",
      category: "space" as const,
      sourceUrl: "https://en.wikipedia.org/wiki/Mars_Orbiter_Mission",
      detailedDescription: "The Mars Orbiter Mission (Mangalyaan) was India's first interplanetary mission to Mars. ISRO successfully placed the spacecraft in Mars orbit on its first attempt, making India the first country to achieve this feat and the fourth space agency to reach Mars.",
      impact: "The mission demonstrated India's advanced space capabilities and cost-effective space technology. It enhanced India's prestige in the global space community and inspired a new generation of scientists and engineers.",
      keyFigures: ["Dr. K. Radhakrishnan", "Dr. S. Arunan", "ISRO Team"],
      location: "Mars Orbit"
    },
  ],
  "2020s": [
    {
      title: "Chandrayaan-3 Success",
      date: "August 23, 2023",
      description: "Historic soft landing near the lunar south pole, making India the 4th country to land on Moon.",
      category: "space" as const,
      sourceUrl: "https://en.wikipedia.org/wiki/Chandrayaan-3",
      detailedDescription: "Chandrayaan-3 successfully executed a soft landing near the Moon's south pole, making India the fourth country to achieve a lunar landing and the first to land near the south pole. The mission included the Vikram lander and Pragyan rover, which conducted scientific experiments on the lunar surface.",
      impact: "This achievement positioned India as a major space power and demonstrated cost-effective space technology. The mission's success boosted India's reputation in international space collaboration and inspired a new generation of scientists and engineers.",
      keyFigures: ["Dr. S. Somanath", "Dr. K. Sivan", "ISRO Team"],
      location: "Moon's South Pole",
      relatedEvents: [
        { title: "Vikram Lander Separation", date: "August 17, 2023" },
        { title: "Pragyan Rover Deployment", date: "August 24, 2023" }
      ]
    },
    {
      title: "UPI Revolution",
      date: "2020-2026",
      description: "Unified Payments Interface transformed digital payments, processing 100+ billion transactions annually.",
      category: "technology" as const,
      sourceUrl: "https://en.wikipedia.org/wiki/Unified_Payments_Interface",
      detailedDescription: "The Unified Payments Interface (UPI) revolutionized digital payments in India, enabling instant bank-to-bank transfers using mobile phones. By 2024, UPI was processing over 100 billion transactions annually, making India a global leader in digital payments.",
      impact: "UPI democratized digital payments, bringing financial inclusion to millions of Indians. It reduced the reliance on cash, improved transaction efficiency, and became a model for other countries developing digital payment systems.",
      keyFigures: ["Nandan Nilekani", "RBI Team", "NPCI"],
      location: "India"
    },
  ],
};

const Index = () => {
  const [selectedDecade, setSelectedDecade] = useState("2020s");
  const [selectedMilestone, setSelectedMilestone] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMilestoneClick = (milestone: any) => {
    setSelectedMilestone(milestone);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMilestone(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* KPI Section */}
      <section className="py-12 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              India's Progress at a Glance
            </h2>
            <p className="text-muted-foreground">
              Key indicators showing 79 years of remarkable growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpiData.map((kpi, index) => (
              <KPICard key={index} {...kpi} />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <DataSourceBadge 
              source="World Bank, UNESCO, Government of India" 
              lastUpdated="December 2024"
            />
          </div>
        </div>
      </section>

      {/* Decade Selector */}
      <DecadeSelector 
        selectedDecade={selectedDecade}
        onDecadeChange={setSelectedDecade}
      />

      {/* Milestones Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Key Milestones: {selectedDecade.charAt(0).toUpperCase() + selectedDecade.slice(1)}
            </h2>
            <p className="text-muted-foreground">
              Significant achievements and turning points
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedMilestones[selectedDecade as keyof typeof detailedMilestones]?.map((milestone, index) => (
              <MilestoneCard 
                key={index} 
                {...milestone} 
                onClick={() => handleMilestoneClick(milestone)}
              />
            )) || (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground">
                  No milestones data available for this decade.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="space-y-4">
            <div className="flex justify-center items-center gap-2">
              <div className="w-6 h-4 bg-gradient-tricolor rounded-sm"></div>
              <span className="font-semibold text-foreground">India@79</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Celebrating 79 years of India's remarkable journey through data and milestones. 
              Data sourced from World Bank, UNESCO, Government of India, and Wikidata.
            </p>
            <p className="text-xs text-muted-foreground">
              Independence Day 2025 • #IndiaAt79 #DataInMotion
            </p>
          </div>
        </div>
      </footer>

      {/* Milestone Detail Modal */}
      {selectedMilestone && (
        <MilestoneDetail 
          isOpen={isModalOpen}
          onClose={closeModal}
          milestone={selectedMilestone}
        />
      )}
    </div>
  );
};

export default Index;
