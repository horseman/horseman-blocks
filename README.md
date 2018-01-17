# Horseman Blocks
This is a collection of blocks for the Gutenberg editor that ipmlement a number
of [horseman components](https://github.com/horseman/horseman/tree/master/packages/horseman-components). 


## Contribution
In order to get a development environement for `horseman-blocks` setup:

1. clone this repo into `wp-content/plugins` 
2. Run `yarn install`
3. Then run `yarn dev` in a terminal window and keep it open. It will watch for 
any changes and make updates as necessary.

### New Blocks
To add a new block, create a folder in `blocks` and then import it in 
`blocks/index.js`.
