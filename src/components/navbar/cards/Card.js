// InfoCard.jsx
export const navItems = [
    {
      key: "services",
      title: "Services",
      categories: [
        {
          name: "Mobile App",
          items: [
            "Android App Development",
            "iPhone App Development",
            "iPad App Development",
            "Mobile App Development",
          ],
        },
        {
          name: "UI/UX Design",
          items: [
            "UI & UX Designing",
            "Android UX-UI Development",
            "iPhone UX-UI Development",
            "iPad UX/UI Development",
          ],
        },
        {
            name: "UI/UX Design",
            items: [
              "UI & UX Designing",
              "Android UX-UI Development",
              "iPhone UX-UI Development",
              "iPad UX/UI Development",
            ],
          },
          {
            name: "UI/UX Design",
            items: [
              "UI & UX Designing",
              "Android UX-UI Development",
              "iPhone UX-UI Development",
              "iPad UX/UI Development",
            ],
          },
          {
            name: "UI/UX Design",
            items: [
              "UI & UX Designing",
              "Android UX-UI Development",
              "iPhone UX-UI Development",
              "iPad UX/UI Development",
            ],
          },
          {
            name: "UI/UX Design",
            items: [
              "UI & UX Designing",
              "Android UX-UI Development",
              "iPhone UX-UI Development",
              "iPad UX/UI Development",
            ],
          },
        // Add other categories similarly...
      ],
    },
    {
        key: "career",
        title: "About Us",
        categories: [
          {
            name: "UI/UX Design",
            title: "Company",
            items: ["Our Mission", "Our Vision", "Our Team", "Our History"],
          },
          {
            name: "UI/UX Design",
            title: "Leadership",
            items: ["Leadership Team", "Board of Directors"],
          },
          {
            name: "UI/UX Design",
            title: "Careers",
            items: ["Current Openings", "Internship Programs", "Employee Benefits"],
          },
          {
            name: "UI/UX Design",
            title: "Corporate Responsibility",
            items: ["Sustainability", "Community Engagement", "Ethics & Compliance"],
          },
        ],
      },
    {
        key: "about",
        title: "About Us",
        categories: [
          {
            name: "UI/UX Design",
            title: "Company",
            items: ["Our Mission", "Our Team", "Our History"],
          },
          {
            name: "UI/UX Design",
            title: "Company",
            items: ["Our Mission", "Our Team", "Our History"],
          },
          {
            name: "UI/UX Design",
            title: "Company",
            items: ["Our Mission", "Our Team", "Our History"],
          },
          {
            name: "UI/UX Design",
            title: "Company",
            items: ["Our Mission", "Our Team", "Our History"],
          },
          {
            name: "UI/UX Design",
            title: "Company",
            items: ["Our Mission", "Our Team", "Our History"],
          },
          // Add other categories here
        ],
      },
    // Define other nav items (about, career, etc.) similarly if needed
  ];
  
  const InfoCard = ({ categories }) => (
    <div className="p-4 bg-slate-700 text-white rounded-lg shadow-lg">
      <div className="grid grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-bold">{category.name}</h3>
            <ul className="list-disc list-inside space-y-1">
              {category.items.map((item, idx) => (
                <li key={idx} className="text-sm">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
  
  export default InfoCard;
  