import React, {useState} from 'react';
import "./LandingPage.css";
import {ButtonLink} from '../../components/button/Button'
import Footer from '../../components/footer/Footer';


const categories = [
  {
    title: 'Task Management',
    features: [
      { 
        title: 'Task Creation & Editing', 
        description: 'Create new tasks with titles, descriptions, due dates, and priorities. Edit and update existing tasks.' 
      },
      { 
        title: 'Priority Levels', 
        description: 'Assign priority levels to tasks (Low, Medium, High) and sort or filter tasks based on priority.' 
      },
      { 
        title: 'Recurring Tasks', 
        description: 'Enable recurring tasks (e.g., daily, weekly). Automatically generate tasks on a schedule.' 
      },
      { 
        title: 'Subtasks', 
        description: 'Break down tasks into smaller, manageable subtasks. Track progress on both tasks and subtasks.' 
      },
    ]
  },
  {
    title: 'Collaboration & Communication',
    features: [
      { 
        title: 'Task Dependencies', 
        description: 'Create dependencies between tasks, making sure one task is completed before another can start.' 
      },
      { 
        title: 'Collaboration & Sharing', 
        description: 'Share tasks with team members or friends, assign tasks to multiple users, and track progress together.' 
      },
      { 
        title: 'Task Comments & Notes', 
        description: 'Add comments and notes to tasks for extra context or collaboration.' 
      },
      { 
        title: 'Reminders & Notifications', 
        description: 'Receive reminders and notifications for task due dates, updates, and progress.' 
      },
    ]
  },
  {
    title: 'Personalization & Analytics',
    features: [
      { 
        title: 'Analytics/Reports', 
        description: 'Track task completion statistics and generate productivity reports.' 
      },
      { 
        title: 'Customizable Themes', 
        description: 'Personalize the app by choosing from a variety of themes.' 
      },
      { 
        title: 'Dark Mode', 
        description: 'Switch between light and dark mode for a more personalized experience.' 
      },
    ]
  },
  {
    title: 'Task Visualization & Management',
    features: [
      { 
        title: 'Due Dates & Deadlines', 
        description: 'Set due dates and deadlines for tasks. Get notified as deadlines approach.' 
      },
      { 
        title: 'Progress Tracking', 
        description: 'Visualize task progress using checkboxes, progress bars, or percentage completion.' 
      },
      { 
        title: 'Calendar View', 
        description: 'View tasks on a calendar to see due dates and deadlines visually.' 
      },
      { 
        title: 'Search & Filtering', 
        description: 'Search and filter tasks by title, category, due date, or tags.' 
      },
    ]
  }
];

const LandingPage = () => {

  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (categoryIndex) => {
    if (expandedCategory === categoryIndex) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryIndex)
    }
  }


  return (

    <div className="landing-page">
      <header className='header'>
      <div className="logo">
        <h1>Zento</h1>
      </div>
      <div className="auth-btns">
        <ButtonLink to={'/signup-form'} text={'Sign In'} className={'no-outline'}/>
        <ButtonLink to={'/login-form'} text={'Log In'} className={'no-outline'}/>
      </div>
    </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Awesome Website</h1>
          <p>Your one-stop solution for everything you need!</p>
          <ButtonLink text={'Get Started'} />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Feature 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feature-card">
            <h3>Feature 2</h3>
            <p>Nulla facilisi. Integer lobortis eros in justo viverra.</p>
          </div>
          <div className="feature-card">
            <h3>Feature 3</h3>
            <p>Quisque finibus, mi at eleifend egestas, augue odio.</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Key Features</h2>
        {categories.map((category, index) => (
          <div key={index} className="category">
            <div className="category-title" onClick={() => toggleCategory(index)}>
              <h3>{category.title}</h3>
              <span>{expandedCategory === index ? '-' : '+'}</span>
            </div>
            {expandedCategory === index && (
              <div className="category-features">
                {category.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
      <>
      
      
      {categories.map((category, index) => (
        <section className={`acc-features-section ${category}`}>
          {index % 2 === 0 && (
              <div className='side-img'>
                
          </div>)}
          <div className='section-left'>
            
          </div>
          <div className='section-right'>
            {index % 2 !== 0 && (
              <div className='side-img'>

              </div>)}
          </div>
        </section>
      ))}</>
    


      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"This product changed my life! Highly recommend."</p>
            <h4>Jane Doe</h4>
          </div>
          <div className="testimonial-card">
            <p>"Amazing service and easy to use. 5 stars!"</p>
            <h4>John Smith</h4>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Get in Touch</h2>
        <p>If you have any questions, feel free to reach out!</p>
        <a href="mailto:example@example.com" className="cta-button">Contact Us</a>
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage; 
