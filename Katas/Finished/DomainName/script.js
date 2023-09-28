//i https://www.codewars.com/kata/514a024011ea4fb54200004b
const domainName = url => {
  url = url.replace('https://', '');
  url = url.replace('http://', '');
  url = url.replace('www.', '');

  return url.split('.')[0];
};
