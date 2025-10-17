import React from 'react'
import ThemeToggle from './ThemeToggle'

const Navigation = () => {
    const linkStyle = {
        color: 'inherit',
        textDecoration: 'none',
        padding: '0.25rem 0.5rem',
    }

    return (
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {/* Replace src with your logo path or use text */}
                <img src="/logo.png" alt="Logo" style={{ height: 36 }} />
                <span style={{ fontWeight: 700 }}>Ngit Software Solutions</span>
            </div>

            <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
                <li><a href="/" style={linkStyle}>Home</a></li>
                <li><a href="/#about" style={linkStyle}>About</a></li>
                <li><a href="/#team" style={linkStyle}>Team</a></li>
                <li><a href="/#training" style={linkStyle}>Teaining</a></li>
                <li><a href="/portpolio" style={linkStyle}>Portpolio</a></li>
                <li><a href="/solutions" style={linkStyle}>Solutions</a></li>
                <li><a href="/student/login" style={linkStyle}>Login</a></li>
                <li><a href="/contact" style={linkStyle}>Contact</a></li>
                <ThemeToggle />
            </ul>
        </nav>
    )
}

export default Navigation