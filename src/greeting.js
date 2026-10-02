export function greeting(name) {
  const displayName = name.trim();
  return displayName ? `Hello, ${displayName}!` : "Hello!";
}
