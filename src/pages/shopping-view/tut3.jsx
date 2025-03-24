import React from 'react';
import styled, { keyframes } from 'styled-components';
import pp from '../../assets/tuts/pp.png';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 40px auto 0;
  padding: 20px;
  margin-top: 55px;
`;

const CategoryHeading = styled.div`
  margin-bottom: 15px;
  h4 {
    font-size: 2rem;
    color: #ff5722;
    margin: 0;
    font-weight: bold;
  }
`;

const SubHeading = styled.div`
  margin-bottom: 20px;
  h6 {
    color: #fff;
    background: #333;
    padding: 10px 15px;
    border-radius: 5px;
    margin: 0;
    font-size: 0.9rem;
  }
`;

const Card = styled.div`
  background: #fff;
  color: #000;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;
  margin-bottom: 30px;
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardBody = styled.div`
  padding: 20px;
  animation: ${fadeIn} 0.6s ease-out;
`;

const ImageContainer = styled.div`
  background: #f0f0f0;
  max-height: 300px;
  overflow: hidden;
  img {
    width: 100%;
    display: block;
    object-fit: cover;
  }
`;

const TextContent = styled.div`
  margin-top: 20px;
  p,
  h2,
  ul,
  ol,
  div,
  span {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    animation: ${fadeIn} 0.6s ease-out;
  }
  h2 {
    font-size: 1.8rem;
    color: #212529;
    font-weight: bold;
    margin-bottom: 20px;
  }
  a {
    color: #dd3333;
    text-decoration: none;
  }
  img.note-float-left {
    float: left;
    margin-right: 10px;
    margin-bottom: 10px;
  }
`;

const CommentArea = styled.div`
  margin-top: 40px;
`;

const CommentCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const TutorialDetail3 = () => {
  const submitForm = () => {
    document.getElementById('postForm')?.submit();
  };

  return (
    <Container>
      <CategoryHeading>
        <h4>HOW TO LINK PAYPAL WITH PURCHASED BANK LOG</h4>
      </CategoryHeading>
      <SubHeading>
        <h6>FREE METHODS/HOW TO LINK PAYPAL WITH PURCHASED BANK LOG</h6>
      </SubHeading>
      <Card onClick={submitForm}>
        <CardBody>
          <ImageContainer>
            <img src={pp} alt="HOW TO LINK PAYPAL WITH PURCHASED BANK LOG" />
          </ImageContainer>
          <TextContent>
            <p>
              So many people have complaining they don’t have cashapp, chime or greendot but they have PayPal bank!
            </p>
            <p>
              So I’ve made a tutorial on how to link a bank log to PayPal so they cashout through their PayPal!
            </p>
            <p>Let’s start</p>
            <p>
              <img
                src="https://easycasher.site/uploads/post/1697549215_652e8b9f706ca.jpg"
                alt=""
                style={{ width: '100%' }}
                className="note-float-left"
              />
            </p>
            <p><br /></p>
            <p>Login in to your PayPal account</p>
            <p><br /></p>
            <p>
              <img
                src="https://easycasher.site/uploads/post/1697549249_652e8bc193312.jpg"
                alt=""
                style={{ width: '100%' }}
                className="note-float-left"
              />
            </p>
            <p><br /></p>
            <p><br /></p>
            <p>
              Click on{' '}
              <span style={{ backgroundColor: '#fff', color: '#dd3333', padding: '0 4px' }}>
                wallet
              </span>{' '}
              on the top menu
            </p>
            <p>
              <img
                src="https://easycasher.site/uploads/post/1697549309_652e8bfd32208.jpg"
                alt=""
                style={{ width: '100%' }}
                className="note-float-left"
              />
              <br />
            </p>
            <p><br /></p>
            <p>Now click on link a card or bank</p>
            <p><br /></p>
            <p>
              <img
                src="https://easycasher.site/uploads/post/1697549332_652e8c1426aea.jpg"
                alt=""
                style={{ width: '100%' }}
                className="note-float-left"
              />
              <br />
            </p>
            <p><br /></p>
            <p><br /></p>
            <p>Click on link a bank account</p>
            <p><br /></p>
            <p>
              <img
                src="https://easycasher.site/uploads/post/1697549359_652e8c2f506cf.jpg"
                alt=""
                style={{ width: '100%' }}
                className="note-float-left"
              />
              <br />
            </p>
            <p><br /></p>
            <p><br /></p>
            <p>
              Now you can choose your bank account from this list, I bought a suntrust bank login so will choose suntrust
            </p>
            <p><br /></p>
            <p><br /></p>
            <p>
              <img
                src="https://easycasher.site/uploads/post/1697549387_652e8c4b12ef4.jpg"
                alt=""
                style={{ width: '100%' }}
                className="note-float-left"
              />
            </p>
            <p><br /></p>
            <p><br /></p>
            <p>
              Now enter the username and password of the bank login info u bought and click confirm instantly
            </p>
            <div>
              <img
                src="https://easycasher.site/uploads/post/1697549410_652e8c62dff8c.jpg"
                alt=""
                style={{ width: '100%' }}
                className="note-float-left"
              />
            </div>
            <div><br /></div>
            <div>
              <p>
                Now enter the username and password of the bank login info u bought and click confirm instantly
              </p>
            </div>
            <div>
              <img
                src="https://easycasher.site/uploads/post/1697549481_652e8ca9365b5.jpg"
                alt=""
                style={{ width: '100%' }}
                className="note-float-left"
              />
            </div>
            <p><br /></p>
            <p><br /></p>
            <div>
              <span>
                A code will be sent to the email attached. Always remember you need a log with email access!!
              </span>
            </div>
            <div>
              <span><br /></span>
            </div>
            <div>
              <img
                src="https://easycasher.site/uploads/post/1697549530_652e8cdac4411.jpg"
                alt=""
                style={{ width: '100%' }}
                className="note-float-left"
              />
              <span><br /></span>
            </div>
            <div>
              <span><br /></span>
            </div>
            <div>
              <span>Done</span>
              <span><br /></span>
              <br />
            </div>
          </TextContent>
        </CardBody>
      </Card>
      <CommentArea>
        <CommentCard>
          <div>
            <h6><small>Commented On: 15-01-2025</small></h6>
            <p>Sooo legit asf</p>
          </div>
        </CommentCard>
      </CommentArea>
    </Container>
  );
};

export default TutorialDetail3;
