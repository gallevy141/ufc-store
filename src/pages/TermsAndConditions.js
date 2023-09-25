import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function TermsAndConditions() {
    return (
        <Container className="mt-5" style={{ fontFamily: 'Oswald, sans-serif' }}>
            <Row className="justify-content-center">
                <Col md={10}>
                <h2 className="text-center">Terms and Conditions</h2>
                    <Card>
                        <Card.Body>
                            <section>
                                <h4>1. Introduction</h4>
                                <p>
                                    Welcome to the UFC Store. These are the terms and conditions governing your access
                                    and use of the UFC Store website and its related sub-domains, mobile apps, services, 
                                    and tools. By accessing, browsing, and using our site, you acknowledge that you 
                                    have read, understood, and agree to comply with the terms and conditions herein.
                                </p>
                            </section>

                            <section>
                                <h4>2. User Account and Registration</h4>
                                <p>
                                    Registration is optional. However, you will need to register on our platform and create 
                                    an account to use certain functionalities. You are responsible for maintaining the 
                                    confidentiality of your account, username, and password and for restricting access to 
                                    your account.
                                </p>
                            </section>

                            <section>
                                <h4>3. E-commerce Transactions</h4>
                                <p>
                                    Users are responsible for all transactions, including buying products under your account, 
                                    including unauthorized transactions. Please ensure the confidentiality of your account details.
                                    All sales are final, subject to your rights under applicable local law.
                                </p>
                            </section>

                            <section>
                                <h4>4. Content and User Contributions</h4>
                                <p>
                                    Users may post reviews, comments, and other content as long as the content is not illegal, 
                                    obscene, threatening, defamatory, invasive of privacy, or otherwise harmful.
                                </p>
                            </section>

                            <section>
                                <h4>5. Display of Information</h4>
                                <p>
                                    While we strive to ensure the accuracy of information presented on our platform related 
                                    to fights, rankings, and other details, we do not guarantee or warrant the accuracy, 
                                    completeness, or timeliness of such information. Information may be updated, 
                                    changed, or removed without notice.
                                </p>
                            </section>

                            <section>
                                <h4>6. Limitations and Liabilities</h4>
                                <p>
                                    UFC Store will not be liable for any damages of any kind arising from the use of this 
                                    site or from any information, content, materials, products, or services included on or 
                                    otherwise made available to you.
                                </p>
                            </section>

                            <section>
                                <h4>7. Changes to the Terms</h4>
                                <p>
                                    UFC Store reserves the right to change or modify these terms at any time. Continued use 
                                    of our platform constitutes agreement to the updated or modified terms.
                                </p>
                            </section>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default TermsAndConditions