import React from 'react';
import { S } from '../styles/theme';

export default function LandingPage({ onLogin }) {
  return (
    <div style={S.landing}>
      <div style={S.landingLogo}>NSTflix</div>
      <h1 style={S.landingH1}>Unlimited Movies, TV Shows & More</h1>
      <h2 style={S.landingH2}>Watch anywhere. Cancel anytime.</h2>
      <p style={{ fontFamily: "Georgia, serif", marginBottom: "2rem", color: "#ccc" }}>
        Ready to watch? Click below to start.
      </p>
      <button style={S.landingBtn} onClick={onLogin}>
        Get Started →
      </button>
    </div>
  );
}
