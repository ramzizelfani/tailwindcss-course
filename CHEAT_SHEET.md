# setting up tailwindcss through CDN

- Not the best option for productionc (not able to customize, very large file)
- for test purposes and small tutos
- you need to grab the cdn link from the official website and add it as a link tag to your index.html file

#### customizing tailwind with the tailwind-cli

- `npx tailwindcss-cli build inputfile.css -o outputfile.css`

#### Init tailwindcss in a project with postcss

- `npx tailwindcss init -p` // generate tailwind.config.js and postcss.config.js
