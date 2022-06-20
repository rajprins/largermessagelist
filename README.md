# Larger Message List
An extension for Mozilla Thunderbird that improved the readbility of the message/thread list by using a slightly larger fonts and wider spacing in the folder tree view.

More information can be found [here](https://addons.thunderbird.net/en-us/thunderbird/addon/largermessagelist/)

## Build instructions
This extension does not have a build process as it consists of pure JavaScript and CSS. No additional tools or frameworks are used.
Simply run the provided build/package script `build.sh`


## Manual packaging instructions
To manually package the source files in a distributable file, follow these instructions:

*MacOS*  
Compress the contents of the "src" directory (but not the directory itself):  
* Open the directory "src", which contains the extension's source files.
* Select all files and directories.
* Open the shortcut menu and click "Compress".
* Rename the zip file to "LargerMessageList.xpi"

