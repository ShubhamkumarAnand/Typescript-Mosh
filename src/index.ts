// Intersection in Typescript an element which is of two type at the same time and can exhibits the both property

// let weight: number & string

type Draggable = {
	drag: () => void
}

type Resizable = {
	resize: () => void
}

type UiWidget = Draggable & Resizable

let textBox: UiWidget = {
	drag: () => {},
	resize: () => {},
}
