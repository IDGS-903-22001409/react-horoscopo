import React from "react";
import "./ReloadPrompt.css";
import { useRegisterSW } from "virtual:pwa-register/react";

function ReloadPrompt() {
  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log("✅ Service Worker registrado:", r);
    },
    onRegisterError(error) {
      console.error("❌ Error al registrar Service Worker:", error);
    },
  });

  const close = () => {
    setOfflineReady(false);
    setNeedRefresh(false);
  };

  const reload = () => {
    updateServiceWorker(true);
  };

  if (!offlineReady && !needRefresh) {
    return null;
  }

  return (
    <div className="ReloadPrompt-container">
      <div className="ReloadPrompt-toast">
        <div className="ReloadPrompt-message">
          {offlineReady ? (
            <>
              <span className="ReloadPrompt-icon">🔌</span>
              App lista para funcionar sin conexión
            </>
          ) : (
            <>
              <span className="ReloadPrompt-icon">🆕</span>
              Nuevo contenido disponible. Haz clic en recargar para actualizar.
            </>
          )}
        </div>

        <div className="ReloadPrompt-buttons">
          {needRefresh && (
            <button
              className="ReloadPrompt-button ReloadPrompt-button--primary"
              onClick={reload}
              aria-label="Recargar la aplicación para obtener la última versión"
            >
              Recargar
            </button>
          )}
          <button
            className="ReloadPrompt-button ReloadPrompt-button--secondary"
            onClick={close}
            aria-label="Cerrar notificación"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReloadPrompt;
