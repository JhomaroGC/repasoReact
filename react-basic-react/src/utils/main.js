
export function getCurrentDate(separator = "") {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let today = new Date();
    return today.toLocaleDateString(undefined, options);
  }