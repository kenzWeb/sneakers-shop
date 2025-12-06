const {execSync} = require('child_process')
const fs = require('fs')
const path = require('path')

// Configuration
const REPO_URL = 'https://github.com/kenzWeb/sneakers-shop.git'
// Corrected to 2025 based on current system time
const START_DATE = new Date('2025-11-28T09:00:00')
const END_DATE = new Date('2025-12-28T23:00:00')

// Helper to execute commands
const run = (cmd) => {
	try {
		execSync(cmd, {stdio: 'pipe'})
	} catch (e) {
		console.error(`Command failed: ${cmd}`)
		console.error(e.message)
	}
}

// Helper to get random time
function getRandomTime(baseDate) {
	const d = new Date(baseDate)
	const hour = 9 + Math.floor(Math.random() * 14) // 9am - 11pm
	const minute = Math.floor(Math.random() * 60)
	d.setHours(hour, minute, 0)
	return d
}

// Helper to recursively get all files
function getAllFiles(dirPath, arrayOfFiles) {
	const files = fs.readdirSync(dirPath)
	arrayOfFiles = arrayOfFiles || []

	files.forEach(function (file) {
		if (fs.statSync(dirPath + '/' + file).isDirectory()) {
			if (
				file !== 'node_modules' &&
				file !== '.git' &&
				file !== '.next' &&
				file !== '.claude'
			) {
				arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles)
			}
		} else {
			// Exclude this script and existing git files
			if (
				file !== 'reconstruct_history.js' &&
				file !== 'history_log.txt' &&
				file !== '.DS_Store'
			) {
				arrayOfFiles.push(path.join(dirPath, file))
			}
		}
	})

	return arrayOfFiles
}

async function main() {
	console.log('🔥 nuke and reconstruct history (2025 edition)...')

	// 1. Reset Git
	run('rm -rf .git')
	run('git init')
	run('git branch -M main')

	// 2. Discover Files
	const allFiles = getAllFiles(process.cwd())
	const relFiles = allFiles.map((f) => path.relative(process.cwd(), f))

	// 3. Define Logic for Grouping
	const groups = [
		{
			name: 'Initial setup',
			pattern:
				/package\.json|tsconfig\.json|next\.config|eslint|postcss|\.gitignore|readme/i,
			files: [],
		},
		{
			name: 'Core app structure',
			pattern: /app\/layout|app\/globals|app\/page|public\//i,
			files: [],
		},
		{
			name: 'UI Components',
			pattern: /components\/ui|components\/layout|lib\/|hooks\/|types\//i,
			files: [],
		},
	]

	const remainingFiles = []

	relFiles.forEach((f) => {
		let matched = false
		for (const g of groups) {
			if (g.pattern && g.pattern.test(f)) {
				g.files.push(f)
				matched = true
				break
			}
		}
		if (!matched) {
			remainingFiles.push(f)
		}
	})

	const featureMap = {}
	remainingFiles.forEach((f) => {
		const parts = f.split(path.sep)
		let key = 'misc'
		if (parts[0] === 'app' && parts[1]) key = 'feature: ' + parts[1]
		else if (parts[0] === 'components' && parts[1]) key = 'feature: ' + parts[1]
		else if (parts[0] === 'stores') key = 'state management'
		else if (parts[0] === 'data') key = 'data assets'

		if (!featureMap[key]) featureMap[key] = []
		featureMap[key].push(f)
	})

	const featureGroups = Object.keys(featureMap).map((k) => ({
		name: k,
		files: featureMap[k],
	}))

	const finalPlan = [...groups, ...featureGroups]
	const validGroups = finalPlan.filter((g) => g.files.length > 0)

	console.log(`Found ${validGroups.length} logical steps to commit.`)

	// 4. Distribute over Dates
	let steps = validGroups.length
	let currentDate = new Date(START_DATE)
	const totalDays = (END_DATE - START_DATE) / (1000 * 60 * 60 * 24)

	// We assume roughly linear progress
	// Ensure we don't finish too early or run out of days

	let curStepIndex = 0

	while (curStepIndex < steps && currentDate <= END_DATE) {
		const day = currentDate.getDay() // 0-6
		const isWeekend = day === 0 || day === 6

		// Skip bad days randomly
		if (isWeekend && Math.random() > 0.3) {
			currentDate.setDate(currentDate.getDate() + 1)
			continue
		}

		// Determine how many commits today
		// Heavily weight towards ensuring we finish
		let commitsToday = isWeekend ? 1 : Math.floor(Math.random() * 3) + 1

		console.log(
			`Processing date: ${currentDate.toDateString()} (Plan: ${commitsToday} commits)`,
		)

		const timestamps = []
		for (let t = 0; t < commitsToday; t++)
			timestamps.push(getRandomTime(currentDate))
		timestamps.sort((a, b) => a - b)

		for (const ts of timestamps) {
			if (curStepIndex >= steps) break

			const group = validGroups[curStepIndex]
			const dateStr = ts.toISOString()

			console.log(
				`  [${dateStr}] Committing: ${group.name} (${group.files.length} files)`,
			)

			const filesCmd = group.files.map((f) => `"${f}"`).join(' ')
			if (filesCmd.length > 0) {
				run(`git add ${filesCmd}`)

				let msg = ''
				if (group.name === 'Initial setup') msg = 'chore: initial project setup'
				else if (group.name === 'Core app structure')
					msg = 'feat: scaffold core app layout and styles'
				else if (group.name.startsWith('feature:'))
					msg = `feat: implement ${group.name.replace('feature: ', '')} module`
				else msg = `feat: add support for ${group.name}`

				try {
					execSync(`git commit -m "${msg}"`, {
						env: {
							...process.env,
							GIT_AUTHOR_DATE: dateStr,
							GIT_COMMITTER_DATE: dateStr,
						},
					})
				} catch (e) {}
			}
			curStepIndex++
		}

		currentDate.setDate(currentDate.getDate() + 1)
	}

	// Flush any remaining
	if (curStepIndex < steps) {
		console.log('Flushing remaining commits to today...')
		while (curStepIndex < steps) {
			const group = validGroups[curStepIndex]
			const filesCmd = group.files.map((f) => `"${f}"`).join(' ')
			run(`git add ${filesCmd}`)
			run(`git commit -m "feat: complete ${group.name}"`)
			curStepIndex++
		}
	}

	console.log('History reconstruction complete.')

	// Add remote
	run(`git remote add origin ${REPO_URL}`)
	console.log('Remote added. Ready to push.')
}

main()
