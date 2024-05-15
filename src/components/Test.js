import React from 'react';

function IndustrySection({ title, children }) {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {children}
        </div>
      </div>
    </section>
  );
}

function ContentBox({ title, description, icon }) {
  return (
    <div className="shadow-md rounded-lg p-4 hover:shadow-lg hover:bg-gray-200">
      <div className="flex items-center mb-2">
        {icon && (
          <span className="mr-2 text-2xl text-blue-500">{icon}</span>
        )}
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}

function Test() {
  return (
    <div className="min-h-screen">
      <IndustrySection title="Our Industries">
        <ContentBox
          title="Education"
          description="Empowering learning experiences through technology."
          icon=""
        />
        <ContentBox
          title="Ecommerce"
          description="Building seamless online shopping experiences."
          icon=""
        />
        <ContentBox
          title="Ecommerce"
          description="Building seamless online shopping experiences."
          icon=""
        />
        <ContentBox
          title="Ecommerce"
          description="Building seamless online shopping experiences."
          icon=""
        />
        <ContentBox
          title="Ecommerce"
          description="Building seamless online shopping experiences."
          icon=""
        />
        <ContentBox
          title="Ecommerce"
          description="Building seamless online shopping experiences."
          icon=""
        />
        <ContentBox
          title="Ecommerce"
          description="Building seamless online shopping experiences."
          icon=""
        />
        <ContentBox
          title="Ecommerce"
          description="Building seamless online shopping experiences."
          icon=""
        />
        {/* Add more ContentBox components here */}
      </IndustrySection>
    </div>
  );
}

export default Test;