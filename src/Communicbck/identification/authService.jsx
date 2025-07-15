// authService.jsx

const BASE_URL = import.meta.env.VITE_b;

export const login = async (credentials) => {
  const response = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
    credentials: 'include'
  });

  if (!response.ok) throw new Error('Échec de la connexion');
  return await response.json();
};

export const loginAfter2FA = async (credentials) => {
  const response = await fetch(`${BASE_URL}/api/auth/login-after-2fa`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
    credentials: 'include'
  });

  if (!response.ok) throw new Error('Échec de la connexion après 2FA');
  return await response.json();
};

export const checkSession = async () => {
  const response = await fetch(`${BASE_URL}/api/auth/check-session`, {
    credentials: 'include'
  });

  if (!response.ok) throw new Error('Session invalide');
  return await response.json();
};
