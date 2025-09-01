// Mock authentication for demonstration purposes
export function isAuthenticated(): boolean {
  // For this demo, we'll use a simple mock that returns true
  // In a real application, this would check actual authentication state
  return true;
}

export function getAuthStatus(): { authenticated: boolean } {
  return {
    authenticated: isAuthenticated(),
  };
}
