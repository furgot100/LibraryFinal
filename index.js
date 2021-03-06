/* eslint-disable no-console */
const D = require('@furgot100/dates-lib');
const data = require('./data.json');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function isEmpty(str) {
  const words = str.trim().split('');
  for (let i = 0; i < words.length; i += 1) {
    if (words[i] !== ('\n' || '\r' || '\t')) {
      return false;
    }
  }
  return true;
}

function upperCase(str) {
  if (isEmpty(str) === true) {
    return '';
  }
  const strEndSlice = str.slice(1);
  const firstLetter = str[0].toUpperCase();
  return firstLetter + strEndSlice;
}

function formatNumber(phoneNumber) {
  if (isEmpty(phoneNumber) === true) {
    return 'No phone number on file';
  }
  const areaCode = phoneNumber.slice(0, 3);
  const middle = phoneNumber.slice(3, 6);
  const end = phoneNumber.slice(6);
  return `(${areaCode})${middle}-${end}`;
}

function Data() {
  for (let i = 0; i < data.length; i += 1) {
    // Name
    console.log(`${upperCase(data[i].first_name)} ${upperCase(data[i].last_name)}`);
    // Car Model
    console.log(`${upperCase(data[i].make)} ${upperCase(data[i].model)}`);
    // Purchase Date
    const purchaseDate = new Date(data[i].purchased);
    console.log(`Purchased: ${months[purchaseDate.getMonth()]} ${purchaseDate.getDate()}, ${purchaseDate.getFullYear()}`);
    // Last Payment
    const lastPayment = new D(data[i].lastpayment);
    console.log(lastPayment.when());
    // Phone Number
    console.log(`Phone: ${formatNumber(data[i].phone)}`);
    // City
    console.log(`City: ${upperCase(data[i].city)}`);
  }
}

Data();
module.exports = { formatNumber };
