## How to setup Tailwind CSs

Step 1:Run the following commands

 ```
 npm install -D tailwindcss

npx tailwindcss init 
```

Step2
Update tailwind.config.js to include this 

```
  content: ["*.html"],
```
step 3:
create src/input.css tp include

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4:
Include the src/output.css file in your html

Step%:
run the follwoing command 

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```


