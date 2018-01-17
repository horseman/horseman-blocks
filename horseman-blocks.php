<?php
/**
 * Plugin Name: Horsemane Gutenberg Blocks
 * Plugin URI: https://horseman.io
 * Description: A collection of blocks to be used both in the backend and
 * front end of wordpress
 * Author: DevCave
 * Author URI: https://devcave.io
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package HB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Define global constants.
 *
 * @since 1.0.0
 */
// Plugin version.
if ( ! defined( 'HB_VERSION' ) ) {
	define( 'HB_VERSION', '1.0.0' );
}

if ( ! defined( 'HB_NAME' ) ) {
	define( 'HB_NAME', trim( dirname( plugin_basename( __FILE__ ) ), '/' ) );
}

if ( ! defined( 'HB_DIR' ) ) {
	define( 'HB_DIR', WP_PLUGIN_DIR . '/' . HB_NAME );
}

if ( ! defined( 'HB_URL' ) ) {
	define( 'HB_URL', WP_PLUGIN_URL . '/' . HB_NAME );
}

/**
 * Load Blocks
 */

function register_horseman_blocks() {
    wp_enqueue_script(
                'horseman-blocks',
                plugins_url( 'blocks/build.js', __FILE__ ),
                array( 'wp-blocks', 'wp-element' )
    );
}
add_action( 'init', 'register_horseman_blocks' );

