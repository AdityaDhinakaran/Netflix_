import React, { useState } from 'react';
import { S } from '../styles/theme';

export default function Navbar({ onSearch, scrolled }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState("");

  function handleSearch(val) {
    setSearchVal(val);
    onSearch(val);
  }

  return (
    <nav style={{ ...S.navbar, ...(scrolled ? S.navbarScrolled : {}) }}>
      <div style={S.logo}>NSTflix</div>

      <div style={S.navRight}>
        {searchOpen ? (
          <input
            autoFocus
            style={S.searchInput}
            type="text"
            placeholder="Search titles..."
            value={searchVal}
            onChange={(e) => handleSearch(e.target.value)}
            onBlur={() => {
              if (!searchVal) setSearchOpen(false);
            }}
          />
        ) : (
          <button style={S.navBtn} onClick={() => setSearchOpen(true)} title="Search">
            🔍
          </button>
        )}
        <button style={S.navBtn} title="Notifications">🔔</button>
        <div style={S.profileCircle}>ME</div>
      </div>
    </nav>
  );
}
