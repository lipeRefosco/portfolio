import Button from "../Button";

const menuButtonStyle = {
	padding: "15px 20px"
}

export default function MenuButton({children} : {children: any}) {
	return <Button disabled={true} style={menuButtonStyle} filled={true}>{children}</Button>
}