import * as React from 'react';
import './Footer.css';
export default function Footer() {
  return (
    <div className="footer" data-testid='footer'>
      <h1>
        THEMES
      </h1>
      <div className="btn-container">
        <button type="button" className="btn purple-btn" />
        <button type="button" className="btn blue-btn" />
        <button type="button" className="btn gray-btn" />
      </div>
    </div>
  );
}