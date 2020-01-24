module.exports = {
  name: 'testing',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/testing',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
