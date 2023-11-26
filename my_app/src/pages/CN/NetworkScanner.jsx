// NetworkScanner.jsx
import React from 'react';

const NetworkScanner = () => {
  return (
    <div>
      <h2>Network Scanner</h2>
      <p>
        Description: A network scanner identifies devices on a local network and provides information about their IP addresses and open ports.
      </p>

      <h3>How it Works:</h3>
      <p>
        IP Range Scan: Scan a range of IP addresses to discover active devices.
        Port Scanning: Determine open ports on each discovered device.
        Output Display: Display the results of the scan, including device IP addresses and open ports.
      </p>

    
    </div>
  );
};

export default NetworkScanner;
