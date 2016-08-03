'use strict';

angular.module('tipTopApp.version', [
  'tipTopApp.version.interpolate-filter',
  'tipTopApp.version.version-directive'
])

.value('version', '0.1');
