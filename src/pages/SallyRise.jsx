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
        after:h-20 after:content['']  after:bg-rose-0 after:right-8 after:bottom-3 after:rounded-full after:blur-lg mb-5">
        <div style={styles.title}>
        SallyRise
        </div>
        <div style={styles.body}>
        Your Ultimate Academic Companion Overview: SallyRise is a 
        comprehensive educational platform developed by our dynamic team—Divya, 
        Jingyi, Chuanyou, and Yewint. It’s designed to be the ultimate academic 
        companion in a world saturated with technological advancements. 
        </div>
      </div>
        <div>
        <iframe 
          width="100%" 
          height="315" 
          src="https://www.youtube.com/embed/A5s-SpdTFiY" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture" 
          allowFullScreen
          title="DressSense.AI"
        ></iframe>
        </div>
        <div class="group gap-9 group-hover:before:duration-500 group-hover:after:duration-500 
        after:duration-500 hover:border-cyan-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] 
        duration-500 before:duration-500 hover:duration-500 hover:text-cyan-900 hover:text-lg 
        origin-left relative bg-sky-200 h-90 w-full border text-left p-3 text-gray-50 text-base font-bold rounded-lg  
        overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:bottom-1 
        before:z-10 before:bg-rose-300 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 
        after:h-20 after:content['']  after:bg-rose-0 after:right-8 after:bottom-3 after:rounded-full after:blur-lg mt-5">
          <div style={styles.title}>
            Key Features
          </div>
        </div>
          <div style={styles.subContainer}>
          <div class="group gap-9 group-hover:before:duration-500 group-hover:after:duration-500 
        after:duration-500 hover:border-cyan-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] 
        duration-500 before:duration-500 hover:duration-500 hover:text-cyan-900 hover:text-lg 
        origin-left relative bg-sky-200 h-90 w-1/2 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  
        overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:bottom-1 
        before:z-10 before:bg-rose-300 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 
        after:h-20 after:content['']  after:bg-rose-0 after:right-8 after:bottom-3 after:rounded-full after:blur-lg mr-5">
            <div style={styles.body}>
                Summariser:  </div>
                <div style={styles.body}>
                Simplifies extensive paragraphs into concise 
                key points, facilitating easy digestion of information. 
                Uses Artifical Intelligence in the form of NLP which decodes 
                and tokenizes the words into numbers and finds number-matching patterns 
                forming a string of numbers that result in a sentence. This process 
                results in a concise summary.
            </div>
            </div>
            <div class="group gap-9 group-hover:before:duration-500 group-hover:after:duration-500 
        after:duration-500 hover:border-cyan-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] 
        duration-500 before:duration-500 hover:duration-500 hover:text-cyan-900 hover:text-lg 
        origin-left relative bg-sky-200 h-90 w-1/2 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  
        overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:left-1 before:bottom-1 
        before:z-10 before:bg-rose-300 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 
        after:h-20 after:content['']  after:bg-rose-0 after:left-8 after:top-3 after:rounded-full after:blur-lg ">
            <div style={styles.body}>
            Sally: </div>
            <div style={styles.body}>A chatbot that adds a personalized touch to the learning experience
            . Through real-time conversations, students can seek clarification, ask 
            questions about their studies, or engage in meaningful discussions on various
             topics. We used a pre-existing large language model and changed the features
              accordingly to suit our dataset.
          </div>
          </div>
          </div>
          <div style={styles.subContainer}>
          <div class="group gap-9 group-hover:before:duration-500 group-hover:after:duration-500 
        after:duration-500 hover:border-cyan-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] 
        duration-500 before:duration-500 hover:duration-500 hover:text-cyan-900 hover:text-lg 
        origin-left relative bg-sky-200 h-90 w-1/2 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  
        overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 
        before:z-10 before:bg-rose-300 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 
        after:h-20 after:content['']  after:bg-rose-0 after:right-8 after:top-3 after:rounded-full after:blur-lg  mr-5">
          <div style={styles.body}>
          QnA Flashcard: </div>
                <div style={styles.body}>Generates personalized questions and answers based on 
                the user’s topic, providing an instant recap after reading the summarized 
                content. The QnA Flashcard uses Artificial Intelligence in a similar manner 
                to the Summariser. All generated flashcards are securely stored in a MySQL 
                database for future reference. We used a pre-trained open source model from
                HuggingFace community for the above 2 features.
            </div>
            </div>
            <div class="group gap-9 group-hover:before:duration-500 group-hover:after:duration-500 
        after:duration-500 hover:border-cyan-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] 
        duration-500 before:duration-500 hover:duration-500 hover:text-cyan-900 hover:text-lg 
        origin-left relative bg-sky-200 h-90 w-1/2 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  
        overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:left-1 before:top-1 
        before:z-10 before:bg-rose-300 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 
        after:h-20 after:content['']  after:bg-rose-0 after:left-8 after:top-3 after:rounded-full after:blur-lg  mr-5">
            <div style={styles.body}>
            Intuitive user interface and interactive design: </div>
            <div style={styles.body}>
            We used Flask as a 
            framework to render our front and back-ends of our web application. We have
             implemented a dark mode, as it is preferred by most students. Scalability:
             SallyRise scales effortlessly across mobile and web platforms, ensuring 
             accuracy with increased user input. Future plans include accommodating l
             arger documents, offline access, and AI-generated flowcharts as part of 
             image generation.
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
    paddingBottom:'3%',
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '5%',
    justifyContent: 'space-between',
    width: '100%',
  },
  box: {
    background: '#bae6fd',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingBottom: '2%',
    borderRadius: '5px',
    border: '2px solid',
    boxShadow: '2px 2px',
    marginTop:'5%',
    marginBottom:'2%',
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
