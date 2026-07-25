fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=warnsum&lang=en')
  .then(r => r.json())
  .then(d => {
    // Prefer the tropical cyclone warning if present
    const tc = d.WTCSGNL;
    const code = tc && tc.code ? tc.code : null;

    const img = document.getElementById('signal');
    if (code) {
      img.src = `/images/warnings/${code}.png`;
      img.alt = tc.name || code;
    } else {
      // optional: hide the image or show a "no signal" placeholder
      img.style.display = 'none';
      // or: img.src = '/images/warnings/placeholder.png';
    }
  })
  .catch(err => {
    console.error('Weather API error:', err);
  });
