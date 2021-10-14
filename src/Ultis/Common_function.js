export const Isonsharelocation = () => {
  if ("geolocation" in navigator) {
    return true;
  } else {
    return false;
  }
};
