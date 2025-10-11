import React, { useEffect, useState } from 'react';
import client from '../contentfulClient';

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    client
      .getEntries({ content_type: 'caseStudy' })
      .then((response) => setCaseStudies(response.items))
      .catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {caseStudies.map((item) => {
        const { title, subtitle, featuredImage } = item.fields;
        const imageUrl = featuredImage?.fields?.file?.url;
        return (
          <div key={item.sys.id} className="rounded-2xl shadow-md p-4">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={title}
                className="rounded-xl mb-3 w-full h-48 object-cover"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CaseStudies;
