import React from 'react'

const DevLog = () => (
  <article>
    <h2>Development Log</h2><br></br>
    <h4><strong>Week 50</strong></h4>
    <ul>
      <li>Write design documentation and define tasks</li>
      <li>Established the frontend page architecture</li>
     
    </ul><br></br>

    <h4><strong>Week 52</strong></h4>
    <ul>
      <li>Designed product database schema and attributes</li>
      <li>Build a Python automation script to clean, transform and upload product data into AWS DynamoDB</li>
    </ul><br></br>

    <h4><strong>Week 1</strong></h4>
    <ul>
      <li>Implemented RESTful APIs for creating, reading, and updating product and order data using AWS Lambda and API Gateway.</li>
      <li>Standardized size filed formats to enable sorting and filtering feature</li>
      <li>Improve frontend UI and layout for product listing</li>
    </ul><br></br>

    <h4><strong>Week 2</strong></h4>
    <ul>
      <li>Retrieved Stripe API keys and implement payment feature</li>
      <li>Successfully integrated Stripe Checkout</li>
      <li>Added Stripe Webhook event handling to listen for payment status updates</li>
      <li>Verified webhook flow for successful payment and order confirmation</li>
    </ul>
    <img 
      src="/img/rongcrochet/order.jpg" 
      alt="Order confirmation" 
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '1rem 0',
        display: 'block'
      }}
    /><br></br>

    <h4><strong>Week 3</strong></h4>
    <ul>
      <li>Implemented Markdown (MD) content rendering to display articles and informational pages on the website</li>
      <li>Integrated AWS SES to enable transactional emails (order confirmation, notifications).</li>
      <img 
      src="/img/rongcrochet/email.jpg" 
      alt="Order confirmation" 
      style={{
        width: '100%',
        maxWidth: '800px',
        margin: '1rem 0',
        display: 'block'
      }}
    /><br></br>
     <li>Switched Stripe from test mode to live account and verified production payment flow.</li>
      <li>Refactored configuration management to load JSON-based config files from AWS S3.</li>
    </ul><br></br>

    <h4><strong>TODO</strong></h4>
    <ul>
      <h4><strong>Login</strong></h4>
      <li> Design user authentication flow</li>
      <li>Third-party(AWS Cognito)</li>
      <li>Database(user data model， AWS RDS)</li>
      <li>Frontend(sign up, log in, order history, order status)</li>
      <li>Backend(authentication, get order history)</li>
      <li>Validate access control</li >
     
      <h4><strong>Subscription</strong></h4>
      <li> Design</li>
    </ul>
  </article>
)

export default DevLog
