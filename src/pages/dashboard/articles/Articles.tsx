import Article from "../../../components/layout/article/Article";
import { Container, Row, Col } from "react-bootstrap";
export default function Articles() {
  return (
    <div className="articles">
        <Container>
            <div className="heading">Recent Articles</div>
          <Row>
            <Col lg={6}>
              <Article
                articleImage="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                author="John Doe"
                date="2021-09-10"
                title="The Future of Programming Languages"
                description="A look into the future of programming languages and what to expect."
                tags={["Programming", "Languages", "Future"]}
                layout="vertical"
              ></Article>
            </Col>
            <Col lg={6}>
            <Row>
            {Array.from({ length: 10 })
                .map((_, index) => {
                  return (
                    <Col sm={6} lg={12} key={index}>
                    <Article
                      articleImage="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      author="John Doe"
                      date="2021-09-10"
                      title="The Future of Programming Languages"
                      description="A look into the future of programming languages and what to expect."
                      tags={["Programming", "Languages", "Future"]}
                      layout="horizontal"
                    ></Article>
                    </Col>
                  );
                })}
            </Row>
             
            </Col>
          </Row>
        </Container>
      </div>
  )
}
