echo "#!/usr/bin/env node" | cat - dist/index.js > temp && mv temp dist/index.js
chmod u+x dist/index.js
