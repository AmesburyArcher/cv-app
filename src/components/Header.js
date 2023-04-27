import { useState } from "react";

export default function Header({ handleModeEdit, handleModeView }) {
  return (
    <header className="header">
      <h1 className="header__title">Allo Resume!</h1>
      <div className="header__buttons__container">
        <button
          onClick={handleModeEdit}
          className="header__button edit__mode__button active"
        >
          Editing Mode
        </button>
        <span className="between__buttons__or">or</span>
        <button
          onClick={handleModeView}
          className="header__button view__mode__button"
        >
          Viewing Mode
        </button>
      </div>
    </header>
  );
}
