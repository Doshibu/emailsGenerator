const ArgumentParser = require('argparse').ArgumentParser
const fs = require('fs')

const parser = new ArgumentParser({
  version: '0.0.1',
  addHelp: true,
  description: 'Argparse example'
})
parser.addArgument([ '-f', '--firstname' ], {
  help: 'Firstname parameter',
  defaultValue: 'riri'
})
parser.addArgument([ '-l', '--lastname' ], {
  help: 'Lastname parameter',
  defaultValue: 'fifi'
})
parser.addArgument([ '-s', '--separators' ], {
  help: 'Accepted separator parameter',
  defaultValue: '!#$%&*+-/=?^_`{|}~'.split('')
})
parser.addArgument([ '-d', '--domain' ], {
  help: 'Domain parameter',
  defaultValue: 'gmail.com'
})

// Syntaxic email rules : http://rumkin.com/software/email/rules.php
const prefixValidator = input => input.replace(/[^a-z0-9!#$%&'*+-/=?^_`{|}~]/gi, '')
// Syntaxic domain name rules : https://www.domainit.com/support/faq.mhtml?category=Domain_FAQ&question=9
const firstname = prefixValidator(parser.parseArgs().firstname.toLowerCase())
const lastname = prefixValidator(parser.parseArgs().lastname.toLowerCase())
const domain = parser.parseArgs().domain.toLowerCase()
const emails = []
parser.parseArgs().separators.forEach((symbol) => {
  emails.push(`${firstname}${symbol}${lastname}@${domain}`)
  emails.push(`${lastname}${symbol}${firstname}@${domain}`)
  emails.push(`${firstname.charAt(0)}${symbol}${lastname}@${domain}`)
  emails.push(`${lastname}${symbol}${firstname.charAt(0)}@${domain}`)
})
console.log(emails)

const output = () => emails.map((e) => `${firstname},${lastname},${domain},${e}`).join('\r\n')
fs.writeFile('emails.csv', output(), (err) => {
  if (err) throw err
  console.log('Server : emails.csv has been generated. Check it out !')
})
