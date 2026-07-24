"use client";
import styles from '../page.module.css';

export default function PrivacyPage() {
  return (
    <main className={styles.main} style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container" style={{maxWidth: '800px', margin: '0 auto', color: 'var(--text-color)', lineHeight: 1.8}}>
        <h1 style={{textAlign: 'center', marginBottom: '2rem'}}>Privacy Policy</h1>
        
        <h2>1. Information We Collect</h2>
        <p>When you request a quote or contact us via our website, we collect personal information such as your name, phone number, email address, and service address. This information is strictly used for providing our electrical services and communicating with you regarding your job.</p>
        
        <h2 style={{marginTop: '2rem'}}>2. How We Use Your Information</h2>
        <p>Your information is used to schedule appointments, provide accurate quotes, complete electrical work, and for invoicing purposes. We may also use your contact details to provide follow-up customer support or send important safety updates related to the services provided.</p>

        <h2 style={{marginTop: '2rem'}}>3. Data Sharing and Protection</h2>
        <p>Sparky Indro respects your privacy. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties unless required by law. We implement a variety of security measures to maintain the safety of your personal information.</p>

        <h2 style={{marginTop: '2rem'}}>4. Contact Us</h2>
        <p>If you have any questions regarding this privacy policy, you may contact us using the information on our <a href="/quote" style={{color: 'var(--accent-color)'}}>Quote page</a> or by calling 0468 991 300.</p>
        
        <p style={{marginTop: '3rem', fontSize: '0.9rem', color: '#666'}}>Last Updated: {new Date().toLocaleDateString('en-AU')}</p>
      </div>
    </main>
  );
}