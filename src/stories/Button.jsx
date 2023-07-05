import "../index.css"

export const Button = ({ variant, label, ...props }) => {
	let background = ""
	if (variant === "primary") {
		background = "bg-blue-500"
	} else if (variant === "secondary") {
		background = "bg-gray-500"
	} else if (variant === "success") {
		background = "bg-green-500"
	} else {
		background = "bg-red-500"
	}
	return (
		<div className="flex justify-center">
			<button
				className={`${background} px-3 py-1 rounded-md flex justify-center`}
        {...props}
			>
				{label}
			</button>
		</div>
	)
}
