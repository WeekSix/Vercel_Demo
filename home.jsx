import React from 'react';
import './styles.css';
import Modal from './modal';

//Stock Photo?
const sectionStyle1 = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/image1.jpg)`
};

//The OK | Computer A
const sectionStyle2 = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/image2.jpg)`
};

//3090 Project
const sectionStyle3 = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/image3.jpg)`
};


const Home = () => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleSectionClick = (Src) => {
    setCurrentImage(Src);
    setModalVisible(true);
  };
  
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <main>
      <section id="section1" className="section" style={sectionStyle1}>
        <div className="content">
          <h1>Welcome to Section 1</h1>
          <p>This is the first section.</p>
        </div>
      </section>
      <section 
        id="section2" 
        className="section" 
        style={sectionStyle2}
        onClick={() => handleSectionClick('${process.env.PUBLIC_URL}/image2.jpg')}>

        <div className="content">
          <h1>Welcome to Section 2</h1>
          <p>This is the second section.</p>
        </div>
      </section>
      
      <section id="section3" className="section" style={sectionStyle3}>
        <div className="content">
          <h1>Welcome to Section 3</h1>
          <p>This is the third section.</p>
        </div>
      </section>

      <Modal
      isVisible={isModalVisible}
      onClose={handleCloseModal}
      Src={currentImage}
    />

    </main>
  );
};

export default Home;
