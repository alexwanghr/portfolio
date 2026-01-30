import React from 'react'
import ReactMarkdown from 'react-markdown'

const markdownContent = `
## Project Structure


\`\`\`
frontend/
├── src/
│   ├── api/              # API service functions
│   │   ├── config.js     # S3 config endpoints (categories, shipping, news, hot)
│   │   ├── order.js      # Order management
│   │   ├── products.js   # Product CRUD
│   │   ├── stripeCheckout.js  # Stripe session creation
│   │   └── upload.js     # File upload utilities
│   ├── components/       # React components
│   │   ├── checkout/     # Checkout flow (Cart, OrderReview, Checkout, OrderConfirmation)
│   │   ├── news/         # News and articles
│   │   └── product/      # Product display components
│   ├── context/          # React Context providers
│   │   ├── CartContext.jsx    # Shopping cart state
│   │   └── ProductContext.jsx  # Product data state
│   └── utils/            # Utility functions
│       └── fetchWrapper.js    # HTTP request wrapper
└── public/
    ├── img/              # Static images
    ├── categories.json   # Category definitions
    ├── news-items.json   # News articles data
    └── shipping-rates.json  # Shipping configuration

backend/              # AWS Serverless Backend
└── lambda/           # Lambda functions
    ├── products/     # Product CRUD operations
    ├── orders/       # Order management
    ├── stripe/       # Stripe checkout & webhook handlers
    └── upload/       # S3 presigned URL generation
\`\`\`

## Architecture Diagram
![Site Architecture Diagram](/img/rongcrochet/architecture_diagram.jpg)

## Features

- Product catalog with filtering (category, occasion, theme, yarn material) and sorting
- Shopping cart state persisted in browser storage
- Order review page with quantity adjustment and stock validation
- Checkout with Stripe payment integration
- Shipping rate calculation based on weight
- priority display
- News and articles system with markdown support
- Color variant support for products

## Tech Stack

- **React 19.1.1** 
- **Vite 7.1.7**  
- **React Router DOM 7.11.0** 
- **Tailwind CSS 4.1.14** 
- **Stripe**  
- **EmailJS** 
- **React Markdown**  
- **Lucide React** 
- **AWS Lambda**  
- **AWS API Gateway**  
- **AWS S3**  
- **AWS DynamoDB**  
- **AWS SES**  

## API Overview

### Backend API (\VITE_API_BASE_URL)

- \`GET /products\` - Fetch all products
- \`POST /products\` - Create product
- \`GET /orders\` - Fetch orders
- \`POST /orders\` - Create order
- \`GET /orders/:id\` - Get order by ID
- \`POST /stripe/checkout\` - Create Stripe checkout session
- \`POST /upload-url\` - Get S3 presigned upload URL

### S3 Config API (\VITE_S3_BASE_URL_CONFIG)

- \`GET categories.json\` - Product categories, occasions, themes, yarns
- \`GET shipping-rates.json\` - Shipping rate configuration
- \`GET news-items.json\` - News articles and events

### S3 Assets (\VITE_S3_BASE_URL_PRODUCT_IMAGE)

- Product images served from S3 bucket
`


const RongCrochetReadme = () => (
  <article>
    <div style={{
      lineHeight: '1.6',
      color: 'var(--color-text-primary)'
    }}>
      <ReactMarkdown
        components={{
          code: ({ node, inline, className, children, ...props }) => {
            return inline ? (
              <code style={{
                backgroundColor: 'var(--color-surface)',
                padding: '0.2em 0.4em',
                borderRadius: '3px',
                fontSize: '0.9em',
                fontFamily: 'monospace'
              }} {...props}>
                {children}
              </code>
            ) : (
              <pre style={{
                backgroundColor: 'var(--color-surface)',
                padding: '1rem',
                borderRadius: '4px',
                overflow: 'auto',
                margin: '1rem 0',
                fontSize: '0.9em',
                lineHeight: '1.5'
              }}>
                <code style={{ fontFamily: 'monospace' }} {...props}>
                  {children}
                </code>
              </pre>
            )
          },
          ul: ({ children }) => (
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1em' }}>
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol style={{ marginLeft: '1.5rem', marginBottom: '1em' }}>
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li style={{ marginBottom: '0.5em' }}>
              {children}
            </li>
          ),
          h3: ({ children }) => (
            <h3 style={{ marginTop: '1.5rem', marginBottom: '0.5em' }}>
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 style={{ marginTop: '1rem', marginBottom: '0.5em' }}>
              {children}
            </h4>
          ),
          p: ({ children }) => (
            <p style={{ marginBottom: '1em' }}>
              {children}
            </p>
          )
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  </article>
)

export default RongCrochetReadme
