const fs = require('fs')
const path = require('path')

function cleanFile(filePath) {
	const content = fs.readFileSync(filePath, 'utf8')
	const lines = content.split('\n')

	const newLines = lines.filter((line) => {
		const trimmed = line.trim()
		return (
			!trimmed.startsWith('// updated logic') &&
			!trimmed.startsWith('/* updated style') &&
			!trimmed.startsWith('<!-- updated docs')
		)
	})

	if (newLines.length !== lines.length) {
		console.log(
			`Cleaning ${filePath} (${lines.length - newLines.length} lines removed)`,
		)
		fs.writeFileSync(filePath, newLines.join('\n'))
	}
}

function traverseDir(dir) {
	const files = fs.readdirSync(dir)

	files.forEach((file) => {
		const fullPath = path.join(dir, file)
		if (fs.statSync(fullPath).isDirectory()) {
			if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
				traverseDir(fullPath)
			}
		} else {
			if (/\.(tsx|ts|js|css|md)$/.test(file)) {
				cleanFile(fullPath)
			}
		}
	})
}

traverseDir(process.cwd())
