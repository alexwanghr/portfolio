import React from 'react'
import ReactMarkdown from 'react-markdown'

const markdownContent = `

## Project Structure

\`\`\`
ReelRoom/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── api/      # API client modules
│   │   ├── components/ # React components
│   │   ├── pages/    # Page components
│   │   └── config/    # Configuration utilities
│   └── public/       # Static assets
└── backend/          # AWS Lambda functions
    ├── reelroom/     # Movie CRUD operations
    └── recommend/    # AI recommendation service
\`\`\`

## Features

- **Movie Management**: Add, update, and delete movies with metadata (title, year, poster, genre, overview)
- **Member-based Organization**: Group movies by family members with individual watchlists
- **Viewing Status**: Mark movies as watched/unwatched with optional date tracking
- **Rating System**: Assign ratings to watched movies
- **Filtering**: Filter movies by watched status or cinema viewings
- **Sorting**: Sort movies by rating (high to low) or date (recent to old) per member
- **Search**: Search movies using TMDB API integration
- **AI Recommendations**: Generate movie recommendations based on viewing history using OpenAI
- **Statistics**: Display unwatched/total movie counts per member

## Tech Stack

**Frontend**
- React 19
- React Router DOM 7
- Vite 7
- Tailwind CSS 4
**Backend**
- AWS Lambda (Node.js 20)
- DynamoDB
- Serverless Framework 3
- OpenAI API (gpt-4o-mini)

**External Services**
- TMDB API (movie search and metadata)
- Vercel (frontend deployment)
- AWS API Gateway (backend API)

**Development Tools**
- GitHub Actions (CI/CD)
- Path-based workflow triggers

## API Overview

### Movies API (/)

- **GET /**
  Retrieve all movie records from DynamoDB.
- **PUT /**
  Create a new movie record or update an existing one.
  **Request Body:**
  \`{ id, title, member, year, poster, overview, genre, watched, watchedDate, rating, cinema }\`
- **DELETE /**
  Delete a movie record from the database.
  **Request Body:**
  \`{ id, title }\`

---

### Recommendation API (/recommend)

- **POST /recommend**
  Generate movie recommendations based on watch history.
  
  **Request Body:**
  \`{ member, watched[], previousRecommendations[] }\`
  
  **Response (initial request):**
  \`{ recommendation: {}, reason: string }\`
  
  **Response (subsequent requests):**
  \`{ recommendations: [] }\`
  
All endpoints support CORS and return JSON responses.`

const ReelroomArchitecture = () => (
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

export default ReelroomArchitecture
