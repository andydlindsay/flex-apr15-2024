// stdout => default place that we send information to
// stdin => default place that we receive information from

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (data) => {
  console.log(data);
});
