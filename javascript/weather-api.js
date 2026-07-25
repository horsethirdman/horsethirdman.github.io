async function fetchTyphoonSignal() {
  try {
    // Fetching warning summary API from HKO
    const response = await fetch('https://weather.gov.hk');
    const data = await response.json();

    const container = document.getElementById('hko-typhoon-signal');

    // Check if there are active warnings and look for tropical cyclones (TC)
    let activeSignals = [];
    for (let key in data) {
      if (data[key].code) {
        activeSignals.push(data[key].name);
      }
    }

    if (activeSignals.length > 0) {
      container.innerHTML = `<strong>Active HKO Warning:</strong> ${activeSignals.join(', ')}`;
    } else {
      container.innerHTML = 'No tropical cyclone warning signals in force.';
    }
  } catch (error) {
    document.getElementById('hko-typhoon-signal').innerHTML = 'Unable to load weather data.';
  }
}

fetchTyphoonSignal();
