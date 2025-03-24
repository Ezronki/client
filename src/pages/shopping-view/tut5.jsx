import React from 'react';
import styled, { keyframes } from 'styled-components';
import forest from '../../assets/tuts/forest.jpeg';

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
  text-align: center;
  p, div, span {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    animation: ${fadeIn} 0.6s ease-out;
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

const CashAppDirectDepositDetail = () => {
  const submitForm = () => {
    document.getElementById('postForm')?.submit();
  };

  return (
    <Container>
      <CategoryHeading>
        <h4>CASHAPP DIRECT DEPOSIT USING WOODFOREST BANK LOG</h4>
      </CategoryHeading>
      <SubHeading>
        <h6>FREE METHODS/CASHAPP DIRECT DEPOSIT USING WOODFOREST BANK LOG</h6>
      </SubHeading>
      <Card onClick={submitForm}>
        <CardBody>
          <ImageContainer>
            <img
              src={forest}
              alt="CASHAPP DIRECT DEPOSIT USING WOODFOREST BANK LOG"
            />
          </ImageContainer>
          <TextContent>
            <div>
              <span style={{ backgroundColor: 'var(--bs-card-bg)', fontWeight: 'var(--bs-body-font-weight)' }}>
                Step 1
              </span>
            </div>
            <div>
              Login to the Woodforest bank log and confirm identity using the code sent to the email access of the bank log you bought.
            </div>
            <div>
              <span style={{ backgroundColor: 'var(--bs-card-bg)', fontWeight: 'var(--bs-body-font-weight)' }}>
                Step 2
              </span>
            </div>
            <div>
              Now click on Pay Bill.
            </div>
            <div>
              <span style={{ backgroundColor: 'var(--bs-card-bg)', fontWeight: 'var(--bs-body-font-weight)' }}>
                Step 3
              </span>
            </div>
            <div>
              When it comes to Woodforest, you have to enable Multi Factor Authentication when doing Bill Pay.
            </div>
            <div>
              <span style={{ backgroundColor: 'var(--bs-card-bg)', fontWeight: 'var(--bs-body-font-weight)' }}>
                Step 4
              </span>
            </div>
            <div>
              Download the Authenticator on Apple.
            </div>
            <div>
              <span style={{ backgroundColor: 'var(--bs-card-bg)', fontWeight: 'var(--bs-body-font-weight)' }}>
                Step 5
              </span>
            </div>
            <div>
              Store and scan the provided QR Code to get a code.
            </div>
            <div>
              <span style={{ backgroundColor: 'var(--bs-card-bg)', fontWeight: 'var(--bs-body-font-weight)' }}>
                Step 7
              </span>
            </div>
            <div>
              They’ll ask you where you want the money to be deducted from. Click on{' '}
              <font color="#dd3333">
                <span>Checking Account</span>
              </font>.
            </div>
            <div>
              <span style={{ backgroundColor: 'var(--bs-card-bg)', fontWeight: 'var(--bs-body-font-weight)' }}>
                Step 8
              </span>
            </div>
            <div>Click on Add Payee.</div>
            <div>
              <span style={{ backgroundColor: 'var(--bs-card-bg)', fontWeight: 'var(--bs-body-font-weight)' }}>
                Step 9
              </span>
            </div>
            <div>
              Now put in the name of the person you want to make the transfer to.
            </div>
            <div>
              <span style={{ backgroundColor: 'var(--bs-card-bg)', fontWeight: 'var(--bs-body-font-weight)' }}>
                Step 10
              </span>
            </div>
            <div>
              Fill in the Woodforest log with the Cashapp account details (Name, routing number, account number, and Address).
            </div>
            <div>
              <span style={{ backgroundColor: 'var(--bs-card-bg)', fontWeight: 'var(--bs-body-font-weight)' }}>
                Step 11
              </span>
            </div>
            <div>Payee has been added Successfully.</div>
            <div>
              <span style={{ backgroundColor: 'var(--bs-card-bg)', fontWeight: 'var(--bs-body-font-weight)' }}>
                Step 12
              </span>
            </div>
            <div>
              Now put in the amount you want to{' '}
              <font color="#dd3333">
                <span>transfer</span>
              </font>{' '}
              to your Cashapp. The minimum is $5k and the highest is $20k.
            </div>
            <div>
              <span style={{ backgroundColor: 'var(--bs-card-bg)', fontWeight: 'var(--bs-body-font-weight)' }}>
                FINAL STEP
              </span>
            </div>
            <div>
              Payment will reflect under 24 hours on your Cashapp.
            </div>
          </TextContent>
        </CardBody>
      </Card>
      <CommentArea>
        <CommentCard>
          <div>
            <h6><small>No Comments Yet</small></h6>
          </div>
        </CommentCard>
      </CommentArea>
    </Container>
  );
};

export default CashAppDirectDepositDetail;
