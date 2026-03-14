type GeolocationResult =
  | { status: "access_request" }
  | { status: "access_denied" }
  | { status: "success"; data: GeolocationPosition };

export async function getSmartLocation(): Promise<GeolocationResult> {
  // 1. Check if the browser supports the Permissions API
  if (navigator.permissions && navigator.permissions.query) {
    try {
      const permissionStatus = await navigator.permissions.query({ name: "geolocation" });

      // -> first time, not allowed (Prompt hasn't been shown yet)
      if (permissionStatus.state === "prompt") {
        return { status: "access_request" };
      }

      // -> not allowed/denied
      if (permissionStatus.state === "denied") {
        return { status: "access_denied" };
      }
    } catch (error) {
      console.warn("Permissions API error, falling back to direct request", error);
    }
  }

  // 2. If 'granted' or Permissions API is unavailable, try to get the position
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // -> allowed / success
        resolve({ status: "success", data: position });
      },
      (error) => {
        // Handle cases where user denies the popup or system blocks it
        if (error.code === error.PERMISSION_DENIED) {
          resolve({ status: "access_denied" });
        } else {
          // Could be timeout or position unavailable
          resolve({ status: "access_denied" });
        }
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
    );
  });
}
