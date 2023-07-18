const formatDuration = (seconds) => { 
    if (seconds === 0) {
      return "now";
    }
  
    const MINUTE = 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    const YEAR = DAY * 365;
  
    const years = Math.floor(seconds / YEAR);
    seconds -= years * YEAR;
  
    const days = Math.floor(seconds / DAY);
    seconds -= days * DAY;
  
    const hours = Math.floor(seconds / HOUR);
    seconds -= hours * HOUR;
  
    const minutes = Math.floor(seconds / MINUTE);
    seconds -= minutes * MINUTE;
  
    const parts = [];
    if (years > 0) {
      const suffix = years === 1 ? "" : "s";
      parts.push(`${years} year${suffix}`);
    }
    if (days > 0) {
      const suffix = days === 1 ? "" : "s";
      parts.push(`${days} day${suffix}`);
    }
    if (hours > 0) {
      const suffix = hours === 1 ? "" : "s";
      parts.push(`${hours} hour${suffix}`);
    }
    if (minutes > 0) {
      const suffix = minutes === 1 ? "" : "s";
      parts.push(`${minutes} minute${suffix}`);
    }
    if (seconds > 0) {
      const suffix = seconds === 1 ? "" : "s";
      parts.push(`${seconds} second${suffix}`);
    }
  
    if (parts.length === 1) {
      return parts[0];
    }
    if (parts.length === 2) {
      return `${parts[0]} and ${parts[1]}`;
    }
    const lastPart = parts.pop();
    const joinedParts = parts.join(", ");
    return `${joinedParts} and ${lastPart}`;
  }
  
  const res = formatDuration(3662)
  console.log(res)