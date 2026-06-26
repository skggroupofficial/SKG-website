// ============================================================
// SKG Website — Contact
// ============================================================
(function () {
  const SKG = window.SKGShriKuberGroupDesignSystem_2a6fdb || {};
  const { Button, Eyebrow, Input, Textarea, Select, Checkbox, Divider } = SKG;
  const { Container, Figure } = window;
  const D = window.SKGData;

  function ContactRow({ icon, label, children }) {
    return (
      <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start' }}>
        <i className={`ph ${icon}`} style={{ fontSize: '1.2rem', color: 'var(--accent)', marginTop: '0.15rem' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</span>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--text-primary)' }}>{children}</div>
        </div>
      </div>
    );
  }

  function Contact() {
    const [sent, setSent] = React.useState(false);
    const submit = (e) => { e.preventDefault(); setSent(true); };

    return (
      <main>
        <section style={{ padding: 'clamp(3rem, 6vw, 5rem) 0 0' }}>
          <Container size="xl">
            <Eyebrow dash>Contact</Eyebrow>
            <h1 className="skg-display" style={{ fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)', margin: '1rem 0 0', maxWidth: '18ch' }}>Let's talk about your ground.</h1>
          </Container>
        </section>

        <section style={{ padding: 'clamp(2.5rem, 5vw, 4rem) 0 var(--section-pad-y)' }}>
          <Container size="xl">
            <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 'clamp(2.5rem, 5vw, 5rem)', alignItems: 'start' }}>
              {/* Form */}
              <div style={{ background: 'var(--bone-100)', border: '1px solid var(--border-subtle)', padding: 'clamp(1.8rem, 3vw, 2.6rem)' }}>
                {sent ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start', padding: '2rem 0' }}>
                    <span style={{ fontSize: '2rem', color: 'var(--accent)' }}>✦</span>
                    <h3 className="skg-display" style={{ fontSize: '1.8rem' }}>Thank you.</h3>
                    <p className="skg-body" style={{ maxWidth: '40ch' }}>Your enquiry has reached the SKG partnership office. We reply to every serious approach within two working days.</p>
                    <Button variant="secondary" onClick={() => setSent(false)}>Send another</Button>
                  </div>
                ) : (
                  <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.3rem' }}>
                      <Input label="Full name" placeholder="Rahul Kuber" required />
                      <Input label="Email" type="email" placeholder="you@company.com" required />
                    </div>
                    <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.3rem' }}>
                      <Input label="Phone" placeholder="+91 …" />
                      <Select label="Enquiry type" placeholder="Choose one" options={['Land / JV', 'Investment', 'Hospitality', 'Press', 'Careers']} />
                    </div>
                    <Textarea label="About the site or opportunity" rows={4} placeholder="Location, size, current use, and what you have in mind…" />
                    <Checkbox label="I agree to be contacted about this enquiry." required />
                    <div><Button type="submit" variant="accent" iconRight={<i className="ph ph-arrow-right" />}>Send enquiry</Button></div>
                  </form>
                )}
              </div>

              {/* Office */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
                <Figure tone="dark" ratio="16 / 10" caption="Shri Kuber House · S.G. Highway" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
                  <ContactRow icon="ph-map-pin" label="Office">
                    {D.brand.address.map((l, i) => <div key={i}>{l}</div>)}
                  </ContactRow>
                  <ContactRow icon="ph-phone" label="Phone">{D.brand.phone}</ContactRow>
                  <ContactRow icon="ph-envelope-simple" label="Email">{D.brand.email}</ContactRow>
                  <ContactRow icon="ph-clock" label="Hours">Mon–Sat · 10:00–18:30 IST</ContactRow>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  window.Contact = Contact;
})();
