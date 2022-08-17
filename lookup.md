# Windows configs to use node packages locally
set exec_lab=%HOMEPATH%\Desktop\Lab\node_modules\.bin
set PATH=%PATH%;%exec_lab%

# Local project path
src=~/Desktop/Lab/src && export src

# rimraf library is the UNIX command rm -rf for node.
--> Install
    $ npm install rimraf -D | $ npm install rimraf --save-dev