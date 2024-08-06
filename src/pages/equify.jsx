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
        after:h-20 after:content['']  after:bg-rose-0 after:right-8 after:bottom-3 after:rounded-full after:blur-lg mt-2 mr-5">
        <div style={styles.title}>
          Equify
        </div>
        <div style={styles.body}>
          I was selected for the UBS Tomorrow’s Talent Program 2024. 
          During this 10-week program, I honed my software development skills, 
          particularly in mobile app development. 
          I developed a full-stack application that addressed the company’s challenge 
          to create a technical solution for raising awareness and reducing unconscious 
          biases in the workplace. At the end of the program, I presented my solution to the 
          company and received excellent feedback.
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
          src="https://www.youtube.com/embed/S30leXNflMY" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture" 
          allowFullScreen
          title="Equify"
        ></iframe>
        </div>
        <div class="group flex-col gap-9 group-hover:before:duration-500 group-hover:after:duration-500 
        after:duration-500 hover:border-cyan-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] 
        duration-500 before:duration-500 hover:duration-500 hover:text-cyan-900 hover:text-lg 
        origin-left relative bg-sky-200 h-90 w-1/2 border text-left p-3 text-gray-50 text-base font-bold rounded-lg  
        overflow-auto  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:bottom-1 
        before:z-10 before:bg-rose-300 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 
        after:h-20 after:content['']  after:bg-rose-0 after:right-8 after:bottom-3 after:rounded-full after:blur-lg mt-2 mr-5">
          <div style={styles.title}>
            Main features
          </div>
          <div style={styles.body}>
            1. Quiz questions are tailored to each department, based on their specific situations.
          </div>
          <div style={styles.body}>
           2. The homepage offers entertainment similar to other social media platforms, but it is customized for each individual’s learning path.
          </div>
          <div style={styles.body}>
          3. The diversity dashboard enables users to view their company’s statistics interactively and in a clean format.          </div>
          <div style={styles.body}>
          4. A user-friendly forum feature that enables users to submit ideas and track their acceptance, with administrators granted additional privileges.          </div>
          <div style={styles.body}>
           5. Administrators can efficiently categorize videos upon uploading them to the database using a TensorFlow AI model.
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
    padding:'2%'
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
    boxShadow: '4px 4px',
  },
  box2: {
    background: '#bae6fd',
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
