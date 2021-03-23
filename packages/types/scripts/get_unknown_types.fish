#!/bin/env fish
yarn generate:meta 2>&1 | rg "type \w+, it" | sd -p ".*type (\w+), it.*" '$1' | sort | uniq
