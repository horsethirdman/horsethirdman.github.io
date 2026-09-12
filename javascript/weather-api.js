fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=en')
  .then(r => r.json())
  .then(d => {
    // Prefer the tropical cyclone warning if present
    const tc = d.WTCSGNL;
    const code = tc && tc.code ? tc.code : null;

    const banner = document.querySelector('.banner');
    const img = document.getElementById('signal');

    // If elements are missing, bail out gracefully
    if (!banner || !img) return;

    if (code) {
      img.src = `/images/warnings/${code}.png`;
      img.alt = tc.name || code;
      banner.hidden = false; // show the whole banner when there's a signal
    } else {
      banner.hidden = true; // hide the whole banner when there's no signal
    }
  })
  .catch(err => {
    console.error('Weather API error:', err);
  });
