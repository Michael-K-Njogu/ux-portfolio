import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import client from '../contentfulClient';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: 'caseStudy',
        'fields.slug': slug,
      })
      .then((response) => setCaseStudy(response.items[0]))
      .catch(console.error);
  }, [slug]);

  if (!caseStudy) return <p className="p-6 text-gray-500">Loading…</p>;

  const { title, subtitle, featuredImage, hasNda, organization, context } = caseStudy.fields;
  const imageUrl = featuredImage?.fields?.file?.url;

  // Optional: customize how specific elements render
  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="text-2xl font-semibold mt-6 mb-3">{children}</h2>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-4 text-gray-800 leading-relaxed">{children}</p>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  };  

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <Link to="/" className="text-blue-600 underline mb-4 inline-block">
        ← Back to all case studies
      </Link>

      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      {hasNda && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg mt-6">
          This case study is protected under a Non-Disclosure Agreement (NDA) with {organization}.
        </div>
      )}      

      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="rounded-2xl mb-6 w-full h-72 object-cover"
        />
      )}

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p>{subtitle?.content?.[0]?.content?.[0]?.value}</p>
        </div>
      </section>

      {context && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Context</h2>
          {documentToReactComponents(context, options)}
        </section>
      )}
    </div>
  );
};

export default CaseStudyDetail;
