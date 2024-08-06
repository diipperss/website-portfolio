import React from 'react';

const Equify = () => {
  return (
    <div style={styles.container}>
      <div class="group gap-9 group-hover:before:duration-500 group-hover:after:duration-500 
        after:duration-500 hover:border-cyan-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] 
        duration-500 before:duration-500 hover:duration-500 hover:text-cyan-900 hover:text-lg 
        origin-left relative bg-sky-200 h-90 w-full border text-left p-3 text-gray-50 text-base font-bold rounded-lg  
        overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:bottom-1 
        before:z-10 before:bg-rose-300 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 
        after:h-20 after:content['']  after:bg-rose-0 after:right-8 after:bottom-3 after:rounded-full after:blur-lg">
        <div style={styles.title}>
          DressSense.AI
        </div>
        <div style={styles.body}>
        DressSense app aims to revolutionize the fashion industry by leveraging technology 
        to breathe new life into our forgotten garments lingering in the depths of our closets.
         We aim to address the issue of having to continuously purchase new clothing to remain 
         trendy while neglecting existing wardrobe items. Through the use of Artificial Intelligence
          and machine learning algorithms, our app is able to transform old and underutilized clothing
           pieces into stylish and distinctive ensembles.
        </div>
        <div style={styles.body}>
           Effectively, DressSense serves two main purposes. They are as follows:
        </div>
        <div style={styles.body}>
            1.The first purpose is to allow users to have a cost effective 
            alternative instead of needing to continually replenish their wardrobe.
        </div>
        <div style={styles.body}>
            2. The second purpose is to promote a sustainable fashion practice.
            Additionally the app will also include a feature that allows users to sell, 
            by looking up prices from online second hand marketplaces and suggesting 
            an appropriate price and website to sell it. 
        </div>
      </div>
      <div style={styles.subContainer}>
        <div class="group gap-9 group-hover:before:duration-500 group-hover:after:duration-500 
        after:duration-500 hover:border-cyan-300 duration-500 hover:duration-500 hover:text-cyan-900 hover:text-lg 
        origin-left relative bg-sky-200 h-90 w-1/2 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  
        overflow-hidden mt-2 mr-5">
          
        <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/raq6prdYOvs" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture" 
          allowFullScreen
          title="DressSense.AI"
        ></iframe>
        </div>
        <div class="group gap-9 group-hover:before:duration-500 group-hover:after:duration-500 
        after:duration-500 hover:border-cyan-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] 
        duration-500 before:duration-500 hover:duration-500 hover:text-cyan-900 hover:text-lg 
        origin-left relative bg-sky-200 h-90 w-1/2 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  
        overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:bottom-1 
        before:z-10 before:bg-rose-300 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 
        after:h-20 after:content['']  after:bg-rose-0 after:right-8 after:bottom-3 after:rounded-full after:blur-lg mt-2 mr-5">
          <div style={styles.title}>
            Key Takeaways
          </div>
          <div style={styles.body}>
            Technology stack used: React Native, Firebase, OpenAI
          </div>
          <div style={styles.body}>
            Documentation was completed in the form of a 74 page 
            Software Requirements Specification (SRS)
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '7%',
    marginLeft: '25%',
    width: '50%',
    paddingBottom:'2%'
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '5%',
    justifyContent: 'space-between',
    width: '100%',
  },
  box: {
    background: 'lightblue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingBottom: '2%',
    borderRadius: '5px',
    border: '2px solid',
    boxShadow: '4px 4px',
  },
  box2: {
    background: 'lightblue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingBottom: '2%',
    borderRadius: '5px',
    border: '2px solid',
    boxShadow: '4px 4px',
    width: '45%',
  },
  title: {
    color: '#323232',
    fontWeight: 500,
    fontSize: '30px',
    display: 'block',
    marginTop: '20px',
    marginLeft: '20px',
    fontFamily: 'Montserrat, sans-serif',
  },
  body: {
    color: '#323232',
    fontWeight: 400,
    fontSize: '20px',
    display: 'block',
    marginTop: '20px',
    marginLeft: '20px',
    fontFamily: 'Montserrat, sans-serif',
  },
};

export default Equify;
