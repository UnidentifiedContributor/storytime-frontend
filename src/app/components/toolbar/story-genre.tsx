import {
	WandSparkles,
	Atom,
	Swords,
	Heart,
	Drama,
	Biohazard,
	Clapperboard,
	BrainCircuit,
} from "lucide-react"
import type { PropsWithChildren, MouseEventHandler } from "react"
import { ToggleItem } from "@radix-ui/react-toolbar"

export type StoryButtonGenreProps = {
	id: string
	disabled?: boolean
	onClick: MouseEventHandler
} & PropsWithChildren

export const storyGenres = {
	magic: "Magical Wizardry",
	scifi: "Science Fiction",
	swords: "Sword & Sorcery",
	romance: "Romance Novel",
	drama: "Classic Drama",
	apocalypse: "Apocalypse Now",
	hollywood: "Hollywood Action",
	singularity: "The Singularity",
}

export function StoryGenreButton(props: StoryButtonGenreProps) {
	const { id } = props
	return (
		<ToggleItem
			className=" inline-flex h-[32px] flex-shrink-0 flex-grow-0 basis-auto items-center justify-center rounded bg-white px-[5px] text-[13px] leading-none text-mauve11 outline-none first:ml-0 hover:bg-violet3 hover:text-violet11 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7 data-[state=on]:bg-violet5 data-[state=on]:text-violet11"
			value={id}
			aria-label={storyGenres[id as keyof typeof storyGenres]}
			{...props}
		>
			{id === "magic" && <WandSparkles />}
			{id === "scifi" && <Atom />}
			{id === "swords" && <Swords />}
			{id === "romance" && <Heart />}
			{id === "drama" && <Drama />}
			{id === "apocalypse" && <Biohazard />}
			{id === "hollywood" && <Clapperboard />}
			{id === "singularity" && <BrainCircuit />}
		</ToggleItem>
	)
}