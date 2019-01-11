module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  testMatch: [
    '**/test/**/*.test.js'
  ],
  testEnvironment: 'node'
}
