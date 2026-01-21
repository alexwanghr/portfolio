function Navbar() {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'web-projects', label: 'Web Projects' },
    { id: 'photography', label: 'Photography' },
    { id: 'cooking', label: 'Cooking' },
    { id: 'messages', label: 'Contact Me' }
  ]

  const handleClick = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, padding: 'var(--element-padding-sm)', background: 'var(--color-bg)', zIndex: 1000 }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              style={{ textDecoration: 'none', color: 'var(--color-text-primary)' }}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar

