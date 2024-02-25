# node-echowo
Re-write of echowo on node.js with typescript to learn node and typescript. Now also features a build script in Powershell.

Copyright 2024, Markus Aigner (perceptified[AT]gmail.com)

## License Info
This program is licensed under the GNU GPL version 3 - see LICENSE.txt for information. See also: https://www.gnu.org/licenses/gpl-3.0
Source code can be obtained at: https://github.com/Perceptified/node-echowo"

## Current Version

2024-24-02

In the vein of rolling-release linux distros, I've chosen to not really do version numbers across my projects, instead opting to release when the package is ready
and using the date of the final changes I do on my side as the version number.

## Installation

Download the package appropriate to your platform, unzip it and you're good to go. Configuration can be found in ./data/config.json

## Configuration

config.json contains both the replacements and also the interjections which the software package uses on input-strings. Interjections are
saved and handled as an array, while the replacements are done as a Key/Value pair, where the software looks for the Key in the input string,
then replaces it with the value assigned to that key.

## Options
-c 
: turns off guaranteed interjection
-h 
: displays help information and exits
-v 
: displays version information and exits

