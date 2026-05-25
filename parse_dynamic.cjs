const fs = require('fs');

try {
  const fileContent = fs.readFileSync('dynamic_model_response.json', 'utf8');
  const data = JSON.parse(fileContent);
  console.log('Successfully parsed dynamic model JSON.');
  console.log('Top level keys:', Object.keys(data));
  
  // Let's write the formatted JSON to another file to make it easier to read
  fs.writeFileSync('dynamic_model_pretty.json', JSON.stringify(data, null, 2));
  console.log('Saved pretty JSON to dynamic_model_pretty.json');
  
  // Let's search inside the dynamic model for any image assets or wixstatic URLs
  const strData = JSON.stringify(data);
  const wixImageIdRegex = /[0-9a-fA-F_]+~mv2(_d)?\.(webp|jpg|png|jpeg)/g;
  const matches = strData.match(wixImageIdRegex) || [];
  const uniqueMatches = Array.from(new Set(matches));
  console.log(`\nFound ${uniqueMatches.length} unique image asset IDs:`);
  uniqueMatches.forEach((id, i) => {
    console.log(`${i + 1}: ${id}`);
  });
  
  // Let's search for name keys or search for "Gaurvi" or "Kangan"
  const names = ['Gaurvi', 'Kangan', 'Piyush', 'Ravi Pratap', 'Rishabh', 'Ridhambh', 'Suchita', 'Ajay', 'Nitin', 'Rohit', 'Deepak', 'Samyak', 'Rajneesh', 'Yogesh', 'Karan', 'Himanshu', 'Sachin', 'Manmohan', 'Mukund'];
  names.forEach(name => {
    if (strData.includes(name)) {
      console.log(`FOUND Candidate: ${name}`);
    }
  });

} catch (err) {
  console.error('Failed to parse dynamic model response:', err);
}
