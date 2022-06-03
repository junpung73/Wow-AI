import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Dataset = () => {
  return (
    <div style={{padding: "20vh 0"}}>
      <Container style={{ width: "1330px", padding: "10vh 0" }}>
        <Row>
          <Col xs={5}>
            <img src='/images/image20.png' alt='dataset' style={{ width: "100%", borderRadius: "30px", }} />
          </Col>
          <Col xs={7}>
            <div style={{fontSize: "36px", fontWeight: "500",padding: "2vh 0 1.5vh 0"}}>
              Want to build your own 
              <span style={{color: "var(--secondary-bg)"}}> dataset </span>
              ?
              </div>
            <p>Contact us now to learn how we can collect a custom dataset for your unique AI solution.</p>
            <form>
              <Row>
                <Col>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">First name *</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                </Col>
                <Col>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Last name *</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" />
                  </div>
                </Col>
              </Row>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email *</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <Row>
                <Col>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Telephone *</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  </div>
                </Col>
                <Col>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Company *</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" />
                  </div>
                </Col>
              </Row>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="7"></textarea>
              </div>
              <div style={{display: "flex", justifyContent: "center", paddingTop: "2vh"}}>
                <button type="submit" class="btn btn-dark" style={{ padding: "1vh 8vh" }}>Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Dataset
