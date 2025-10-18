import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-light py-4 mt-auto text-center border-top">
      <Container>
        <p className="mb-1">© {new Date().getFullYear()} Michael K. Njogu. All rights reserved.</p>
        <p className="small text-muted mb-0">
          Built with ❤️ using React, React Bootstrap &amp; Contentful
        </p>
      </Container>
    </footer>
  );
}

export default Footer;