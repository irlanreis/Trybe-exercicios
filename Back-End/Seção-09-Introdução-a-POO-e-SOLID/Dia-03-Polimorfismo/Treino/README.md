# Config do TypeScript

```bash
npm init -y
```

```bash
npm i -D typescript ts-node
```

```bash
npx tsc config
```
> config do **tsc**
```json
{
	
	"compilerOptions": {
		
		"target": "es2016",
		
		"module": "commonjs",
		
		"typeRoots": [
		
		"src/@types",
		
		"./node_modules/@types"
		
		],
		
		"esModuleInterop": true,
		
		"forceConsistentCasingInFileNames": true,
		
		"strict": true,
		
		"skipLibCheck": true

	}
}
```

```bash
npm i -D @types/node@lates
```
É possível especificar uma versão para o node.

***e checked.***
