'use client'

import { DropCard } from '@/components/drops'
import { upcomingDrops } from '@/data/drops'
import { motion } from 'framer-motion'

export default function DropsPage() {
	return (
		<div className="min-h-screen py-24 px-4 md:px-8">
			<div className="max-w-5xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-16"
				>
					<p className="text-cyber-blue font-mono text-sm uppercase tracking-widest mb-2">
						Mark Your Calendar
					</p>
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
						Upcoming Drops
					</h1>
					<p className="text-white/50 max-w-lg mx-auto">
						Be the first to cop the most exclusive releases. Set your alarms.
					</p>
				</motion.div>

				<div className="space-y-8">
					{upcomingDrops.map((drop, index) => (
						<DropCard
							key={drop.sneaker.id}
							sneaker={drop.sneaker}
							dropDate={drop.dropDate}
							index={index}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
