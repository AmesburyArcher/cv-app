import { useState, useRef } from "react";

export default function Header({ handleModeEdit, handleModeView, mode }) {
  return (
    <header className="header">
      <h1 className="header__title">Allo Resume!</h1>
      <div className="header__buttons__container">
        <button
          onClick={handleModeEdit}
          className={
            mode === 0
              ? "header__button edit__mode__button active"
              : "header__button edit__mode__button"
          }
        >
          Editing Mode
        </button>
        <span className="between__buttons__or">or</span>
        <button
          onClick={handleModeView}
          className={
            mode === 1
              ? "header__button view__mode__button active"
              : "header__button view__mode__button"
          }
        >
          Viewing Mode
        </button>
      </div>
    </header>
  );
}
