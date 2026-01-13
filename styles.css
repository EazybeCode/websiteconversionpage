:root {
    --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --gradient-4: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
    --gradient-5: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
    --gradient-hero: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    --gradient-card: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
    --gradient-cta: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
    --gradient-cta-hover: linear-gradient(135deg, #128C7E 0%, #25D366 100%);
    --gradient-green: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
    --gradient-orange: linear-gradient(135deg, #FF7A59 0%, #FF5C35 100%);
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.8);
    --text-muted: rgba(255, 255, 255, 0.6);
    --glass-bg: rgba(255, 255, 255, 0.08);
    --glass-border: rgba(255, 255, 255, 0.12);
    --glass-hover: rgba(255, 255, 255, 0.15);
    --whatsapp-green: #25D366;
    --hubspot-orange: #FF7A59;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    background: var(--gradient-hero);
    color: var(--text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
}

/* Animated Background */
.bg-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

.bg-gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #1a1a2e 75%, #16213e 100%);
    background-size: 400% 400%;
    animation: gradientMove 20s ease infinite;
}

@keyframes gradientMove {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
}

.bg-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.5;
    animation: orbFloat 25s ease-in-out infinite;
}

.bg-orb-1 {
    width: 600px;
    height: 600px;
    background: var(--gradient-1);
    top: -200px;
    right: -100px;
    animation-delay: 0s;
}

.bg-orb-2 {
    width: 500px;
    height: 500px;
    background: var(--gradient-3);
    bottom: -150px;
    left: -100px;
    animation-delay: -8s;
}

.bg-orb-3 {
    width: 400px;
    height: 400px;
    background: var(--gradient-2);
    top: 50%;
    left: 30%;
    animation-delay: -16s;
}

@keyframes orbFloat {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(50px, -50px) scale(1.1); }
    50% { transform: translate(-30px, 30px) scale(0.9); }
    75% { transform: translate(30px, 50px) scale(1.05); }
}

.bg-grid {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 50px 50px;
}

/* Navigation */
.nav {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    padding: 12px 24px;
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    display: flex;
    align-items: center;
    gap: 32px;
    animation: slideDown 0.8s ease-out;
}

@keyframes slideDown {
    from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: var(--text-primary);
}

.logo-icon {
    width: 38px;
    height: 38px;
    background: var(--gradient-green);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 15px rgba(56, 239, 125, 0.3);
}

.logo-icon svg {
    width: 20px;
    height: 20px;
    color: white;
}

.logo-text {
    font-weight: 800;
    font-size: 1.25rem;
    letter-spacing: -0.02em;
}

.nav-links {
    display: flex;
    gap: 28px;
    list-style: none;
}

.nav-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    position: relative;
}

.nav-links a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--gradient-cta);
    border-radius: 1px;
    transition: width 0.3s ease;
}

.nav-links a:hover {
    color: var(--text-primary);
}

.nav-links a:hover::after {
    width: 100%;
}

.nav-cta {
    display: flex;
    gap: 10px;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 50px;
    font-weight: 600;
    font-size: 0.9rem;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    border: none;
    font-family: inherit;
    position: relative;
    overflow: hidden;
}

.btn-ghost {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid transparent;
}

.btn-ghost:hover {
    color: var(--text-primary);
    background: var(--glass-bg);
}

.btn-primary {
    background: var(--gradient-cta);
    color: white;
    box-shadow: 0 4px 20px rgba(248, 87, 166, 0.4);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(248, 87, 166, 0.5);
}

.btn-primary::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.5s ease;
}

.btn-primary:hover::before {
    left: 100%;
}

.btn-secondary {
    background: var(--glass-bg);
    color: var(--text-primary);
    border: 1px solid var(--glass-border);
    backdrop-filter: blur(10px);
}

.btn-secondary:hover {
    background: var(--glass-hover);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

.btn-large {
    padding: 16px 32px;
    font-size: 1rem;
    border-radius: 60px;
}

.btn-icon {
    width: 20px;
    height: 20px;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    padding: 140px 24px 100px;
    display: flex;
    align-items: center;
    position: relative;
}

.hero-container {
    max-width: 1300px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.hero-content {
    animation: fadeUp 1s ease-out;
}

@keyframes fadeUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 8px 16px 8px 8px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 28px;
    backdrop-filter: blur(10px);
}

.badge-icon {
    width: 28px;
    height: 28px;
    background: var(--gradient-4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(56, 249, 215, 0.4); }
    50% { box-shadow: 0 0 0 10px transparent; }
}

.hero h1 {
    font-size: clamp(2.75rem, 5.5vw, 4.25rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 24px;
    letter-spacing: -0.03em;
}

.hero h1 .gradient-text {
    background: var(--gradient-3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-description {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-bottom: 36px;
    line-height: 1.7;
    max-width: 500px;
}

.hero-ctas {
    display: flex;
    gap: 16px;
    margin-bottom: 48px;
    flex-wrap: wrap;
}

.hero-stats {
    display: flex;
    gap: 40px;
}

.hero-stat {
    position: relative;
    padding-right: 40px;
}

.hero-stat::after {
    content: '';
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 40px;
    background: linear-gradient(180deg, transparent, var(--glass-border), transparent);
}

.hero-stat:last-child::after {
    display: none;
}

.hero-stat:last-child {
    padding-right: 0;
}

.stat-value {
    font-size: 2rem;
    font-weight: 800;
    background: var(--gradient-5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.stat-label {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-top: 4px;
}

/* Hero Visual */
.hero-visual {
    position: relative;
    animation: fadeUp 1s ease-out 0.3s both;
}

.hero-card {
    background: var(--glass-bg);
    backdrop-filter: blur(30px);
    border: 1px solid var(--glass-border);
    border-radius: 28px;
    padding: 0;
    overflow: hidden;
    box-shadow: 
        0 25px 50px -12px rgba(0, 0, 0, 0.25),
        0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

.hero-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
}

.chat-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    background: rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid var(--glass-border);
}

.chat-user {
    display: flex;
    align-items: center;
    gap: 14px;
}

.chat-avatar {
    width: 48px;
    height: 48px;
    background: var(--gradient-1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1rem;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.chat-user-info h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 2px;
}

.chat-user-info span {
    font-size: 0.8rem;
    color: #38ef7d;
    display: flex;
    align-items: center;
    gap: 6px;
}

.online-dot {
    width: 8px;
    height: 8px;
    background: #38ef7d;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.chat-actions {
    display: flex;
    gap: 8px;
}

.chat-action {
    width: 36px;
    height: 36px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.3s ease;
}

.chat-action:hover {
    background: var(--glass-hover);
    color: var(--text-primary);
}

.chat-messages {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-height: 300px;
}

.message {
    max-width: 85%;
    padding: 14px 18px;
    border-radius: 20px;
    font-size: 0.9rem;
    line-height: 1.5;
    animation: messageSlide 0.5s ease-out both;
    position: relative;
}

.message:nth-child(1) { animation-delay: 0.6s; }
.message:nth-child(2) { animation-delay: 1s; }
.message:nth-child(3) { animation-delay: 1.4s; }
.message:nth-child(4) { animation-delay: 1.8s; }

@keyframes messageSlide {
    from { opacity: 0; transform: translateY(15px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
}

.message.incoming {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid var(--glass-border);
    border-bottom-left-radius: 6px;
    align-self: flex-start;
}

.message.outgoing {
    background: var(--gradient-green);
    border-bottom-right-radius: 6px;
    align-self: flex-end;
    box-shadow: 0 4px 15px rgba(56, 239, 125, 0.3);
}

.sync-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px 24px;
    background: linear-gradient(135deg, rgba(248, 87, 166, 0.15) 0%, rgba(255, 88, 88, 0.15) 100%);
    border-top: 1px solid rgba(248, 87, 166, 0.2);
    font-size: 0.85rem;
    color: #f857a6;
    animation: fadeIn 0.5s ease-out 2.2s both;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.sync-icon {
    animation: spin 2s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Floating Elements */
.floating-badge {
    position: absolute;
    padding: 10px 16px;
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 14px;
    font-size: 0.8rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    animation: floatBadge 6s ease-in-out infinite;
}

.floating-badge-1 {
    top: -15px;
    right: 30px;
    animation-delay: 0s;
}

.floating-badge-2 {
    bottom: 80px;
    left: -20px;
    animation-delay: -2s;
}

.floating-badge-3 {
    bottom: 20px;
    right: -10px;
    animation-delay: -4s;
}

@keyframes floatBadge {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
}

.badge-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

.badge-dot.green { background: var(--gradient-4); }
.badge-dot.pink { background: var(--gradient-2); }
.badge-dot.blue { background: var(--gradient-3); }

/* Trusted Section */
.trusted {
    padding: 60px 24px;
    background: rgba(0, 0, 0, 0.2);
    border-top: 1px solid var(--glass-border);
    border-bottom: 1px solid var(--glass-border);
}

.trusted-container {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
}

.trusted-label {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--text-muted);
    margin-bottom: 28px;
}

.trusted-logos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    flex-wrap: wrap;
}

.trusted-logo {
    font-weight: 700;
    font-size: 1.2rem;
    color: var(--text-muted);
    opacity: 0.6;
    transition: all 0.3s ease;
}

.trusted-logo:hover {
    opacity: 1;
    color: var(--text-primary);
}

/* Video Section */
.video-section {
    padding: 100px 24px;
    position: relative;
}

.video-section::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center, rgba(79, 172, 254, 0.1) 0%, transparent 50%);
    pointer-events: none;
}

.video-container {
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
}

.video-content {
    margin-bottom: 48px;
}

.video-content h2 {
    font-size: clamp(1.75rem, 3.5vw, 2.5rem);
    font-weight: 800;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
}

.video-content p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 550px;
    margin: 0 auto;
}

.video-wrapper {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
}

.video-frame {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    border-radius: 20px;
    overflow: hidden;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    box-shadow: 
        0 25px 80px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.05) inset;
}

.video-frame::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    z-index: 1;
}

.video-frame iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
}

.video-glow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    background: radial-gradient(ellipse at center, rgba(79, 172, 254, 0.3) 0%, transparent 70%);
    filter: blur(60px);
    z-index: -1;
    opacity: 0.6;
}

/* Features Section */
.features {
    padding: 120px 24px;
    position: relative;
}

.section-header {
    text-align: center;
    max-width: 650px;
    margin: 0 auto 70px;
}

.section-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 20px;
    backdrop-filter: blur(10px);
}

.section-badge-icon {
    width: 8px;
    height: 8px;
    background: var(--gradient-3);
    border-radius: 50%;
}

.section-header h2 {
    font-size: clamp(2rem, 4vw, 2.75rem);
    font-weight: 800;
    margin-bottom: 16px;
    letter-spacing: -0.02em;
}

.section-header p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    line-height: 1.7;
}

.features-grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.feature-card {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 32px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient-1);
    opacity: 0;
    transition: opacity 0.4s ease;
}

.feature-card:nth-child(2)::before { background: var(--gradient-2); }
.feature-card:nth-child(3)::before { background: var(--gradient-3); }
.feature-card:nth-child(4)::before { background: var(--gradient-4); }
.feature-card:nth-child(5)::before { background: var(--gradient-5); }
.feature-card:nth-child(6)::before { background: var(--gradient-1); }

.feature-card:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}

.feature-card:hover::before {
    opacity: 1;
}

.feature-icon {
    width: 60px;
    height: 60px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-bottom: 24px;
    position: relative;
}

.feature-card:nth-child(1) .feature-icon { background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%); }
.feature-card:nth-child(2) .feature-icon { background: linear-gradient(135deg, rgba(240, 147, 251, 0.2) 0%, rgba(245, 87, 108, 0.2) 100%); }
.feature-card:nth-child(3) .feature-icon { background: linear-gradient(135deg, rgba(79, 172, 254, 0.2) 0%, rgba(0, 242, 254, 0.2) 100%); }
.feature-card:nth-child(4) .feature-icon { background: linear-gradient(135deg, rgba(67, 233, 123, 0.2) 0%, rgba(56, 249, 215, 0.2) 100%); }
.feature-card:nth-child(5) .feature-icon { background: linear-gradient(135deg, rgba(250, 112, 154, 0.2) 0%, rgba(254, 225, 64, 0.2) 100%); }
.feature-card:nth-child(6) .feature-icon { background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%); }

.feature-card h3 {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 10px;
}

.feature-card p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    line-height: 1.6;
}

/* Feature Showcase */
.feature-showcase {
    max-width: 1200px;
    margin: 0 auto 80px;
    display: flex;
    flex-direction: column;
    gap: 80px;
}

.feature-showcase-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.feature-showcase-item.reverse {
    direction: rtl;
}

.feature-showcase-item.reverse > * {
    direction: ltr;
}

.feature-showcase-content {
    position: relative;
}

.feature-number {
    font-size: 4rem;
    font-weight: 800;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    opacity: 0.3;
    position: absolute;
    top: -20px;
    left: -10px;
    line-height: 1;
}

.feature-showcase-content h3 {
    font-size: 1.75rem;
    font-weight: 800;
    margin-bottom: 16px;
    position: relative;
    z-index: 1;
}

.feature-showcase-content > p {
    font-size: 1.05rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 24px;
}

.feature-bullets {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.feature-bullets li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.95rem;
    color: var(--text-secondary);
}

.feature-bullets li svg {
    width: 20px;
    height: 20px;
    color: var(--whatsapp-green);
    flex-shrink: 0;
}

.feature-showcase-visual {
    display: flex;
    justify-content: center;
}

.feature-visual-card {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 32px;
    width: 100%;
    max-width: 400px;
}

/* Sync Animation */
.sync-animation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 24px;
}

.sync-logo {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.sync-logo svg {
    width: 36px;
    height: 36px;
}

.sync-logo.whatsapp {
    background: linear-gradient(135deg, rgba(37, 211, 102, 0.2) 0%, rgba(18, 140, 126, 0.2) 100%);
    color: var(--whatsapp-green);
}

.sync-logo.hubspot {
    background: linear-gradient(135deg, rgba(255, 122, 89, 0.2) 0%, rgba(255, 92, 53, 0.2) 100%);
    color: var(--hubspot-orange);
}

.sync-arrows {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.sync-arrow {
    font-size: 1.2rem;
    color: var(--text-muted);
    animation: syncPulse 1.5s ease-in-out infinite;
}

.sync-arrow.right {
    animation-delay: 0.75s;
}

@keyframes syncPulse {
    0%, 100% { opacity: 0.3; transform: translateX(0); }
    50% { opacity: 1; transform: translateX(4px); }
}

.sync-status {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-size: 0.85rem;
    color: var(--whatsapp-green);
}

.status-dot {
    width: 8px;
    height: 8px;
    background: var(--whatsapp-green);
    border-radius: 50%;
    animation: pulse 2s infinite;
}

/* AI Card */
.ai-card .ai-suggestion {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    padding: 20px;
}

.ai-header {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 12px;
}

.ai-icon {
    font-size: 1.2rem;
}

.ai-suggestion > p {
    font-size: 0.95rem;
    color: var(--text-primary);
    line-height: 1.6;
    margin-bottom: 16px;
    font-style: italic;
}

.ai-actions {
    display: flex;
    gap: 10px;
}

.ai-btn {
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 0.8rem;
    font-weight: 600;
    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.3s ease;
}

.ai-btn.primary {
    background: var(--gradient-cta);
    color: white;
}

.ai-btn:not(.primary) {
    background: var(--glass-bg);
    color: var(--text-secondary);
    border: 1px solid var(--glass-border);
}

/* Inbox Card */
.inbox-card .inbox-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    font-weight: 700;
}

.inbox-badge {
    padding: 4px 10px;
    background: var(--gradient-cta);
    border-radius: 100px;
    font-size: 0.7rem;
    font-weight: 600;
}

.inbox-items {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.inbox-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    transition: all 0.3s ease;
}

.inbox-item:hover {
    background: rgba(0, 0, 0, 0.3);
}

.inbox-avatar {
    width: 40px;
    height: 40px;
    background: var(--gradient-1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    flex-shrink: 0;
}

.inbox-info {
    flex-grow: 1;
    min-width: 0;
}

.inbox-name {
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 2px;
}

.inbox-preview {
    display: block;
    font-size: 0.75rem;
    color: var(--text-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.inbox-owner {
    padding: 4px 10px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    font-size: 0.7rem;
    font-weight: 600;
    color: var(--text-secondary);
    flex-shrink: 0;
}

.inbox-owner.urgent {
    background: linear-gradient(135deg, rgba(248, 87, 166, 0.2) 0%, rgba(255, 88, 88, 0.2) 100%);
    border-color: rgba(248, 87, 166, 0.3);
    color: #f857a6;
}

/* Features Grid Header */
.features-grid-header {
    text-align: center;
    margin-bottom: 40px;
}

.features-grid-header h3 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-secondary);
}

/* Stats Section */
.stats {
    padding: 100px 24px;
    position: relative;
}

.stats::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 400px;
    background: radial-gradient(ellipse at center, rgba(102, 126, 234, 0.15) 0%, transparent 60%);
    pointer-events: none;
}

.stats-grid {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    position: relative;
}

.stat-card {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    padding: 32px 24px;
    text-align: center;
    transition: all 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.2);
}

.stat-card .stat-number {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
}

.stat-card:nth-child(1) .stat-number { background: var(--gradient-1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.stat-card:nth-child(2) .stat-number { background: var(--gradient-3); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.stat-card:nth-child(3) .stat-number { background: var(--gradient-4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
.stat-card:nth-child(4) .stat-number { background: var(--gradient-5); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

.stat-card .stat-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
}

/* Form Section */
.form-section {
    padding: 120px 24px;
    position: relative;
}

.form-section::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background: radial-gradient(ellipse at right center, rgba(248, 87, 166, 0.1) 0%, transparent 50%);
    pointer-events: none;
}

.form-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
}

.form-content h2 {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 800;
    margin-bottom: 16px;
    letter-spacing: -0.02em;
}

.form-content > p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 36px;
    line-height: 1.7;
}

.benefits-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.benefits-list li {
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 1rem;
}

.benefit-icon {
    width: 28px;
    height: 28px;
    background: var(--gradient-green);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(56, 239, 125, 0.3);
}

.benefit-icon svg {
    width: 14px;
    height: 14px;
    color: white;
}

.lead-form {
    background: var(--glass-bg);
    backdrop-filter: blur(30px);
    border: 1px solid var(--glass-border);
    border-radius: 28px;
    padding: 40px;
    position: relative;
    overflow: hidden;
}

.lead-form::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient-cta);
}

.form-header {
    margin-bottom: 28px;
}

.form-title {
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 6px;
}

.form-subtitle {
    color: var(--text-secondary);
    font-size: 0.95rem;
}

.form-group {
    margin-bottom: 20px;
}

.form-group label {
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--text-secondary);
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 14px 18px;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid var(--glass-border);
    border-radius: 14px;
    font-size: 1rem;
    font-family: inherit;
    color: var(--text-primary);
    transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: #f857a6;
    box-shadow: 0 0 0 3px rgba(248, 87, 166, 0.15);
}

.form-group input::placeholder {
    color: var(--text-muted);
}

.form-group select {
    cursor: pointer;
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
}

.form-group select option {
    background: #1a1a2e;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
}

.form-submit {
    width: 100%;
    margin-top: 8px;
}

.form-privacy {
    text-align: center;
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-top: 16px;
}

.form-privacy a {
    color: var(--text-secondary);
    text-decoration: underline;
}

/* Pricing Section */
.pricing {
    padding: 120px 24px;
    position: relative;
}

.pricing::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at 70% 30%, rgba(248, 87, 166, 0.08) 0%, transparent 50%);
    pointer-events: none;
}

.pricing-container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
}

.pricing-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 50px;
}

.toggle-label {
    font-size: 0.95rem;
    color: var(--text-muted);
    cursor: pointer;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}

.toggle-label.active {
    color: var(--text-primary);
    font-weight: 600;
}

.save-badge {
    padding: 4px 10px;
    background: linear-gradient(135deg, rgba(56, 239, 125, 0.2) 0%, rgba(56, 249, 215, 0.2) 100%);
    border: 1px solid rgba(56, 239, 125, 0.3);
    border-radius: 100px;
    font-size: 0.7rem;
    font-weight: 700;
    color: #38ef7d;
    text-transform: uppercase;
}

.toggle-switch {
    width: 56px;
    height: 30px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
}

.toggle-switch:hover {
    border-color: rgba(255, 255, 255, 0.2);
}

.toggle-slider {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 22px;
    height: 22px;
    background: var(--gradient-cta);
    border-radius: 50%;
    transition: transform 0.3s ease;
    box-shadow: 0 2px 10px rgba(248, 87, 166, 0.4);
}

.toggle-switch.active .toggle-slider {
    transform: translateX(26px);
}

.pricing-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 60px;
}

.pricing-card {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 28px;
    padding: 36px;
    position: relative;
    transition: all 0.4s ease;
}

.pricing-card:hover {
    transform: translateY(-8px);
    border-color: rgba(255, 255, 255, 0.15);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.pricing-card.popular {
    background: linear-gradient(135deg, rgba(248, 87, 166, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%);
    border-color: rgba(248, 87, 166, 0.3);
    transform: scale(1.05);
}

.pricing-card.popular:hover {
    transform: scale(1.05) translateY(-8px);
}

.popular-badge {
    position: absolute;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    padding: 8px 20px;
    background: var(--gradient-cta);
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    box-shadow: 0 4px 15px rgba(248, 87, 166, 0.4);
}

.pricing-card-header {
    text-align: center;
    margin-bottom: 28px;
}

.plan-icon {
    width: 56px;
    height: 56px;
    margin: 0 auto 16px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.plan-icon svg {
    width: 28px;
    height: 28px;
}

.plan-icon.starter {
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.2) 0%, rgba(0, 242, 254, 0.2) 100%);
    color: #4facfe;
}

.plan-icon.professional {
    background: linear-gradient(135deg, rgba(248, 87, 166, 0.2) 0%, rgba(255, 88, 88, 0.2) 100%);
    color: #f857a6;
}

.plan-icon.enterprise {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%);
    color: #667eea;
}

.pricing-card-header h3 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 6px;
}

.pricing-card-header p {
    font-size: 0.9rem;
    color: var(--text-muted);
}

.pricing-amount {
    text-align: center;
    margin-bottom: 8px;
}

.currency {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-secondary);
    vertical-align: top;
}

.price {
    font-size: 4rem;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.03em;
}

.period {
    font-size: 1rem;
    color: var(--text-muted);
    font-weight: 500;
}

.price-custom {
    font-size: 2.5rem;
    font-weight: 800;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.pricing-desc {
    text-align: center;
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 28px;
}

.pricing-features {
    list-style: none;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.pricing-features li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 0.9rem;
    color: var(--text-secondary);
}

.pricing-features li svg {
    width: 20px;
    height: 20px;
    color: #38ef7d;
    flex-shrink: 0;
    margin-top: 1px;
}

.pricing-features li strong {
    color: var(--text-primary);
    font-weight: 700;
}

.btn-pricing {
    width: 100%;
    padding: 16px 24px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 14px;
    color: var(--text-primary);
    font-size: 0.95rem;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease;
}

.btn-pricing:hover {
    background: var(--glass-hover);
    border-color: rgba(255, 255, 255, 0.2);
}

.btn-pricing-primary {
    width: 100%;
    padding: 16px 24px;
    background: var(--gradient-cta);
    border: none;
    border-radius: 14px;
    color: white;
    font-size: 0.95rem;
    font-weight: 600;
    text-align: center;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(248, 87, 166, 0.4);
}

.btn-pricing-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(248, 87, 166, 0.5);
}

.btn-pricing-primary svg {
    width: 18px;
    height: 18px;
}

.pricing-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 40px;
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    flex-wrap: wrap;
    gap: 24px;
}

.pricing-guarantee {
    display: flex;
    align-items: center;
    gap: 16px;
}

.guarantee-icon {
    width: 52px;
    height: 52px;
    background: linear-gradient(135deg, rgba(56, 239, 125, 0.2) 0%, rgba(56, 249, 215, 0.2) 100%);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.guarantee-icon svg {
    width: 26px;
    height: 26px;
    color: #38ef7d;
}

.guarantee-content h4 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 2px;
}

.guarantee-content p {
    font-size: 0.85rem;
    color: var(--text-muted);
}

.pricing-trust {
    display: flex;
    gap: 32px;
}

.trust-item {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    color: var(--text-secondary);
}

.trust-item svg {
    width: 18px;
    height: 18px;
    color: var(--text-muted);
}

/* Testimonials */
.testimonials {
    padding: 120px 24px;
    background: rgba(0, 0, 0, 0.15);
    border-top: 1px solid var(--glass-border);
    border-bottom: 1px solid var(--glass-border);
}

/* Trust Stats Bar */
.testimonial-trust-bar {
    display: flex;
    justify-content: center;
    gap: 48px;
    flex-wrap: wrap;
    margin-bottom: 60px;
    padding: 24px 32px;
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}

.trust-stat {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;
    color: var(--text-secondary);
}

.trust-stat svg {
    width: 20px;
    height: 20px;
    color: #fbbf24;
}

.trust-stat strong {
    color: var(--text-primary);
    font-weight: 700;
}

/* Featured Testimonial */
.featured-testimonial {
    max-width: 1100px;
    margin: 0 auto 60px;
    background: var(--glass-bg);
    backdrop-filter: blur(30px);
    border: 1px solid var(--glass-border);
    border-radius: 28px;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    overflow: hidden;
    position: relative;
}

.featured-testimonial::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--gradient-5);
}

.featured-testimonial-content {
    padding: 48px;
    position: relative;
}

.featured-quote-mark {
    font-size: 8rem;
    font-family: Georgia, serif;
    line-height: 1;
    background: var(--gradient-3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    opacity: 0.3;
    position: absolute;
    top: 20px;
    left: 30px;
}

.featured-testimonial blockquote {
    font-size: 1.25rem;
    line-height: 1.8;
    color: var(--text-primary);
    position: relative;
    z-index: 1;
    margin-bottom: 32px;
    font-weight: 500;
}

.featured-metrics {
    display: flex;
    gap: 32px;
}

.featured-metric {
    display: flex;
    flex-direction: column;
}

.featured-metric .metric-value {
    font-size: 1.75rem;
    font-weight: 800;
    background: var(--gradient-4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.featured-metric .metric-label {
    font-size: 0.8rem;
    color: var(--text-muted);
    margin-top: 2px;
}

.featured-testimonial-author {
    padding: 48px;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid var(--glass-border);
}

.featured-avatar {
    position: relative;
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
}

.featured-avatar img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid rgba(255, 255, 255, 0.2);
}

.verified-badge {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 28px;
    height: 28px;
    background: var(--gradient-green);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #1a1a2e;
}

.verified-badge svg {
    width: 14px;
    height: 14px;
    color: white;
}

.featured-author-info h4 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 4px;
}

.featured-author-info p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    margin-bottom: 8px;
}

.author-company {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    color: var(--text-muted);
}

.company-logo {
    font-weight: 700;
    color: var(--text-secondary);
}

.read-case-study {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    padding: 10px 20px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 100px;
    color: var(--text-primary);
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.3s ease;
}

.read-case-study:hover {
    background: var(--glass-hover);
    transform: translateX(4px);
}

.read-case-study svg {
    width: 16px;
    height: 16px;
}

/* Testimonials Grid */
.testimonials-grid {
    max-width: 1200px;
    margin: 0 auto 60px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.testimonial-card {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 28px;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
}

.testimonial-card:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.testimonial-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.testimonial-rating {
    display: flex;
    align-items: center;
    gap: 8px;
}

.testimonial-rating .stars {
    color: #fbbf24;
    font-size: 1rem;
    letter-spacing: 1px;
}

.testimonial-rating .rating-text {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--text-muted);
}

.testimonial-verified {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 0.75rem;
    color: #38ef7d;
    font-weight: 500;
}

.testimonial-verified svg {
    width: 14px;
    height: 14px;
}

.testimonial-text {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 16px;
    flex-grow: 1;
}

.testimonial-result {
    margin-bottom: 20px;
}

.result-badge {
    display: inline-block;
    padding: 6px 14px;
    background: linear-gradient(135deg, rgba(56, 239, 125, 0.15) 0%, rgba(56, 249, 215, 0.15) 100%);
    border: 1px solid rgba(56, 239, 125, 0.3);
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 700;
    color: #38ef7d;
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 14px;
    padding-top: 20px;
    border-top: 1px solid var(--glass-border);
    position: relative;
}

.author-photo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(255, 255, 255, 0.1);
}

.testimonial-author .author-info {
    flex-grow: 1;
}

.testimonial-author .author-info h4 {
    font-size: 0.95rem;
    font-weight: 700;
    margin-bottom: 2px;
}

.testimonial-author .author-info span {
    font-size: 0.8rem;
    color: var(--text-muted);
}

.author-company-small {
    font-size: 0.75rem;
    color: var(--text-secondary);
    font-weight: 600;
    margin-top: 2px;
}

.linkedin-badge {
    width: 32px;
    height: 32px;
    background: #0a66c2;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.linkedin-badge:hover {
    transform: scale(1.1);
}

.linkedin-badge svg {
    width: 16px;
    height: 16px;
    fill: white;
}

/* Review Platforms */
.review-platforms {
    text-align: center;
}

.review-platforms > p {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-bottom: 20px;
}

.platform-links {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
}

.platform-link {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 20px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    text-decoration: none;
    transition: all 0.3s ease;
}

.platform-link:hover {
    background: var(--glass-hover);
    transform: translateY(-2px);
    border-color: rgba(255, 255, 255, 0.2);
}

.platform-name {
    font-weight: 700;
    font-size: 0.9rem;
    color: var(--text-primary);
}

.platform-rating {
    font-size: 0.85rem;
    color: #fbbf24;
    font-weight: 600;
}

/* FAQ */
.faq {
    padding: 120px 24px;
    position: relative;
}

.faq::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at 30% 20%, rgba(102, 126, 234, 0.08) 0%, transparent 50%);
    pointer-events: none;
}

.faq-container {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
}

.faq-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    margin-bottom: 60px;
    flex-wrap: wrap;
}

.faq-header-content {
    max-width: 500px;
}

.faq-header-content h2 {
    font-size: clamp(1.75rem, 3.5vw, 2.5rem);
    font-weight: 800;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
}

.faq-header-content p {
    font-size: 1.05rem;
    color: var(--text-secondary);
    line-height: 1.7;
}

.faq-contact-card {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    padding: 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
}

.faq-contact-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.2) 0%, rgba(0, 242, 254, 0.2) 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.faq-contact-icon svg {
    width: 24px;
    height: 24px;
    color: #4facfe;
}

.faq-contact-info h4 {
    font-size: 0.95rem;
    font-weight: 700;
    margin-bottom: 2px;
}

.faq-contact-info p {
    font-size: 0.8rem;
    color: var(--text-muted);
}

.faq-contact-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    background: var(--gradient-3);
    border-radius: 100px;
    color: white;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.3s ease;
    margin-left: auto;
}

.faq-contact-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(79, 172, 254, 0.4);
}

.faq-contact-btn svg {
    width: 16px;
    height: 16px;
}

.faq-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 60px;
}

.faq-category {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 28px;
    transition: all 0.3s ease;
}

.faq-category:hover {
    border-color: rgba(255, 255, 255, 0.15);
}

.faq-category-header {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--glass-border);
}

.faq-category-icon {
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, rgba(56, 239, 125, 0.2) 0%, rgba(56, 249, 215, 0.2) 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.faq-category-icon svg {
    width: 22px;
    height: 22px;
    color: #38ef7d;
}

.faq-category-icon.blue {
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.2) 0%, rgba(0, 242, 254, 0.2) 100%);
}

.faq-category-icon.blue svg {
    color: #4facfe;
}

.faq-category-icon.pink {
    background: linear-gradient(135deg, rgba(248, 87, 166, 0.2) 0%, rgba(255, 88, 88, 0.2) 100%);
}

.faq-category-icon.pink svg {
    color: #f857a6;
}

.faq-category-header h3 {
    font-size: 1.1rem;
    font-weight: 700;
}

.faq-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.faq-item {
    border-radius: 14px;
    overflow: hidden;
    transition: all 0.3s ease;
}

.faq-question {
    width: 100%;
    padding: 16px;
    background: rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 14px;
    color: var(--text-primary);
    font-size: 0.9rem;
    font-weight: 600;
    font-family: inherit;
    text-align: left;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
}

.faq-question:hover {
    background: rgba(0, 0, 0, 0.3);
}

.faq-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.3s ease;
}

.faq-icon svg {
    width: 18px;
    height: 18px;
    color: var(--text-muted);
}

.faq-item.active .faq-icon {
    transform: rotate(180deg);
}

.faq-item.active .faq-icon svg {
    color: #f857a6;
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
}

.faq-item.active .faq-answer {
    max-height: 300px;
}

.faq-answer p {
    padding: 16px;
    font-size: 0.85rem;
    color: var(--text-secondary);
    line-height: 1.7;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 0 0 14px 14px;
    margin-top: -8px;
}

.faq-answer strong {
    color: var(--text-primary);
}

.faq-bottom {
    border-top: 1px solid var(--glass-border);
    padding-top: 40px;
}

.faq-resources {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.faq-resource-link {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px 24px;
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    text-decoration: none;
    transition: all 0.3s ease;
}

.faq-resource-link:hover {
    background: var(--glass-hover);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-4px);
}

.resource-icon {
    width: 48px;
    height: 48px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.resource-icon svg {
    width: 22px;
    height: 22px;
    color: var(--text-secondary);
}

.resource-info {
    flex-grow: 1;
}

.resource-info h4 {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 2px;
}

.resource-info p {
    font-size: 0.8rem;
    color: var(--text-muted);
}

.resource-arrow {
    width: 20px;
    height: 20px;
    color: var(--text-muted);
    transition: all 0.3s ease;
}

.faq-resource-link:hover .resource-arrow {
    color: var(--text-primary);
    transform: translateX(4px);
}

/* CTA Section */
.cta-section {
    padding: 120px 24px;
    position: relative;
}

.cta-container {
    max-width: 1200px;
    margin: 0 auto;
}

.cta-card {
    background: var(--glass-bg);
    backdrop-filter: blur(30px);
    border: 1px solid var(--glass-border);
    border-radius: 32px;
    padding: 60px;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 60px;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.cta-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    overflow: hidden;
}

.cta-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
}

.cta-orb-1 {
    width: 400px;
    height: 400px;
    background: var(--gradient-cta);
    top: -150px;
    right: -100px;
    opacity: 0.3;
}

.cta-orb-2 {
    width: 300px;
    height: 300px;
    background: var(--gradient-3);
    bottom: -100px;
    left: -50px;
    opacity: 0.2;
}

.cta-grid {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: 
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
    background-size: 40px 40px;
}

.cta-content {
    position: relative;
    z-index: 1;
}

.cta-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    background: linear-gradient(135deg, rgba(248, 87, 166, 0.15) 0%, rgba(255, 88, 88, 0.15) 100%);
    border: 1px solid rgba(248, 87, 166, 0.3);
    border-radius: 100px;
    font-size: 0.85rem;
    font-weight: 600;
    color: #f857a6;
    margin-bottom: 24px;
}

.cta-badge svg {
    width: 18px;
    height: 18px;
}

.cta-content h2 {
    font-size: clamp(1.75rem, 3.5vw, 2.5rem);
    font-weight: 800;
    margin-bottom: 16px;
    letter-spacing: -0.02em;
    line-height: 1.2;
}

.cta-content > p {
    font-size: 1.1rem;
    color: var(--text-secondary);
    margin-bottom: 28px;
    line-height: 1.7;
    max-width: 500px;
}

.cta-features {
    display: flex;
    gap: 24px;
    margin-bottom: 32px;
    flex-wrap: wrap;
}

.cta-feature {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    color: var(--text-secondary);
}

.cta-feature svg {
    width: 18px;
    height: 18px;
    color: #38ef7d;
}

.cta-buttons {
    display: flex;
    gap: 16px;
    margin-bottom: 36px;
    flex-wrap: wrap;
}

.btn-cta-primary {
    background: var(--gradient-cta);
    color: white;
    box-shadow: 0 4px 20px rgba(248, 87, 166, 0.4);
}

.btn-cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(248, 87, 166, 0.5);
}

.btn-cta-secondary {
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-cta-secondary:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
}

.cta-trust {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
}

.cta-trust-avatars {
    display: flex;
    align-items: center;
}

.cta-trust-avatars img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #1a1a2e;
    margin-left: -10px;
    object-fit: cover;
}

.cta-trust-avatars img:first-child {
    margin-left: 0;
}

.avatar-count {
    width: 36px;
    height: 36px;
    background: var(--gradient-1);
    border-radius: 50%;
    border: 2px solid #1a1a2e;
    margin-left: -10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.65rem;
    font-weight: 700;
}

.cta-trust-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.trust-stars {
    color: #fbbf24;
    font-size: 0.9rem;
    letter-spacing: 1px;
}

.cta-trust-text span {
    font-size: 0.8rem;
    color: var(--text-muted);
}

.cta-visual {
    position: relative;
    z-index: 1;
}

.cta-stats-card {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
}

.cta-stat-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 14px;
    transition: all 0.3s ease;
}

.cta-stat-item:hover {
    transform: translateX(8px);
    border-color: rgba(255, 255, 255, 0.2);
}

.cta-stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.cta-stat-icon svg {
    width: 24px;
    height: 24px;
}

.cta-stat-icon.green {
    background: linear-gradient(135deg, rgba(56, 239, 125, 0.2) 0%, rgba(56, 249, 215, 0.2) 100%);
    color: #38ef7d;
}

.cta-stat-icon.blue {
    background: linear-gradient(135deg, rgba(79, 172, 254, 0.2) 0%, rgba(0, 242, 254, 0.2) 100%);
    color: #4facfe;
}

.cta-stat-icon.pink {
    background: linear-gradient(135deg, rgba(248, 87, 166, 0.2) 0%, rgba(255, 88, 88, 0.2) 100%);
    color: #f857a6;
}

.cta-stat-info {
    display: flex;
    flex-direction: column;
}

.cta-stat-value {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--text-primary);
    line-height: 1.2;
}

.cta-stat-label {
    font-size: 0.8rem;
    color: var(--text-muted);
}

.cta-badges-row {
    display: flex;
    gap: 12px;
}

.cta-security-badge {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 16px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-secondary);
}

.cta-security-badge svg {
    width: 18px;
    height: 18px;
    color: #38ef7d;
}

/* Footer */
.footer {
    background: rgba(0, 0, 0, 0.3);
    border-top: 1px solid var(--glass-border);
}

.footer-main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 24px 60px;
}

.footer-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
    gap: 48px;
    margin-bottom: 60px;
}

.footer-brand p {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-top: 18px;
    line-height: 1.7;
}

.footer-badges {
    display: flex;
    gap: 10px;
    margin-top: 24px;
    flex-wrap: wrap;
}

.footer-badge {
    padding: 6px 12px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    font-size: 0.7rem;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 6px;
}

.footer-badge svg {
    width: 12px;
    height: 12px;
    color: #38ef7d;
}

.footer-column h4 {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    margin-bottom: 20px;
    font-weight: 600;
}

.footer-links {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.footer-links a {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.footer-links a:hover {
    color: var(--text-primary);
    transform: translateX(4px);
}

.footer-links .badge {
    font-size: 0.6rem;
    padding: 3px 8px;
    background: var(--gradient-cta);
    border-radius: 4px;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
}

.footer-bottom {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
    border-top: 1px solid var(--glass-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.footer-copyright {
    font-size: 0.85rem;
    color: var(--text-muted);
}

.footer-legal {
    display: flex;
    gap: 24px;
    list-style: none;
}

.footer-legal a {
    font-size: 0.85rem;
    color: var(--text-muted);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-legal a:hover {
    color: var(--text-secondary);
}

.footer-social {
    display: flex;
    gap: 10px;
}

.footer-social a {
    width: 40px;
    height: 40px;
    background: var(--glass-bg);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-muted);
    text-decoration: none;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.footer-social a:hover {
    background: var(--gradient-cta);
    border-color: transparent;
    color: white;
    transform: translateY(-3px);
}

/* Responsive */
@media (max-width: 1024px) {
    .hero-container, .form-container {
        grid-template-columns: 1fr;
        gap: 60px;
    }

    .hero-visual {
        order: -1;
    }

    .feature-showcase-item {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .feature-showcase-item.reverse {
        direction: ltr;
    }

    .feature-showcase-visual {
        order: -1;
    }

    .features-grid, .testimonials-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .featured-testimonial {
        grid-template-columns: 1fr;
    }

    .featured-testimonial-author {
        border-left: none;
        border-top: 1px solid var(--glass-border);
    }

    .testimonial-trust-bar {
        gap: 24px;
        border-radius: 24px;
    }

    .pricing-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .pricing-card.popular {
        transform: none;
        order: -1;
    }

    .pricing-card.popular:hover {
        transform: translateY(-8px);
    }

    .pricing-footer {
        flex-direction: column;
        text-align: center;
    }

    .pricing-guarantee {
        flex-direction: column;
        text-align: center;
    }

    .pricing-trust {
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .footer-grid {
        grid-template-columns: repeat(3, 1fr);
    }

    .footer-brand {
        grid-column: 1 / -1;
    }

    .cta-card {
        grid-template-columns: 1fr;
        padding: 40px;
        gap: 40px;
    }

    .cta-visual {
        order: -1;
    }
}

@media (max-width: 768px) {
    .nav {
        padding: 10px 16px;
        gap: 16px;
    }

    .nav-links {
        display: none;
    }

    .hero {
        padding: 120px 20px 80px;
    }

    .hero-stats {
        flex-wrap: wrap;
        gap: 24px;
    }

    .hero-stat {
        padding-right: 0;
    }

    .hero-stat::after {
        display: none;
    }

    .features-grid, .testimonials-grid {
        grid-template-columns: 1fr;
    }

    .featured-metrics {
        flex-wrap: wrap;
        gap: 20px;
    }

    .featured-testimonial-content {
        padding: 32px;
    }

    .featured-testimonial-author {
        padding: 32px;
    }

    .testimonial-trust-bar {
        flex-direction: column;
        gap: 16px;
        border-radius: 20px;
    }

    .platform-links {
        flex-direction: column;
        align-items: center;
    }

    .stats-grid {
        grid-template-columns: 1fr 1fr;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

    .footer-grid {
        grid-template-columns: 1fr 1fr;
        gap: 32px;
    }

    .footer-bottom {
        flex-direction: column;
        text-align: center;
    }

    .cta-card {
        padding: 32px;
        border-radius: 24px;
    }

    .cta-features {
        flex-direction: column;
        gap: 12px;
    }

    .cta-buttons {
        flex-direction: column;
    }

    .cta-buttons .btn {
        width: 100%;
        justify-content: center;
    }

    .cta-badges-row {
        flex-direction: column;
    }

    .cta-trust {
        flex-direction: column;
        align-items: flex-start;
    }

    .faq-grid {
        grid-template-columns: 1fr;
    }

    .faq-resources {
        grid-template-columns: 1fr;
    }

    .faq-header {
        flex-direction: column;
    }

    .faq-contact-card {
        width: 100%;
    }

    .faq-contact-btn {
        margin-left: 0;
        width: 100%;
        justify-content: center;
        margin-top: 12px;
    }

    .floating-badge {
        display: none;
    }
}

@media (max-width: 480px) {
    .hero-ctas {
        flex-direction: column;
    }

    .btn-large {
        width: 100%;
    }

    .stats-grid {
        grid-template-columns: 1fr;
    }

    .footer-grid {
        grid-template-columns: 1fr;
        text-align: center;
    }

    .footer-badges {
        justify-content: center;
    }

    .footer-legal {
        flex-direction: column;
        gap: 12px;
    }
}
