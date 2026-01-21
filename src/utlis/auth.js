export function saveAuth(token, user) {
  localStorage.setItem("auth_token", token);
  localStorage.setItem("auth_user", JSON.stringify(user));
}

export function getToken() {
  return localStorage.getItem("auth_token");
}

export function getUser() {
  const user = localStorage.getItem("auth_user");
  return user ? JSON.parse(user) : null;
}

export function isLoggedIn() {
  return !!getToken();
}

export function logout() {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("auth_user");
}
