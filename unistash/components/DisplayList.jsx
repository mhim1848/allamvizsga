/* when creating components, follow these steps:
->	step 1: break the UI into a component hierarchy
->	step 2: build a static version
->	step 3: Identify the minimal but complete representation of the UI state */

// step 1
/*
	Name 		  Age
|--------|-------|
| George | 	21
|--------|-------|
|	Jerome |  32
|--------|-------|

# Breakdown
Component 1 => Header [Name, Age]
Component 2 => Rows [Georghe, 21, ...]
Component 3 => Container Component

*/

// step 2
// build a static version
export default function DisplayList(props) {
	const listData = [
		{
			id: 1,
			name: "George",
			age: 21,
		},
		{
			id: 2,
			name: "Jerome",
			age: 32,
		},
	];

	const moreListData = props.listData;

	return (
		<>
			<ul className="block m-8">
				{listData.map((value) => (
					<li key={value.id} className="font-bold text-2xl">
						Name: {value.name} <br /> Age: {value.age}
					</li>
				))}
			</ul>
			<br />

			{/* step 3 */}
			<ul className="block m-8">
				{/* Conditionally render a component with the logical AND operator
				Since true && anything evaluates to true, you can use that to
				conditionally render an element.
				*/}
				{moreListData &&
					moreListData.map((value) => (
						<li key={value.id} className="font-bold text-2xl">
							{value.data}
						</li>
					))}
			</ul>
		</>
	);
}
