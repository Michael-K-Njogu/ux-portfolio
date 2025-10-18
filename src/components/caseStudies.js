import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import client from '../contentfulClient';
import HeroSection from './layout/Hero';

const CaseStudies = () => {
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const res = await client.getEntries({ content_type: "caseStudy" });
        setCaseStudies(res.items);
      } catch (err) {
        console.error("Error fetching case studies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);


  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }  

  return (
    <div>
    <HeroSection />
    <Container className="py-5">
      <h2 className="mb-5 text-center">Featured Work</h2>
      <Row>
        {caseStudies.map((item) => {
          const { title, subtitle, featuredImage, slug, skills } = item.fields;

          return (
            <Col md={6} className="mb-4" key={item.sys.id}>
              <Card className="shadow-sm h-100 border-0">
                {featuredImage && (
                  <Link to={`/case-study/${slug}`}>
                  <Card.Img
                    variant="top"
                    src={featuredImage.fields.file.url}
                    alt={featuredImage.fields.title}
                    className="object-fit-cover"
                  />
                  </Link>
                )}
                <Card.Body>
                  <Card.Title><Link to={`/case-study/${slug}`}>{title}</Link></Card.Title>
                  <Card.Text>{subtitle}</Card.Text>
                  {skills && (
                    <div className="mt-3">
                      {skills.map((skill, index) => ( 
                        <span key={index} className="badge bg-secondary me-2">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
    </div>
  );
};

export default CaseStudies;
