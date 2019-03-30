#!/usr/bin/env node

'use strict';

const cli = require('../src/index');

process.exitCode = cli.execute();
