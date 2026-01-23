import { useState } from 'react'
import ReelroomReadme from '../data/reelroomreadme.jsx'

const ReelRoom = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('readme')

  const reelroomContent = {
    'readme': { 
      title: 'README',
      content: <ReelroomReadme />
    }
  }

  const tabs = [
    // { id: 'user-story', label: 'User Story' },
    // { id: 'dev-log', label: 'Dev Log' },
    { id: 'readme', label: 'README' }
  ]

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: 'var(--section-padding)',
      color: 'var(--color-text-primary)'
    }}>
      <button
        onClick={onBack}
        style={{
          marginBottom: 'var(--component-gap-lg)',
          padding: '0.5rem 1rem',
          backgroundColor: 'var(--color-accent)',
          color: 'var(--color-bg)',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        ← Back to Portfolio
      </button>

      <h1 style={{ textAlign: 'center', marginBottom: 'var(--component-gap-md)' }}>ReelRoom</h1>
      
      <p style={{ 
        textAlign: 'center', 
        marginBottom: 'var(--component-gap-lg)',
        color: 'var(--color-text-secondary)',
        fontSize: '1.1rem',
        lineHeight: '1.6',
        maxWidth: '800px',
        margin: '0 auto var(--component-gap-lg) auto'
      }}>
        A family-oriented movie and TV watchlist web app. Users can search titles, view detailed information, manage personal and shared watchlists, mark items as watched with timestamps, and receive AI-generated recommendations based on recent viewing history. Designed for simple, structured tracking and discovery within a household.
      </p>
      <p style={{ textAlign: 'center', marginBottom: 'var(--component-gap-lg)' }}>
        Live: <a href="https://reel-room-snowy.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>ReelRoom</a>
      </p>
      <div style={{ 
        display: 'flex', 
        gap: 'var(--component-gap-sm)', 
        marginBottom: 'var(--component-gap-lg)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: 'var(--element-padding-sm) var(--element-padding-md)',
              backgroundColor: 'transparent',
              color: activeTab === tab.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
              border: 'none',
              borderBottom: activeTab === tab.id ? '2px solid var(--color-accent)' : '2px solid transparent',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: activeTab === tab.id ? '500' : '400',
              marginBottom: '-1px'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ 
        minHeight: '400px',
        padding: 'var(--component-gap-lg) 0',
        lineHeight: '1.6'
      }}>
        <div style={{
          maxWidth: '56rem',
          margin: '0 auto'
        }}>
          {reelroomContent[activeTab]?.content}
        </div>
      </div>
    </div>
  )
}

export default ReelRoom
