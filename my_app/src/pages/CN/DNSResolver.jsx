// DNSResolver.jsx
import React from 'react';

const DNSResolver = () => {
  return (
    <div>
      <h2>DNS Resolver</h2>
      <p>
        Description: A DNS resolver translates domain names into IP addresses, allowing clients to access websites using human-readable names.
      </p>

      <h3>How it Works:</h3>
      <p>
        User Input: Accept a domain name as input.
        DNS Query: Send a DNS query to a DNS server to resolve the domain name.
        Response Parsing: Parse the DNS response to obtain the corresponding IP address.
        Display Result: Display the resolved IP address.
      </p>

     
    </div>
  );
};

export default DNSResolver;
