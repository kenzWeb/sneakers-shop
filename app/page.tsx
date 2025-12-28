import {FeaturedSection, Hero, NewDrops} from '@/components/home'

export default function Home() {
	return (
		<main className='min-h-screen bg-black overflow-x-hidden'>
			<Hero />
			<NewDrops />
			<FeaturedSection />
		</main>
	)
}
