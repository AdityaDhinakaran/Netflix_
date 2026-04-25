import React from 'react';
import { S } from '../styles/theme';

export default function Footer() {
  return (
    <footer style={S.footer}>
      <div style={S.footerLogo}>NSTflix</div>
      <p>Questions? Call 1-800-NST-FLIX</p>
      <br />
      <p>© 2026 NSTflix. All rights reserved.</p>
    </footer>
  );
}
