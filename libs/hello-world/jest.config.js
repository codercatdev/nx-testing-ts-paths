module.exports = {
  name: 'hello-world',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/hello-world',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
