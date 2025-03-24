import React from 'react';
import cashAppImg from '../../assets/tuts/cc.jpg';
import exampleImage from '../../assets/tuts/carding.jpeg';
import pp from '../../assets/tuts/pp.png';
import coin from '../../assets/tuts/coin.jpeg';
import forest from '../../assets/tuts/forest.jpeg';

const TutorialCard = ({ image, title, description, link }) => {
  return (
    <a href={link} style={{ textDecoration: 'none' }}>
      <div
        className="card-body resp"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          padding: 0,
          backgroundColor: '#1e1e1e',
          borderRadius: '10px',
          overflow: 'hidden',
          marginBottom: '20px'
        }}
      >
        <div className="container-image" style={{ flex: 1 }}>
          <img
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'cover',
              objectPosition: 'center top'
            }}
            src={image}
            alt={title}
          />
        </div>
        <div className="container-name" style={{ flex: 1, padding: '30px' }}>
          <h5 style={{ margin: 0, color: '#fff' }}>{title}</h5>
          <h6 style={{ display: 'inline-block', color: '#ccc', marginTop: '10px' }}>
            {description}{' '}
            <span style={{ color: 'brown' }}>[...]</span>
          </h6>
        </div>
      </div>
    </a>
  );
};

const TutorialsPage = () => {
  const tutorials = [
    {
      id: 1,
      title: 'What is A Cash App Linkable and How to use it?',
      description:
        'The Cash App linkable, often called the Cash Card, is a physical or virtual debit card issued by CashApp, which you',
      image: cashAppImg,
      link: '/shop/what-is-a-cash-app-linkable-and-how-to-use-it'
    },
    {
      id: 2,
      title: '6 carding friendly e-commerce sites',
      description:
        'In this article, we will share with you a hand-picked selection of e-commerce sites where one can safely purchase electronic goods using a stolen bank card. Their administration would never suspect you of any dubious actions. For third parties, your purchase would look 100% legit. There would be simply no signs or hints of you using a card that does not belong to you.',
      image: exampleImage,
      link: '/shop/carding-friendly-e-commerce-sites'
    },
    {
      id: 3,
      title: 'HOW TO LINK PAYPAL WITH PURCHASED BANK LOG',
      description:
        'So many people have complaining they don’t have cashapp, chime or greendot but they have PayPal bank!',
      image: pp,
      link: '/shop/how-to-link-paypal-with-a-bank-log'
    },
    {
      id: 4,
      title: 'Coinbase method using First Tech Federal Credit Union Bank',
      description:
        'Once you login on coinbase, On the portfolio Dashboard you will see these 9 arranged dots, just click on it.',
      image: coin,
      link: '/shop/coinbase-method'
    },
    {
      id: 5,
      title: 'CASHAPP DIRECT DEPOSIT USING WOODFOREST BANK LOG',
      description:
        'Login to the Woodforest bank log and confirm identity using the code sent to the email access of the bank log you bought.',
      image: forest,
      link: '/shop/direct-deposit-using-woodforest'
    }
  ];

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', padding: '20px' }}>
      <style>
        {`
          /* Text animation for the title */
          @keyframes textAnimation {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .title {
            animation: textAnimation 1.5s ease-out;
          }
          
          /* Sleek image hover effect */
          .container-image img {
            transition: transform 0.5s ease, filter 0.5s ease;
          }
          .container-image:hover img {
            transform: scale(1.05);
            filter: brightness(1.1);
          }
          
          @media (max-width: 768px) {
            .container-image img {
              height: auto !important;
            }
          }
        `}
      </style>
      <h1
        className="title"
        style={{
          color: '#ff9900',
          fontSize: '50px',
          marginTop: '50px',
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
          textAlign: 'center'
        }}
      >
        Tutorials
      </h1>
      {tutorials.map((tutorial) => (
        <TutorialCard
          key={tutorial.id}
          image={tutorial.image}
          title={tutorial.title}
          description={tutorial.description}
          link={tutorial.link}
        />
      ))}
    </div>
  );
};

export default TutorialsPage;
