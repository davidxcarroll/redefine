<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'redefine-local');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'pg3H+Ks~ *aeIoH;r9vBp|ry^$KECnv&O++MIsDGFcJ=7dbL+D-((`,x|jL@Y7xf');
define('SECURE_AUTH_KEY',  'ayW7PM3xJ^c(QWH:Va|#.j/suipxb3+A~/i-WeoH=UuxEQ|#`7mM)=Dm^FaRcbPT');
define('LOGGED_IN_KEY',    ',=BO[uRd+pBr~gWix1uW7i+4W,`?md=3/wvV4XUP-.OhbXQ5tkgn )qtT!bL/:L}');
define('NONCE_KEY',        '06K>zQK6`?4/]5G(`xdKp@%v+}<b:f,*}kZqL.rA6$Too}|-sD-Q?Q;ugbS~S=&`');
define('AUTH_SALT',        '5gGJ0Q+OgymeiQO_5^Tf46C7HNh<Y;3rxjPBo@GlNnk>0ST||`abE.])]N]UjQP<');
define('SECURE_AUTH_SALT', 'P4x)KvTrfq<0Q5b2-?kz4~aD)D+<M,%[}9v9;Aj)%Olf`6Hr)EpF%M/Gg< {^FJO');
define('LOGGED_IN_SALT',   '<.Rx>RkWeu=C>iw.xR@g(GCy.&>((nd%Tb4O#?yS +Kp9:BIDUmw`g^s:|Es J& ');
define('NONCE_SALT',       '4D,t^G`01|(1A=ZL,$:CQxWazJ[U}wX=, -_b!ot c:>hObI9^%K>N@r@C,77Ln4');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
