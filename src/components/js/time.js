function formatTime(t) {
  const dt = new Date(t);
  const hr = dt.getHours();
  const m = "0" + dt.getMinutes();
  
  return hr + ':' + m.substr(-2)
}
export default formatTime