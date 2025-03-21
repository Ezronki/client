import React from 'react';
import styled, { keyframes } from 'styled-components';
import coin from '../../assets/tuts/coin.jpeg';

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
  figure {
    margin: 0 auto 1.25rem;
    max-width: 100%;
  }
`;

const CommentArea = styled.div`
  margin-top: 40px;
`;

const CommentCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-top: 20px;
`;

const CoinbaseTutorialDetail = () => {
  const submitForm = () => {
    document.getElementById('postForm')?.submit();
  };

  return (
    <Container>
      <CategoryHeading>
        <h4>Coinbase method using Federal Credit Union Bank</h4>
      </CategoryHeading>
      <SubHeading>
        <h6>FREE METHODS/Coinbase method using Federal Credit Union Bank</h6>
      </SubHeading>
      <Card onClick={submitForm}>
        <CardBody>
          <ImageContainer>
            <img src={coin} alt="Coinbase method using First Tech Federal Credit Union Bank" />
          </ImageContainer>
          <TextContent>
            <p style={{ textAlign: 'center' }}>
              <img src="https://easycasher.site/uploads/post/1697549713_652e8d91695f1.jpg" style={{ width: '473.003px' }} alt="" />
            </p>
            <p style={{ textAlign: 'center' }}>
              1• Once you login on coinbase, On the portfolio Dashboard you will see these 9 arranged dots, just click on it.
            </p>
            <p style={{ textAlign: 'center' }}>
              <img src="https://easycasher.site/uploads/post/1697549793_652e8de1784d8.jpg" style={{ width: '473.003px' }} alt="" />
            </p>
            <p style={{ textAlign: 'center' }}>
              2• On this page, click on Profile &amp; Settings
            </p>
            <p style={{ textAlign: 'center' }}>
              <img src="https://easycasher.site/uploads/post/1697549852_652e8e1ce1339.jpg" style={{ width: '473.003px' }} alt="" />
            </p>
            <p style={{ textAlign: 'center' }}>
              3• This will be the next page after stage 2.&nbsp;
              <font color="#dd3333">
                <span style={{ backgroundColor: '#fff' }}>Navigate</span>
              </font>{' '}
              to the Add a Payment Method option as seen above
            </p>
            <p style={{ textAlign: 'center' }}>
              <img src="https://easycasher.site/uploads/post/1697549894_652e8e46f11a5.jpg" style={{ width: '473.003px' }} alt="" />
            </p>
            <p style={{ textAlign: 'center' }}>
              4• Coinbase is having many Payment Options which you can choose in terms of purchasing crypto from them. However our main focus is on how to buy BTC with Banklog without the name on log. Proceed by tapping on Bank Account as your Payment Option
            </p>
            <p style={{ textAlign: 'center' }}>
              <img src="https://easycasher.site/uploads/post/1697549945_652e8e79b623c.jpg" style={{ width: '473.003px' }} alt="" />
            </p>
            <p style={{ textAlign: 'center' }}>
              5• The previous page will redirect you to Plaid. Just click on Continue
            </p>
            <p style={{ textAlign: 'center' }}>
              <img src="https://easycasher.site/uploads/post/1697550001_652e8eb1903df.jpg" style={{ width: '473.003px' }} alt="" />
            </p>
            <p style={{ textAlign: 'center' }}>
              6• Now at this section you will be asked to select your bank…. You can choose to link with Online Access or Manually but since our banks doesn’t require any OTP code verification just go ahead and link it with online access.
            </p>
            <p style={{ textAlign: 'center' }}>
              <img src="https://easycasher.site/uploads/post/1697550049_652e8ee14aad2.jpg" style={{ width: '590px' }} alt="" />
            </p>
            <p style={{ textAlign: 'center' }}>
              7• Search the bank and link your Bank Log with the online access and buy BTC for same day withdrawal. To do this, just type the bank name on the space provided above and when your bank appears then you just click on it
            </p>
            <p style={{ textAlign: 'center' }}>
              <img src="https://easycasher.site/uploads/post/1697550089_652e8f0903752.jpg" style={{ width: '590px' }} alt="" />
            </p>
            <p style={{ textAlign: 'center' }}>
              8• Login with username and password of the hacked bank log you bought
            </p>
            <p style={{ textAlign: 'center' }}>
              <img src="https://easycasher.site/uploads/post/1697550115_652e8f231442f.jpg" style={{ width: '590px' }} alt="" />
            </p>
            <p style={{ textAlign: 'center' }}>
              9• Now all you have to do is wait for the bank to be connected to Plaid. All you have to do is select the checking’s account from which you want to buy your crypto from.
            </p>
            <p style={{ textAlign: 'center' }}>
              <img src="https://easycasher.site/uploads/post/1697550199_652e8f77027ce.jpg" style={{ width: '568.993px' }} alt="" />
            </p>
            <p style={{ textAlign: 'center' }}>
              10• Most of the banks requires OTP code verification before you get to this stage but since our above bank logs doesn’t require any OTP code verification you will be taken to this page straight away. All you have to do is select the checking’s account from which you want to buy your crypto from.
            </p>
            <p style={{ textAlign: 'center' }}>
              <img src="https://easycasher.site/uploads/post/1697550585_652e90f9c333b.jpg" style={{ width: '573.993px' }} alt="" />
            </p>
            <p style={{ textAlign: 'center' }}>
              12• Once you login back to your Coinbase payment options you will see the linked account
            </p>
            <p style={{ textAlign: 'center' }}>
              <img src="https://easycasher.site/uploads/post/1697550436_652e9064287ec.jpg" style={{ width: '471.997px' }} alt="" />
            </p>
            <p style={{ textAlign: 'center' }}>
              13• Now to begin with the Crypto[BTC] Purchasing, just click on Buy or the [+] Sign on your dashboard
            </p>
            <p style={{ textAlign: 'center' }}>
              <img src="https://easycasher.site/uploads/post/1697550474_652e908a4dcdc.jpg" style={{ width: '498.003px' }} alt="" />
            </p>
            <p style={{ textAlign: 'center' }}>
              14• You will be asked to enter the Amount of Crypto needed. You can’t enter any amount higher than your bank buying limit shown on screenshot above 
              <img src="https://s.w.org/images/core/emoji/14.0.0/svg/1f446-1f3ff.svg" alt="👆🏿" style={{ width: '1em' }} />
              <img src="https://s.w.org/images/core/emoji/14.0.0/svg/1f446-1f3ff.svg" alt="👆🏿" style={{ width: '1em' }} />
              <img src="https://s.w.org/images/core/emoji/14.0.0/svg/1f446-1f3ff.svg" alt="👆🏿" style={{ width: '1em' }} />
            </p>
            <p style={{ textAlign: 'center' }}>
              <img src="https://easycasher.site/uploads/post/1697550658_652e91425291b.jpg" style={{ width: '473.003px' }} alt="" />
            </p>
            <p style={{ textAlign: 'center' }}>
              15• So I entered $19,925.00 as Amount of bitcoin needed
            </p>
            <p style={{ textAlign: 'center' }}>
              <img src="https://easycasher.site/uploads/post/1697550613_652e911562db7.jpg" style={{ width: '473.003px' }} alt="" />
            </p>
            <p style={{ textAlign: 'center' }}>
              16• Now this will show you. Mostly it is available instantly to Trade and they give you 5 hours to make withdrawal since you linked your bank with online access…. Once everything looks proceed by clicking on Buy Now
            </p>
            <p style={{ textAlign: 'center' }}>
              Note: But when you link the Bank log manually they might give you 3,7 or even 13 Days to make withdrawal of purchases…
            </p>
            <p style={{ textAlign: 'center' }}>
              17• Bitcoin purchased successfully 
              <img src="https://s.w.org/images/core/emoji/14.0.0/svg/1f525.svg" alt="🔥" style={{ width: '1em' }} />
              <img src="https://s.w.org/images/core/emoji/14.0.0/svg/1f525.svg" alt="🔥" style={{ width: '1em' }} />
              <img src="https://s.w.org/images/core/emoji/14.0.0/svg/1f525.svg" alt="🔥" style={{ width: '1em' }} />
            </p>
            <p style={{ textAlign: 'center' }}>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'center' }}>
                <li>
                  Most of the banks requires OTP code verification when linking through Plaid but beneath are some secret banks that link through Plaid without OTP and allows buying of crypto through Coinbase even when name isn’t matching that of the Coinbase.
                </li>
              </ul>
            </p>
            <p style={{ textAlign: 'center' }}>•FIRST TECH FEDERAL CREDIT UNION BANK</p>
            <p style={{ textAlign: 'center' }}>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'center' }}>
                <li>m&t</li>
                <li>•HUNTINGTON</li>
              </ul>
            </p>
           
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

export default CoinbaseTutorialDetail;
