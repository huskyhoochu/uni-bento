#!/usr/bin/env node

'use strict';

const cli = require('../lib/index');

process.exitCode = cli.execute();
