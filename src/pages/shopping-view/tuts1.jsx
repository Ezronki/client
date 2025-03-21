import React from 'react';
import styled, { keyframes } from 'styled-components';
import cashAppImg from '../../assets/tuts/cc.jpg';

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
  margin: 0 auto;
  margin-top: 55px;
  padding: 20px;
`;

const CategoryHeading = styled.div`
  margin-bottom: 15px;
  h4 {
    font-size: 2rem;
    color: #ff5722; /* Accent color for title */
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
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
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
  background: #f0f0f0; /* Background for the image */
  max-height: 300px;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;

const TextContent = styled.div`
  margin-top: 20px;
  p,
  h2,
  ol {
    animation: ${fadeIn} 0.6s ease-out;
  }
  
  h2 {
    font-size: 1.8rem;
    color: #212529; /* Dark color for subheading */
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 1.25rem;
  }
  
  ol {
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    margin-bottom: 1.25rem;
    li {
      margin-bottom: 10px;
      line-height: 1.5;
    }
  }
`;

const CommentsArea = styled.div`
  margin-top: 40px;
  .comment-card {
    background: #fff;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

const TutorialDetail = () => {
  const submitForm = () => {
    // Replace this with your actual form submission logic
    document.getElementById('postForm')?.submit();
  };

  return (
    <Container >
      <CategoryHeading >
        <h4>What is A Cash App Linkable and How to use it?</h4>
      </CategoryHeading>
      <SubHeading>
        <h6>FREE METHODS / What is A Cash App Linkable and How to use it?</h6>
      </SubHeading>
      <Card onClick={submitForm}>
        <CardBody>
          <ImageContainer>
            <img
              src={cashAppImg}
              alt="Cash App Linkable"
            />
          </ImageContainer>
          <TextContent>
            <p>
              The{' '}
              <font color="#dd3333">
                <span>Cash App</span>
              </font>{' '}
              linkable, often called the Cash Card, is a physical or virtual debit card issued by CashApp, which you can buy from our online store. It’s designed to work in conjunction with your Cash App account and is linked to your Cash App balance, allowing you to make purchases, withdraw cash from ATMs, and spend money just like a traditional debit card.
            </p>
            <h2>
              Here are some key features and details about the Cash App Linkable Card:
            </h2>
            <ol>
              <li>
                <span style={{ fontWeight: '700' }}>Linked to Cash App</span>: The Cash App Linkable is directly linked to your Cash App account. You can use the funds available in your CashApp balance to fund transactions made with the card.
              </li>
              <li>
                <span style={{ fontWeight: '700' }}>ATM Withdrawals</span>: You can use the CashApp Linkable to withdraw cash from ATMs. CashApp may charge fees for ATM withdrawals, so it’s essential to check the fee structure.
              </li>
              <li>
                <span style={{ fontWeight: '700' }}>Boosts</span>: CashApp offers a feature called “Boosts” that allows you to earn cashback rewards or receive discounts at select merchants when you use your Linked Cash Card for purchases at those locations.
              </li>
              <li>
                <span style={{ fontWeight: '700' }}>Direct Deposit</span>: You can set up direct deposit with your Linkable. This means you can have your paychecks, tax refunds, or other income deposited directly into your CashApp account, making it available for use with the Cash App linkable.
              </li>
              <li>
                <span style={{ fontWeight: '700' }}>Virtual Card</span>: In addition to the physical card, Cash linkables are also available in a virtual version of the Cash Card. This virtual card can be used for online purchases and is accessible within the CashApp Account.
              </li>
              <li>
                <span style={{ fontWeight: '700' }}>Security Features</span>: Cash App allows you to lock and unlock your linked Cards from the app for added security.
              </li>
            </ol>
            <p>
              Linking a credit or debit card to CashApp means connecting your CashApp account to your purchased linkable cc. This linkable enables you to perform various financial transactions and use your CashApp account to send, receive, or spend money within the CashApp ecosystem. Here’s what it typically allows you to do:
            </p>
            <ol>
              <li>
                Add Funds: Linking your card to CashApp allows you to add money to your Cash App balance. You can transfer funds from your linked credit or debit card to your{' '}
                <font color="#dd3333">
                  <span>CashApp account</span>
                </font>, making it available for use within the app.
              </li>
              <li>
                Send Money: You can use your linked card (linkable) to send money to other CashApp users. When you initiate a payment, CashApp may use your linked card or linkable as the funding source for the transaction.
              </li>
              <li>
                Receive Money: If someone sends you money through CashApp, you can receive it in your Cash App account. You can then choose to keep the balance in your CashApp account or transfer it to your linked bank account.
              </li>
              <li>
                Make Purchases: Some merchants and businesses accept CashApp as a payment method. This is possible with a CashApp linkable, use it to make purchases at these locations or online stores that support Cash App payments.
              </li>
              <li>
                Cash Card: CashApp offers a physical debit card called the Cash Card. You can link your bank-issued debit or credit card to your CashApp account to fund your Cash Card. This allows you to make purchases and withdraw cash from ATMs using the Cash Card.
              </li>
              <li>
                Automatic Transfers: You can set up automatic transfers from your linked cards or bank account to your CashApp account to maintain a balance for easier spending and transactions.
              </li>
              <li>
                Cash App Boosts: CashApp sometimes offers cashback rewards and discounts (known as “Boosts”) for using your linked card at specific merchants or restaurants.
              </li>
            </ol>
            <p>
              It’s important to note that when you link a credit or debit card to CashApp, you may be subject to certain fees and transaction limits, which can vary depending on your account status and usage.
            </p>
          </TextContent>
        </CardBody>
      </Card>
      <CommentsArea>
        <div className="comment-card">
          <h6>No Comments Yet</h6>
        </div>
      </CommentsArea>
    </Container>
  );
};

export default TutorialDetail;
