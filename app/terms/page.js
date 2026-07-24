"use client";
import styles from '../page.module.css';

export default function TermsPage() {
  return (
    <main className={styles.main} style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="container" style={{maxWidth: '800px', margin: '0 auto', color: 'var(--text-color)', lineHeight: 1.8}}>
        <h1 style={{textAlign: 'center', marginBottom: '2rem'}}>Terms and Conditions</h1>
        
        <h2>1. General</h2>
        <p>These terms and conditions apply to all electrical services and products provided by Sparky Indro. By accepting a quote or authorizing work to proceed, you agree to be bound by these terms.</p>
        
        <h2 style={{marginTop: '2rem'}}>2. Pricing and Payment</h2>
        <p>All quotes provided are valid for 30 days unless otherwise stated. Payment is due strictly upon completion of the work unless a prior account arrangement has been made. We accept bank transfer, credit card, and cash.</p>

        <h2 style={{marginTop: '2rem'}}>3. Workmanship Guarantee and Consumer Rights</h2>
        <p>Sparky Indro provides a lifetime guarantee on all workmanship. This guarantee operates alongside your rights under the Australian Consumer Law (ACL), overseen by the ACCC. If any work is found to be defective due to our workmanship, we will rectify it at no additional cost to you.</p>

        <h2 style={{marginTop: '2rem'}}>4. Liability</h2>
        <p>While every care is taken, Sparky Indro is not liable for pre-existing electrical faults, damages caused by third parties, or issues arising from the client's failure to maintain their electrical systems. We are fully licensed and insured for your peace of mind.</p>
        
        <p style={{marginTop: '3rem', fontSize: '0.9rem', color: '#666'}}>Last Updated: {new Date().toLocaleDateString('en-AU')}</p>
      </div>
    </main>
  );
}