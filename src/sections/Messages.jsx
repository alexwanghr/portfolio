import { useState } from 'react'
import emailjs from '@emailjs/browser'
import ScrollReveal from '../components/common/ScrollReveal'

// EmailJS configuration - Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

function Messages() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [emailError, setEmailError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    if (value && !validateEmail(value)) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email.trim()) {
      setEmailError('Email is required')
      return
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address')
      return
    }
    
    if (!subject.trim()) {
      return
    }
    
    if (!message.trim()) {
      return
    }

    setIsSubmitting(true)
    setSubmitError('')
    setSubmitSuccess(false)

    try {
      const templateParams = {
        subject: subject,
        from_email: email,
        message: message,
        reply_to: email
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      setIsSubmitting(false)
      setSubmitSuccess(true)
      setEmail('')
      setSubject('')
      setMessage('')
      setEmailError('')
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setIsSubmitting(false)
      setSubmitError('Failed to send message. Please try again later.')
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <ScrollReveal>
        <h2 style={{ textAlign: 'center' }}>Contact Me</h2>
      </ScrollReveal>
 

      <ScrollReveal delay={200}>
        <form onSubmit={handleSubmit} style={{ width: '650px', maxWidth: '100%', marginTop: 'var(--component-gap-lg)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--component-gap-sm)' }}>
            <div>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={handleEmailChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: '4px',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'background-color 0.4s ease-in-out',
                  boxSizing: 'border-box',
                  border: emailError ? '1px solid #d32f2f' : 'none'
                }}
                onFocus={(e) => {
                  e.target.style.backgroundColor = 'var(--color-border)'
                }}
                onBlur={(e) => {
                  e.target.style.backgroundColor = 'var(--color-surface)'
                }}
              />
              {emailError && (
                <p style={{ 
                  color: '#d32f2f', 
                  fontSize: '0.875rem', 
                  marginTop: '0.25rem', 
                  marginBottom: 0 
                }}>
                  {emailError}
                </p>
              )}
            </div>
            
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: 'var(--color-surface)',
                borderRadius: '4px',
                fontSize: '1rem',
                outline: 'none',
                transition: 'background-color 0.4s ease-in-out',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.target.style.backgroundColor = 'var(--color-border)'
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = 'var(--color-surface)'
              }}
            />
            
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: 'var(--color-surface)',
                borderRadius: '4px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical',
                outline: 'none',
                transition: 'background-color 0.4s ease-in-out',
                boxSizing: 'border-box'
              }}
              onFocus={(e) => {
                e.target.style.backgroundColor = 'var(--color-border)'
              }}
              onBlur={(e) => {
                e.target.style.backgroundColor = 'var(--color-surface)'
              }}
            />
            
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: isSubmitting ? 'var(--color-text-secondary)' : 'var(--color-accent)',
                color: 'var(--color-bg)',
                border: 'none',
                borderRadius: '4px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                fontSize: '1rem',
                alignSelf: 'center',
                opacity: isSubmitting ? 0.7 : 1,
                transition: 'background-color 0.3s ease-in-out, opacity 0.3s ease-in-out'
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>
            
            {submitSuccess && (
              <p style={{ 
                color: '#2e7d32', 
                fontSize: '0.875rem', 
                marginTop: '0.5rem', 
                marginBottom: 0 
              }}>
                Message sent successfully!
              </p>
            )}
            
            {submitError && (
              <p style={{ 
                color: '#d32f2f', 
                fontSize: '0.875rem', 
                marginTop: '0.5rem', 
                marginBottom: 0 
              }}>
                {submitError}
              </p>
            )}
          </div>
        </form>
      </ScrollReveal>
    </div>
  )
}

export default Messages

